import Config from "./config";
import type { ModelItem } from "./types";
import {
  deepReplacePlaceholders,
  encodeMultipart,
  formatHttpError,
  getByPath,
  hexToBase64,
  isHexString,
  isHttpUrl,
  parseJson,
  pickString,
  replacePlaceholders,
  withTimeout
} from "./utils";

const accessTokenCache: Record<string, { token: string; expireAt: number }> = {};
let accessTokenRequest: { key: string; promise: Promise<string> } | null = null;

async function requestText(url: string, init: RequestInit): Promise<string> {
  const response = await fetch(url, init);
  const bodyText = await response.text();
  if (!response.ok) {
    throw new Error(formatHttpError(response, bodyText));
  }
  return bodyText;
}

async function getAccessToken(model: ModelItem, timeoutMs: number): Promise<string> {
  const authUrl = model.request.authUrl;
  if (!authUrl) return "";
  const cacheKey = `${model.provider}|${model.apiKey}|${model.apiSecret}|${model.request.authTokenPath || ""}`;
  const cached = accessTokenCache[cacheKey];
  if (cached && Date.now() < cached.expireAt) return cached.token;
  if (accessTokenRequest && accessTokenRequest.key === cacheKey) {
    return accessTokenRequest.promise;
  }

  const promise = (async () => {
    const url = replacePlaceholders(authUrl, {
      api_key: model.apiKey,
      api_secret: model.apiSecret
    });
    const bodyText = await withTimeout(requestText(url, { method: "GET" }), timeoutMs);
    const data = parseJson<any>(bodyText);
    const token = getByPath(data, model.request.authTokenPath || "access_token");
    if (typeof token !== "string" || !token) {
      const message =
        data?.error_description || data?.error || data?.err_msg || bodyText.slice(0, 200);
      throw new Error(`获取访问令牌失败：${message}`);
    }
    const expiresIn =
      Number(getByPath(data, model.request.authExpiresPath || "expires_in")) || 2592000;
    accessTokenCache[cacheKey] = {
      token,
      expireAt: Date.now() + Math.max(expiresIn - 60, 60) * 1000
    };
    return token;
  })();
  accessTokenRequest = { key: cacheKey, promise };

  try {
    return await promise;
  } finally {
    accessTokenRequest = null;
  }
}

function buildPlaceholders(
  model: ModelItem,
  text: string,
  accessToken: string
): Record<string, string> {
  return {
    text,
    input: text,
    model: model.name,
    voice_id: model.voiceId || "",
    api_key: model.apiKey,
    api_secret: model.apiSecret,
    access_token: accessToken
  };
}

function buildUrl(model: ModelItem, placeholders: Record<string, string>): string {
  const template = model.request.url || model.baseUrl;
  return replacePlaceholders(template, placeholders);
}

function buildHeaders(model: ModelItem, placeholders: Record<string, string>): Record<string, string> {
  const headers: Record<string, string> = {
    "Content-Type": model.request.contentType || "application/json"
  };
  if (model.apiKey && model.provider !== "baidu") {
    const headerName = model.request.authHeaderName || "Authorization";
    const headerValue = model.request.authHeaderName ? model.apiKey : `Bearer ${model.apiKey}`;
    headers[headerName] = headerValue;
  }
  for (const key of Object.keys(model.request.headers || {})) {
    headers[key] = replacePlaceholders(model.request.headers![key], placeholders);
  }
  return headers;
}

function buildBody(
  model: ModelItem,
  placeholders: Record<string, string>
): { body: string; contentType?: string } {
  const replaced = deepReplacePlaceholders(model.body, placeholders) as Record<string, unknown>;
  const contentType = model.request.contentType || "application/json";
  if (/multipart\/form-data/i.test(contentType)) {
    const boundary = `seal-${Date.now().toString(36)}`;
    return {
      body: encodeMultipart(replaced, boundary),
      contentType: `multipart/form-data; boundary=${boundary}`
    };
  }
  const isForm =
    model.request.form || /x-www-form-urlencoded/i.test(contentType);
  if (isForm) {
    const parts: string[] = [];
    for (const key of Object.keys(replaced)) {
      const value = replaced[key];
      if (Array.isArray(value) || (value && typeof value === "object")) {
        parts.push(`${key}=${encodeURIComponent(JSON.stringify(value))}`);
      } else {
        parts.push(`${key}=${encodeURIComponent(String(value ?? ""))}`);
      }
    }
    return { body: parts.join("&") };
  }
  return { body: JSON.stringify(replaced) };
}

