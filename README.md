# aiplugin4-dependencies

aiplugin4 的生成图片（tti）与生成音频（tts）依赖插件源码仓库。两个插件均为 TypeScript 工程，构建成单文件 JS 后供 SealDice 加载，架构与配置格式对齐 aiplugin4。

## 文档导航

- [生成图片插件（tti）](tti/README.md)
- [生成音频插件（tts）](tts/README.md)
- [生成图片模型示例](tti/MODELS.md)
- [生成音频模型示例](tts/MODELS.md)
- [生成图片插件更新日志](tti/CHANGELOG.md)
- [生成音频插件更新日志](tts/CHANGELOG.md)
- [生成图片插件开发约定](tti/AGENT.md)
- [生成音频插件开发约定](tts/AGENT.md)

## 目录结构

```text
tti/  生成图片依赖，扩展名 tti，产物 dist/tti.js
tts/  生成音频依赖，扩展名 tts，产物 dist/tts.js
```

## 构建

```bash
cd tti
npm install
npm run typecheck
npm run build

cd ../tts
npm install
npm run typecheck
npm run build
```

产物为 `tti/dist/tti.js` 和 `tts/dist/tts.js`，头部包含 `@name 生成图片` / `@name 生成音频`。

开发调试可用 `npm run build-dev`，产物输出到 `dev/`，保留 sourcemap 且不压缩。

## 安装与接入

1. 按上文构建，或在 [releases](https://github.com/error2913/aiplugin4-dependencies/releases) 获取 `tti.js` / `tts.js`。
2. 在 SealDice WebUI →「JS插件」中分别上传 `tti.js` 和 `tts.js`，点击重载。
3. aiplugin4 会调用 `globalThis.tti.generate(...)` / `globalThis.tts.generate(...)` 生成图片与音频；也可以在群里直接使用 `.tti 提示词` / `.tts 提示词`。

## 配置

两个插件都在「模型」分组下提供一个 TOML 模板配置：

- tti：`生成图片模型`
- tts：`生成语音模型`

每行是一段完整 TOML，代表一个模型；默认生成图片/音频模型取列表第一项。字段如下：

```toml
name = "gpt-image-1"          # 必填，模型名
provider = "openai"           # 可选，服务商标识
api_key = "sk-xxx"            # 可选，无鉴权接口可留空
api_secret = "your_secret"    # 可选，百度等需要换 token 的服务商
voice_id = "your-voice-id"    # 可选，音色/语音 ID，可用于 URL 与请求体
base_url = "https://api.openai.com/v1/images/generations"  # 必填，API 地址

[request]                     # 可选，请求配置
method = "POST"
content_type = "application/json"  # application/json / application/x-www-form-urlencoded / multipart/form-data
form = false
auth_header_name = "x-goog-api-key"  # 可选，自定义鉴权头；缺省为 Authorization: Bearer
poll_url = "https://example.com/tasks/{task_id}"
poll_method = "POST"          # 可选，轮询请求方法；配置 poll_body 时默认 POST
poll_interval = 10            # 秒
poll_max = 30                 # 次
timeout = 300                 # 秒
auth_url = "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id={api_key}&client_secret={api_secret}"

[request.headers]             # 可选，额外请求头
X-DashScope-Async = "enable"

[request.poll_body]           # 可选，轮询请求体，支持 {task_id} 占位符
task_id = "{task_id}"

[body]                        # 请求体；图片支持 {prompt}/{negative_prompt}，音频支持 {text}/{input}
model = "gpt-image-1"
prompt = "{prompt}"
n = 1
size = "1024x1024"

[body.input]                  # 嵌套请求体
prompt = "{prompt}"

[response]                    # 可选，响应解析
data_path = "data.0.url"
data_type = "auto"            # auto/url/base64/hex
task_id_path = "output.task_id"
task_status_path = "output.task_status"
success_values = ["SUCCEEDED", "SUCCESS"]
failure_values = ["FAILED"]
error_message_path = "message"
```

占位符：`{prompt}`、`{negative_prompt}`（图片）、`{text}`、`{input}`（音频）、`{model}`、`{voice_id}`、`{api_key}`、`{api_secret}`、`{access_token}`，可用于 URL、请求头和请求体。`multipart/form-data` 会按配置的 `content_type` 自动编码并带 boundary 提交。异步任务通过 `request.poll_url` + `[response]` 的任务字段轮询；需要 POST 轮询时配置 `poll_method` 与 `poll_body`。

### 预设模型

生成图片：

- OpenAI / OpenAI 兼容：`gpt-image-1`
- OpenAI / OpenAI 兼容：`gpt-image-1-mini`
- Google Gemini：`gemini-2.5-flash-image`（`x-goog-api-key` 鉴权，JSON 返回 base64）
- Stability：`stable-image-core`、`stable-image-ultra`（`multipart/form-data`）
- 火山方舟：`doubao-seedream-4-0-250828`、`doubao-seedream-4-5-251128`
- 腾讯混元 TokenHub：`hy-image-v3.0`（OpenAI 兼容端点；新版同步端点 `/v1/wand/hunyuan-image/v3-generation`）
- 智谱 CogView：`cogview-3-flash`、`cogview-4-250304`
- 阿里云百炼通义万相：`wanx2.1-t2i-turbo`（异步轮询）
- 硅基流动：`black-forest-labs/FLUX.1-schnell`
- 百度文心一格：`文心一格`（api_key + api_secret 换 token，异步提交 + POST 轮询）
- 本地 Stable Diffusion WebUI：`stable-diffusion-webui`

生成音频：

- OpenAI / OpenAI 兼容：`gpt-4o-mini-tts`（裸音频，需经代理转 base64）
- 硅基流动：`fnlp/MOSS-TTSD-v0.5`、`FunAudioLLM/CosyVoice2-0.5B`、`fishaudio/fish-speech-1.5`
- Fish Audio：`fishaudio-s21pro-flash`（v3 同步接口，`voice_id` 指定音色）
- ElevenLabs：`eleven-multilingual-v2`（`xi-api-key` 鉴权，`voice_id` 在 URL 路径）
- Google Cloud TTS：`google-cloud-tts`（`x-goog-api-key` 鉴权，JSON 返回 base64）
- 智谱 GLM-TTS：`glm-tts`
- 百度语音：`百度语音`（api_key + api_secret 换 token，表单提交）
- MiniMax：`speech-2.8-hd`（hex 音频转 base64）
- 阿里云百炼 CosyVoice：`cosyvoice-v3-flash`

完整预设清单与各模型请求差异见各插件 README。

默认配置只保留一个经典模型（tti：`gpt-image-1`，tts：`google-cloud-tts`），其余模型示例见 [tti/MODELS.md](tti/MODELS.md) 与 [tts/MODELS.md](tts/MODELS.md)。

## 暴露 API

两个插件暴露同名全局对象 `globalThis.tti` / `globalThis.tts`，接口格式一致：

```ts
interface GenerateRequest {
  text: string;
  negativeText?: string; // 仅 tti，全局 API 可选传入
  model?: string;        // 全局 API 可选，不传时用配置列表第一项
}

interface GenerateResult {
  success: boolean;
  type: "image" | "audio";
  data: string; // URL 或 base64
  error?: string;
}

const result = await globalThis.tti.generate({ text: "一只猫", negativeText: "模糊" });
const result = await globalThis.tts.generate({ text: "你好" });
```

## 指令

- `.tti 提示词`
- `.tts 提示词`

两个插件只保留上述指令，不再提供旧版 `.generateimage`、`.生成图片`、`.生成音频` 以及 `aiDrawing` / `ttsHandler` 旧接口。
