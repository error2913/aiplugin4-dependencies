export function toErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function encodeMultipart(values: Record<string, unknown>, boundary: string): string {
  const parts: string[] = [];
  for (const key of Object.keys(values)) {
    const value = values[key];
    const text = typeof value === "string" ? value : JSON.stringify(value ?? "");
    parts.push(
      `--${boundary}\r\nContent-Disposition: form-data; name="${key}"\r\n\r\n${text}\r\n`
    );
  }
  parts.push(`--${boundary}--\r\n`);
  return parts.join("");
}

export function withTimeout<T>(task: Promise<T>, timeoutMs: number): Promise<T> {
  if (!(timeoutMs > 0)) return task;
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`请求超时（${timeoutMs}ms）`)), timeoutMs);
    task.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });
}

export function replacePlaceholders(text: string, placeholders: Record<string, string>): string {
  let result = text;
  for (const key of Object.keys(placeholders)) {
    result = result.split(`{${key}}`).join(placeholders[key]);
  }
  return result;
}

export function deepReplacePlaceholders(value: unknown, placeholders: Record<string, string>): unknown {
  if (typeof value === "string") return replacePlaceholders(value, placeholders);
  if (Array.isArray(value)) return value.map((item) => deepReplacePlaceholders(item, placeholders));
  if (value && typeof value === "object") {
    const result: Record<string, unknown> = {};
    for (const key of Object.keys(value)) {
      result[key] = deepReplacePlaceholders((value as Record<string, unknown>)[key], placeholders);
    }
    return result;
  }
  return value;
}

export function getByPath(data: unknown, path?: string): unknown {
  if (!path) return undefined;
  let value: any = data;
  const segments = path.split(".").filter(Boolean);
  for (const segment of segments) {
    if (value === null || value === undefined) return undefined;
    const bracket = /^(.+?)\[(\d+)\]$/.exec(segment);
    if (bracket) {
      value = value?.[bracket[1]]?.[Number(bracket[2])];
      continue;
    }
    if (Array.isArray(value) && /^\d+$/.test(segment)) {
      value = value[Number(segment)];
      continue;
    }
    value = value?.[segment];
  }
  return value;
}

export function pickString(...values: unknown[]): string | null {
  for (const value of values) {
    if (typeof value === "string" && value.trim()) return value.trim();
  }
  return null;
}

export function parseJson<T = unknown>(text: string): T {
  try {
    return JSON.parse(text.replace(/^\uFEFF/, "")) as T;
  } catch (e) {
    throw new Error(`服务器返回了无效的 JSON：${toErrorMessage(e)}\n内容预览：${text.slice(0, 200)}`);
  }
}

function tryParseJson(text: string): unknown {
  try {
    return JSON.parse(text);
  } catch (e) {
    return null;
  }
}

export function formatHttpError(response: Response, bodyText: string): string {
  let message = `HTTP ${response.status}${response.statusText ? ` ${response.statusText}` : ""}`;
  const data = tryParseJson(bodyText) as any;
  if (data) {
    const error = data.error;
    if (typeof error === "string") message += `\n错误：${error}`;
    else if (error?.message) message += `\n错误：${error.message}`;
    else if (error) message += `\n错误：${JSON.stringify(error)}`;
    if (data.message) message += `\n消息：${data.message}`;
    if (data.msg) message += `\n消息：${data.msg}`;
  } else if (bodyText) {
    message += `\n响应：${bodyText.slice(0, 200)}`;
  }
  return message;
}

export function isHttpUrl(value: string): boolean {
  return /^https?:\/\//i.test(value.trim());
}

export function isHexString(value: string): boolean {
  return /^[0-9a-f]+$/i.test(value) && value.length % 2 === 0 && value.length >= 16;
}

export function hexToBase64(hex: string): string {
  const clean = hex.replace(/\s+/g, "");
  if (clean.length % 2 !== 0) throw new Error("十六进制数据长度不合法");
  let binary = "";
  for (let i = 0; i < clean.length; i += 2) {
    binary += String.fromCharCode(parseInt(clean.slice(i, i + 2), 16));
  }
  return btoa(binary);
}
