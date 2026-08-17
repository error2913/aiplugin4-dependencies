export interface GenerateRequest {
  text: string;
  negativeText?: string;
  model?: string;
  image?: string;
}

export interface GenerateResult {
  success: boolean;
  type: "image" | "audio";
  data: string;
  error?: string;
}

export interface DependencyApi {
  readonly name: string;
  readonly version: string;
  generate(request: GenerateRequest): Promise<GenerateResult>;
}

export interface ModelItem {
  name: string;
  provider: string;
  apiKey: string;
  apiSecret: string;
  voiceId?: string;
  baseUrl: string;
  body: Record<string, any>;
  request: RequestConfig;
  response: ResponseConfig;
}

export interface RequestConfig {
  url?: string;
  method?: string;
  headers?: Record<string, string>;
  contentType?: string;
  authHeaderName?: string;
  form?: boolean;
  authUrl?: string;
  authTokenPath?: string;
  authExpiresPath?: string;
  pollUrl?: string;
  pollInterval?: number;
  pollMax?: number;
  pollMethod?: string;
  pollBody?: Record<string, any>;
  timeout?: number;
}

export interface ResponseConfig {
  dataPath?: string;
  dataType?: "auto" | "url" | "base64" | "hex";
  taskIdPath?: string;
  taskStatusPath?: string;
  successValues?: string[];
  failureValues?: string[];
  errorMessagePath?: string;
}
