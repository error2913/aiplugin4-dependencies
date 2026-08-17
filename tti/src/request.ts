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
  sleep,
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
  prompt: string,
  negativeText: string,
  accessToken: string,
  image: string
): Record<string, string> {
  const rawImage = image.trim();
  const isDataUrl = /^data:/i.test(rawImage);
  const isUrl = isHttpUrl(rawImage);
  const imageBase64 =
    isDataUrl && rawImage.includes(",")
      ? rawImage.slice(rawImage.indexOf(",") + 1)
      : isUrl
        ? ""
        : rawImage;
  const imageUrl =
    isUrl || isDataUrl
      ? rawImage
      : imageBase64
        ? `data:image/png;base64,${imageBase64}`
        : "";

  return {
    prompt,
    negative_prompt: negativeText,
    text: prompt,
    input: prompt,
    image: rawImage,
    image_url: imageUrl,
    image_base64: imageBase64,
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

function normalizeImageData(value: unknown, dataType: string): string | null {
  if (typeof value !== "string" || !value.trim()) return null;
  const text = value.trim();
  if (dataType === "hex" || (dataType === "auto" && isHexString(text))) {
    return hexToBase64(text);
  }
  return text;
}

function extractImageData(data: any, model: ModelItem): string | null {
  const dataType = model.response.dataType || "auto";
  const explicit = normalizeImageData(getByPath(data, model.response.dataPath), dataType);
  if (explicit) return explicit;

  const candidates = [
    "data.0.url",
    "data.0.b64_json",
    "data.0.image_url.url",
    "data.url",
    "data.b64_json",
    "images.0.url",
    "images.0.b64_json",
    "images.0",
    "artifacts.0.base64",
    "image",
    "output.results.0.url",
    "output.results.0.b64_json",
    "img_urls.0",
    "url",
    "b64_json"
  ];
  for (const path of candidates) {
    const found = normalizeImageData(getByPath(data, path), dataType);
    if (found) return found;
  }

  const content = getByPath(data, "output.choices.0.message.content");
  if (Array.isArray(content)) {
    const image = pickString(
      ...content.map((item) =>
        typeof item === "string" ? item : item?.image || item?.image_url?.url
      )
    );
    if (image) return image;
  }

  const parts = getByPath(data, "candidates.0.content.parts");
  if (Array.isArray(parts)) {
    const inline = pickString(
      ...parts.map((part) =>
        typeof part === "string"
          ? part
          : part?.inlineData?.data || part?.inline_data?.data || part?.image?.data
      )
    );
    if (inline) return inline;
  }
  return null;
}

function extractTaskId(data: any, model: ModelItem): string {
  const explicit = getByPath(data, model.response.taskIdPath);
  if (typeof explicit === "string" && explicit.trim()) return explicit.trim();
  return (
    pickString(
      getByPath(data, "output.task_id"),
      getByPath(data, "output.taskId"),
      getByPath(data, "task_id"),
      getByPath(data, "taskId"),
      getByPath(data, "data.task_id")
    ) || ""
  );
}

function extractTaskStatus(data: any, model: ModelItem): string {
  const explicit = getByPath(data, model.response.taskStatusPath);
  if (explicit !== undefined && explicit !== null) return String(explicit);
  const fallback =
    getByPath(data, "output.task_status") ??
    getByPath(data, "output.status") ??
    getByPath(data, "task_status") ??
    getByPath(data, "status");
  return fallback === undefined || fallback === null ? "" : String(fallback);
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

async function pollTask(
  taskId: string,
  model: ModelItem,
  headers: Record<string, string>,
  placeholders: Record<string, string>,
  timeoutMs: number
): Promise<string> {
  const pollUrlTemplate = model.request.pollUrl;
  if (!pollUrlTemplate) {
    throw new Error("响应中未找到图片URL或任务ID，且未配置轮询地址 request.poll_url");
  }
  const pollMax = model.request.pollMax || 20;
  const pollIntervalMs = (model.request.pollInterval || 15) * 1000;

  for (let i = 0; i < pollMax; i++) {
    const url = replacePlaceholders(pollUrlTemplate, { ...placeholders, task_id: taskId });
    let method = "GET";
    let body: string | undefined;
    const pollBody = model.request.pollBody;
    if (pollBody && Object.keys(pollBody).length > 0) {
      method = model.request.pollMethod || "POST";
      body = JSON.stringify(
        deepReplacePlaceholders(pollBody, { ...placeholders, task_id: taskId })
      );
    } else if (model.request.pollMethod) {
      method = model.request.pollMethod;
    }
    const bodyText = await withTimeout(
      requestText(url, { method, headers, body }),
      timeoutMs
    );
    const data = parseJson<any>(bodyText);
    checkJsonError(data, model);
    const status = extractTaskStatus(data, model).toUpperCase();

    if ((model.response.successValues || []).some((value) => status === value.toUpperCase())) {
      const result = extractImageData(data, model);
      if (result) return result;
      throw new Error("任务已完成，但响应中未找到图片URL");
    }
    if ((model.response.failureValues || []).some((value) => status === value.toUpperCase())) {
      throw new Error(`任务失败，状态：${status}`);
    }
    if (i < pollMax - 1) await sleep(pollIntervalMs);
  }
  throw new Error(`轮询超时：${pollMax} 次仍未完成`);
}

export async function sendImageRequest(
  prompt: string,
  negativeText = "",
  modelName = "",
  image = ""
): Promise<string> {
  if (!prompt.trim()) throw new Error("图片描述不能为空");

  const model = Config.getModel(modelName);
  const timeoutMs = (model.request.timeout || 300) * 1000;
  const accessToken = await getAccessToken(model, timeoutMs);
  const placeholders = buildPlaceholders(model, prompt, negativeText, accessToken, image);
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
  const data = parseJson<any>(bodyText);
  checkJsonError(data, model);

  const immediate = extractImageData(data, model);
  if (immediate) return immediate;

  const taskId = extractTaskId(data, model);
  if (!taskId) throw new Error("无法从响应中提取图片URL或任务ID");
  return pollTask(taskId, model, headers, placeholders, timeoutMs);
}