function normalizeAudioValue(value: unknown, dataType: string): string | null {
  if (typeof value !== "string" || !value.trim()) return null;
  const text = value.trim();
  if (isHttpUrl(text)) return text;
  const lower = text.toLowerCase();
  if (lower.startsWith("data:audio") || lower.startsWith("data:")) {
    const comma = text.indexOf(",");
    return comma >= 0 ? text.slice(comma + 1) : text;
  }
  if (dataType === "hex" || (dataType === "auto" && isHexString(text))) {
    return hexToBase64(text);
  }
  return text;
}

function extractAudioData(data: any, model: ModelItem): string | null {
  const dataType = model.response.dataType || "auto";
  const explicit = normalizeAudioValue(
    getByPath(data, model.response.dataPath),
    dataType
  );
  if (explicit) return explicit;

  const candidates = [
    "data.audio",
    "data.url",
    "data.audio_url",
    "data.b64_json",
    "data.data",
    "output.audio",
    "output.url",
    "output.audio_url",
    "output.b64_json",
    "output.results.0.url",
    "output.results.0.audio",
    "audio",
    "url",
    "audio_url",
    "b64_json"
  ];
  for (const path of candidates) {
    const found = normalizeAudioValue(getByPath(data, path), dataType);
    if (found) return found;
  }

  if (Array.isArray(data.data)) {
    for (const item of data.data) {
      const found = normalizeAudioValue(
        pickString(item?.url, item?.audio, item?.audio_url, item?.b64_json, item?.data),
        dataType
      );
      if (found) return found;
    }
  }
  return null;
}

function checkJsonError(data: any, model: ModelItem): void {
  const baseResp = data?.base_resp;
  if (baseResp && Number(baseResp.status_code) !== 0) {
    throw new Error(`接口返回错误：${baseResp.status_msg || baseResp.status_code}`);
  }
  const code =
    getByPath(data, "error_code") ??
    getByPath(data, "err_no") ??
    getByPath(data, "status_code") ??
    getByPath(data, "code");
  const numericCode = Number(code);
  if (code !== undefined && code !== null && numericCode !== 0 && numericCode !== 200 && !isNaN(numericCode)) {
    const message = model.response.errorMessagePath
      ? getByPath(data, model.response.errorMessagePath)
      : undefined;
    const detail =
      message ??
      getByPath(data, "message") ??
      getByPath(data, "err_msg") ??
      getByPath(data, "error_description") ??
      JSON.stringify(data).slice(0, 200);
    throw new Error(`接口返回错误（${code}）：${detail}`);
  }
  if (typeof data?.error === "string") {
    throw new Error(`接口返回错误：${data.error}`);
  }
  if (data?.error && typeof data.error === "object") {
    throw new Error(`接口返回错误：${data.error.message || JSON.stringify(data.error)}`);
  }
}

function audioDataFromText(bodyText: string, model: ModelItem): string {
  // 按响应体判断：二进制音频不会以 { 或 [ 开头，JSON 错误/JSON 音频才会
  const isJson = /^\s*[\[{]/.test(bodyText);
  if (isJson) {
    const data = parseJson<any>(bodyText);
    checkJsonError(data, model);
    const audio = extractAudioData(data, model);
    if (audio) return audio;
    throw new Error("JSON 响应中未找到音频数据");
  }
  return btoa(bodyText);
}

export async function generateSpeech(text: string, modelName = ""): Promise<string> {
  if (!text.trim()) throw new Error("要合成的文本不能为空");

  const model = Config.getModel(modelName);
  const timeoutMs = (model.request.timeout || 60) * 1000;
  const accessToken = await getAccessToken(model, timeoutMs);
  const placeholders = buildPlaceholders(model, text, accessToken);
  const url = buildUrl(model, placeholders);
  const headers = buildHeaders(model, placeholders);
  const { body, contentType } = buildBody(model, placeholders);
  if (contentType) headers["Content-Type"] = contentType;
  const bodyText = await withTimeout(
    requestText(url, {
      method: model.request.method || "POST",
      headers,
      body
    }),
    timeoutMs
  );
  return audioDataFromText(bodyText, model);
}
