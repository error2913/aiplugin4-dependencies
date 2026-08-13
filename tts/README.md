# 生成音频依赖插件（tts）

SealDice 依赖插件，通过文字合成音频。扩展名为 `tts`，显示名为「生成音频」，构建产物为 `dist/tts.js`。aiplugin4 通过 `globalThis.tts.generate(...)` 调用，也可以单独加载后在群里使用 `.tts` 指令。

## 安装与构建

```bash
cd tts
npm install
npm run typecheck
npm run build
```

将 `dist/tts.js` 上传到 SealDice WebUI →「JS插件」并点击重载。开发调试可使用 `npm run build-dev`，产物输出到 `dev/tts.js`。

## 配置

在 SealDice →「JS插件」→ 插件设置 →「模型」分组 →「生成语音模型」中填写 TOML。每行是一段完整 TOML，代表一个模型；默认生成音频模型取列表第一项，修改后自动生效。

默认配置只内置经典模型 `google-cloud-tts`，其他模型的完整 TOML 示例见 [MODELS.md](MODELS.md)。

```toml
name = "google-cloud-tts"                # 必填，模型名
provider = "google-cloud"                # 可选，服务商标识
api_key = "your-api-key"                 # 可选，无鉴权接口可留空
base_url = "https://texttospeech.googleapis.com/v1beta1/text:synthesize"  # 必填，或写 request.url

[request]                                # 可选
method = "POST"
content_type = "application/json"        # json / x-www-form-urlencoded / multipart/form-data
form = false                             # true 时按表单编码
auth_header_name = "x-goog-api-key"      # 可选，自定义鉴权头；缺省为 Authorization: Bearer
timeout = 60                             # 秒
auth_url = "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id={api_key}&client_secret={api_secret}"

[request.headers]
X-Custom = "value"

[body]                                   # 请求体
input = { text = "{text}" }

[body.voice]
languageCode = "zh-CN"
name = "zh-CN-Chirp3-HD-Aoqi"

[body.audioConfig]
audioEncoding = "MP3"

[response]                               # 可选，JSON 响应的解析
data_path = "audioContent"
data_type = "base64"                     # auto / url / base64 / hex
error_message_path = "message"
```

可用占位符：`{text}`、`{input}`、`{model}`、`{voice_id}`、`{api_key}`、`{api_secret}`、`{access_token}`，可用于 URL、请求头和请求体。

接口必须返回 base64 或 URL（JSON 响应按 `[response]` 解析音频字段）。由于海豹 gojax 的响应体会按 UTF-8 解码，原始二进制音频无法原样取回，`gpt-4o-mini-tts`、ElevenLabs 等返回裸音频的接口需要在前端加一层转 base64 的代理，或改用 JSON 返回 base64 的接口。支持 URL、base64 与 hex 三种数据格式，`data_type = "auto"` 会自动识别 hex。

## 预设模型

插件默认只内置 `google-cloud-tts`，其余模型示例放在 [MODELS.md](MODELS.md)，按需复制到配置中即可。

| 模型名 | 服务商 | 说明 |
| --- | --- | --- |
| `google-cloud-tts` | Google Cloud | `x-goog-api-key` 鉴权，base64 返回 |
| `gpt-4o-mini-tts` | OpenAI | OpenAI 语音合成，裸音频需经代理转 base64 |
| `fnlp/MOSS-TTSD-v0.5` | 硅基流动 | 默认音色 `fnlp/MOSS-TTSD-v0.5:alex` |
| `glm-tts` | 智谱 | 默认音色 `tongtong` |
| `百度语音` | 百度 | api_key + api_secret 换 token，表单提交 |
| `speech-2.8-hd` | MiniMax | hex 音频自动转 base64 |
| `cosyvoice-v3-flash` | 阿里云百炼 | OpenAI 兼容模式 |
| `FunAudioLLM/CosyVoice2-0.5B` | 硅基流动 | 默认音色 `FunAudioLLM/CosyVoice2-0.5B:anna` |
| `fishaudio/fish-speech-1.5` | 硅基流动 | 默认音色 `fishaudio/fish-speech-1.5:anna` |
| `fishaudio-s21pro-flash` | Fish Audio | v3 同步接口，`voice_id` 指定音色 |
| `eleven-multilingual-v2` | ElevenLabs | `xi-api-key` 鉴权，`voice_id` 在 URL 路径 |

文档与默认配置中的 `api_key` 都是示例值，使用前需要替换为真实密钥。新增模型时参考 [AGENT.md](AGENT.md) 的接入流程。

## 指令

```text
.tts 提示词
```

## 暴露 API

```ts
interface GenerateRequest {
  text: string;
  model?: string; // 可选，不传时使用配置列表第一项
}

interface GenerateResult {
  success: boolean;
  type: "audio";
  data: string; // URL 或 base64
  error?: string;
}

const result = await globalThis.tts.generate({ text: "你好" });
```

对外接口格式与 tti 保持一致，`negativeText` 为兼容字段保留但不参与合成请求。

## 开发

开发约定见 [AGENT.md](AGENT.md)，变更记录见 [CHANGELOG.md](CHANGELOG.md)。
