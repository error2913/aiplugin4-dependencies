# 生成图片依赖插件（tti）

SealDice 依赖插件，通过文字描述生成图片。扩展名为 `tti`，显示名为「生成图片」，构建产物为 `dist/tti.js`。aiplugin4 通过 `globalThis.tti.generate(...)` 调用，也可以单独加载后在群里使用 `.tti` 指令。

## 安装与构建

```bash
cd tti
npm install
npm run typecheck
npm run build
```

将 `dist/tti.js` 上传到 SealDice WebUI →「JS插件」并点击重载。开发调试可使用 `npm run build-dev`，产物输出到 `dev/tti.js`。

## 配置

在 SealDice →「JS插件」→ 插件设置 →「模型」分组 →「生成图片模型」中填写 TOML。每行是一段完整 TOML，代表一个模型；默认生成图片模型取列表第一项，修改后自动生效。

默认配置只内置经典模型 `gpt-image-1`，其他模型的完整 TOML 示例见 [MODELS.md](MODELS.md)。

```toml
name = "gpt-image-1"                     # 必填，模型名
provider = "openai"                      # 可选，服务商标识
api_key = "sk-xxx"                       # 可选，无鉴权接口可留空
api_secret = "your_secret"               # 可选，百度等需要换 token 的服务商
voice_id = "your-voice-id"               # 可选，支持 {voice_id} 占位符
base_url = "https://api.openai.com/v1/images/generations"  # 必填，或写 request.url

[request]                                # 可选
method = "POST"
content_type = "application/json"        # json / x-www-form-urlencoded / multipart/form-data
auth_header_name = "x-goog-api-key"      # 可选，自定义鉴权头；缺省为 Authorization: Bearer
poll_url = "https://example.com/tasks/{task_id}"
poll_method = "POST"                     # 可选，轮询方法；配置 poll_body 时默认 POST
poll_interval = 10                       # 秒
poll_max = 30                            # 次
timeout = 300                            # 秒
auth_url = "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id={api_key}&client_secret={api_secret}"

[request.headers]
X-DashScope-Async = "enable"

[request.poll_body]                      # 可选，轮询请求体，支持 {task_id}
task_id = "{task_id}"

[body]                                   # 请求体
model = "gpt-image-1"
prompt = "{prompt}"
negative_prompt = "{negative_prompt}"    # 可选，负向约束
n = 1
size = "1024x1024"
response_format = "b64_json"

[response]                               # 可选，响应解析
data_path = "data.0.b64_json"
data_type = "auto"                       # auto / url / base64 / hex
task_id_path = "output.task_id"
task_status_path = "output.task_status"
success_values = ["SUCCEEDED", "SUCCESS"]
failure_values = ["FAILED"]
error_message_path = "message"
```

可用占位符：`{prompt}`、`{negative_prompt}`、`{model}`、`{voice_id}`、`{api_key}`、`{api_secret}`、`{access_token}`，可用于 URL、请求头和请求体。`multipart/form-data` 自动带 boundary 提交。

接口同步返回图片时直接使用响应中的 URL / base64；配置 `request.poll_url` 且响应包含任务 ID 时，自动按 `task_status_path` 轮询任务状态，支持 GET 与 POST 轮询。`{task_id}` 会替换到轮询 URL 与 `poll_body` 中。

## 预设模型

插件默认只内置 `gpt-image-1`，其余模型示例放在 [MODELS.md](MODELS.md)，按需复制到配置中即可。

| 模型名 | 服务商 | 说明 |
| --- | --- | --- |
| `gpt-image-1` | OpenAI | OpenAI 图片生成，base64 返回 |
| `gpt-image-1-mini` | OpenAI | OpenAI 轻量图片生成，base64 返回 |
| `cogview-3-flash` | 智谱 | 图片 URL 返回 |
| `cogview-4-250304` | 智谱 | 图片 URL 返回 |
| `wanx2.1-t2i-turbo` | 阿里云百炼 | 异步任务 + GET 轮询 |
| `black-forest-labs/FLUX.1-schnell` | 硅基流动 | 图片 URL 返回 |
| `文心一格` | 百度 | api_key + api_secret 换 token，异步提交 + POST 轮询 |
| `stable-diffusion-webui` | 本地 | 无鉴权，base64 返回 |
| `gemini-2.5-flash-image` | Google Gemini | `x-goog-api-key` 鉴权，base64 返回 |
| `stable-image-core` | Stability | multipart/form-data，base64 返回 |
| `stable-image-ultra` | Stability | multipart/form-data，base64 返回 |
| `doubao-seedream-4-0-250828` | 火山方舟 | OpenAI 兼容格式，URL 返回 |
| `doubao-seedream-4-5-251128` | 火山方舟 | OpenAI 兼容格式，URL 返回 |
| `hy-image-v3.0` | 腾讯混元 TokenHub | OpenAI 兼容格式，URL 返回 |

文档与默认配置中的 `api_key` 都是示例值，使用前需要替换为真实密钥。新增模型时参考 [AGENT.md](AGENT.md) 的接入流程。

## 指令

```text
.tti 提示词
```

负向约束不作为指令参数，只通过 API 的 `negativeText` 字段或模型请求体的 `{negative_prompt}` 传入。

## 暴露 API

```ts
interface GenerateRequest {
  text: string;
  negativeText?: string; // 负向提示词，可选
  model?: string;        // 可选，不传时使用配置列表第一项
}

interface GenerateResult {
  success: boolean;
  type: "image";
  data: string; // URL 或 base64
  error?: string;
}

const result = await globalThis.tti.generate({
  text: "一只猫",
  negativeText: "模糊, 低质量"
});
```

## 开发

开发约定见 [AGENT.md](AGENT.md)，变更记录见 [CHANGELOG.md](CHANGELOG.md)。
