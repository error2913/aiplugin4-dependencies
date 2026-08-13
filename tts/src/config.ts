import { ext } from "./ext";
import { CONFIG_KEY, getModels, PRESET_MODELS } from "./models";
import type { ModelItem } from "./types";

export default class Config {
  static register(): void {
    seal.ext.registerTemplateConfig(
      ext,
      CONFIG_KEY,
      PRESET_MODELS,
      `每行一个模型（TOML），每行是一段完整 TOML，可直接修改或新增。
必填：name（模型名）、base_url（API 地址，或用 request.url 代替）。
可选：provider（服务商标识）、api_key（无鉴权接口可留空）、api_secret（百度等需要换 token 的服务商）、voice_id（音色/语音 ID，支持 URL 与请求体占位符 {voice_id}）、body（请求体，支持 {text}/{input}/{model}/{voice_id}/{api_key}/{api_secret}/{access_token} 占位符）。
[request]：method、headers、content_type（支持 application/json、application/x-www-form-urlencoded、multipart/form-data）、form、auth_header_name（自定义鉴权头，如 xi-api-key、x-goog-api-key，默认 Authorization: Bearer）、auth_url、auth_token_path、auth_expires_path、poll_url、poll_method（轮询请求方法，默认 GET；配置 poll_body 时默认 POST）、poll_body（轮询请求体，支持 {task_id} 占位符）、poll_interval（秒）、poll_max（次）、timeout（秒）。
[response]：data_path（如 data.audio / output.results.0.url）、data_type（auto/url/base64/hex）、error_message_path。
默认生成音频模型取列表第一项。
格式指导与完整示例见 https://github.com/error2913/aiplugin4-dependencies/blob/main/tts/MODELS.md`,
      "模型"
    );
  }

  static getModels(): ModelItem[] {
    return getModels();
  }

  static getModel(name = ""): ModelItem {
    const models = getModels();
    if (models.length === 0) {
      throw new Error("请先配置生成语音模型");
    }
    if (name) {
      const model = models.find((item) => item.name === name);
      if (!model) throw new Error(`未找到生成语音模型：${name}`);
      return model;
    }
    return models[0];
  }
}
