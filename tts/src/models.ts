import { load } from "js-toml";

import { ext } from "./ext";
import type { ModelItem, RequestConfig, ResponseConfig } from "./types";
import { toErrorMessage } from "./utils";

export const CONFIG_KEY = "生成语音模型";

export const PRESET_MODELS: string[] = [
  `# 生成音频模型，使用 TOML 格式。默认只保留一个经典模型，其他示例见 MODELS.md。
name = "google-cloud-tts"
provider = "google-cloud"
api_key = "your-api-key"
base_url = "https://texttospeech.googleapis.com/v1beta1/text:synthesize"

[request]
auth_header_name = "x-goog-api-key"

[body]
input = { text = "{text}" }

[body.voice]
languageCode = "zh-CN"
name = "zh-CN-Chirp3-HD-Aoqi"

[body.audioConfig]
audioEncoding = "MP3"

[response]
data_path = "audioContent"
data_type = "base64"`
];

function asString(value: unknown): string {
  return typeof value === "string" ? value : "";
}

function asNumber(value: unknown, fallback: number): number {
  return typeof value === "number" && isFinite(value) ? value : fallback;
}

function asObject(value: unknown): Record<string, any> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? (value as Record<string, any>)
    : {};
}

function asHeaders(value: unknown): Record<string, string> {
  const result: Record<string, string> = {};
  for (const key of Object.keys(asObject(value))) {
    result[key] = String((value as Record<string, unknown>)[key] ?? "");
  }
  return result;
}

export function parseModel(tomlText: string): ModelItem {
  const raw = load(tomlText) as Record<string, any>;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new Error("TOML 内容为空或格式错误");
  }

  const name = asString(raw.name);
  if (!name) throw new Error("缺失模型名称 name");

  const requestRaw = asObject(raw.request);
  const baseUrl = asString(raw.base_url) || asString(requestRaw.url);
  if (!baseUrl) throw new Error("缺失 base_url 或 request.url");

  const request: RequestConfig = {
    url: asString(requestRaw.url) || undefined,
    method: asString(requestRaw.method) || "POST",
    headers: asHeaders(requestRaw.headers),
    contentType: asString(requestRaw.content_type) || (requestRaw.form ? "application/x-www-form-urlencoded" : "application/json"),
    authHeaderName: asString(requestRaw.auth_header_name) || undefined,
    form: requestRaw.form === true,
    authUrl: asString(requestRaw.auth_url) || undefined,
    authTokenPath: asString(requestRaw.auth_token_path) || "access_token",
    authExpiresPath: asString(requestRaw.auth_expires_path) || "expires_in",
    pollUrl: asString(requestRaw.poll_url) || undefined,
    pollInterval: asNumber(requestRaw.poll_interval, 15),
    pollMax: asNumber(requestRaw.poll_max, 20),
    pollMethod: asString(requestRaw.poll_method) || undefined,
    pollBody: asObject(requestRaw.poll_body),
    timeout: asNumber(requestRaw.timeout, 60)
  };

  const responseRaw = asObject(raw.response);
  const dataType = asString(responseRaw.data_type) as ResponseConfig["dataType"];
  const response: ResponseConfig = {
    dataPath: asString(responseRaw.data_path) || undefined,
    dataType:
      dataType === "url" || dataType === "base64" || dataType === "hex" ? dataType : "auto",
    taskIdPath: asString(responseRaw.task_id_path) || undefined,
    taskStatusPath: asString(responseRaw.task_status_path) || undefined,
    successValues: [],
    failureValues: [],
    errorMessagePath: asString(responseRaw.error_message_path) || undefined
  };

  return {
    name,
    provider: asString(raw.provider),
    apiKey: asString(raw.api_key),
    apiSecret: asString(raw.api_secret),
    voiceId: asString(raw.voice_id) || undefined,
    baseUrl,
    body: asObject(raw.body),
    request,
    response
  };
}

export function getModels(): ModelItem[] {
  return seal.ext
    .getTemplateConfig(ext, CONFIG_KEY)
    .map((tomlText) => {
      try {
        return parseModel(tomlText);
      } catch (e) {
        console.error(`[tts] ${CONFIG_KEY} 解析失败，已跳过：${toErrorMessage(e)}`);
        return null;
      }
    })
    .filter((model): model is ModelItem => model !== null);
}
