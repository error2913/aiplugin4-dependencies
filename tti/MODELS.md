# 生成图片模型示例

插件默认只内置经典模型 `gpt-image-1`。需要其他服务商时，从本文档复制完整 TOML，粘贴到 SealDice →「生成图片模型」配置中，替换 `api_key` 等示例值即可。

## cogview-3-flash（智谱）

```toml
name = "cogview-3-flash"
provider = "zhipu"
api_key = "sk-xxx"
base_url = "https://open.bigmodel.cn/api/paas/v4/images/generations"

[body]
model = "cogview-3-flash"
prompt = "{prompt}"
size = "1024x1024"

[response]
data_path = "data.0.url"
```

## wanx2.1-t2i-turbo（阿里云百炼，异步轮询）

```toml
name = "wanx2.1-t2i-turbo"
provider = "dashscope"
api_key = "sk-xxx"
base_url = "https://dashscope.aliyuncs.com/api/v1/services/aigc/text2image/image-synthesis"

[request]
poll_url = "https://dashscope.aliyuncs.com/api/v1/tasks/{task_id}"
poll_interval = 10
poll_max = 30

[request.headers]
X-DashScope-Async = "enable"

[body]
model = "wanx2.1-t2i-turbo"

[body.input]
prompt = "{prompt}"
negative_prompt = "{negative_prompt}"

[body.parameters]
size = "1024*1024"
n = 1

[response]
task_id_path = "output.task_id"
task_status_path = "output.task_status"
data_path = "output.results.0.url"
success_values = ["SUCCEEDED", "SUCCESS"]
failure_values = ["FAILED"]
```

## black-forest-labs/FLUX.1-schnell（硅基流动）

```toml
name = "black-forest-labs/FLUX.1-schnell"
provider = "siliconflow"
api_key = "sk-xxx"
base_url = "https://api.siliconflow.cn/v1/images/generations"

[body]
model = "black-forest-labs/FLUX.1-schnell"
prompt = "{prompt}"
image_size = "1024x1024"
batch_size = 1
negative_prompt = "{negative_prompt}"

[response]
data_path = "images.0.url"
```

## 文心一格（百度，异步提交 + POST 轮询）

```toml
name = "文心一格"
provider = "baidu"
api_key = "your_api_key"
api_secret = "your_secret_key"
base_url = "https://aip.baidubce.com/rpc/2.0/ernievilg/v1/txt2imgv2?access_token={access_token}"

[request]
auth_url = "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id={api_key}&client_secret={api_secret}"
poll_url = "https://aip.baidubce.com/rpc/2.0/ernievilg/v1/getImgv2?access_token={access_token}"
poll_method = "POST"
poll_interval = 10
poll_max = 30
timeout = 600

[request.poll_body]
task_id = "{task_id}"

[body]
prompt = "{prompt}"
width = 1024
height = 1024
image_num = 1

[response]
task_id_path = "data.task_id"
task_status_path = "data.task_status"
data_path = "data.sub_task_result_list.0.final_image_list.0.img_url"
success_values = ["SUCCESS"]
failure_values = ["FAILED"]
```

## stable-diffusion-webui（本地，无鉴权）

```toml
name = "stable-diffusion-webui"
provider = "custom"
api_key = ""
base_url = "http://127.0.0.1:7860/sdapi/v1/txt2img"

[body]
prompt = "{prompt}"
negative_prompt = "{negative_prompt}"
steps = 25
width = 768
height = 768
batch_size = 1

[response]
data_path = "images.0"
```

## gemini-2.5-flash-image（Google Gemini）

```toml
name = "gemini-2.5-flash-image"
provider = "gemini"
api_key = "sk-xxx"
base_url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-image:generateContent"

[request]
auth_header_name = "x-goog-api-key"
timeout = 120

[[body.contents]]
[[body.contents.parts]]
text = "{prompt}"

[body.generationConfig]
responseModalities = ["IMAGE"]

[body.generationConfig.imageConfig]
aspectRatio = "1:1"

[response]
data_path = "candidates.0.content.parts.0.inlineData.data"
data_type = "base64"
```

## stable-image-core（Stability，multipart/form-data）

```toml
name = "stable-image-core"
provider = "stability"
api_key = "sk-xxx"
base_url = "https://api.stability.ai/v2beta/stable-image/generate/core"

[request]
content_type = "multipart/form-data"
timeout = 120

[request.headers]
accept = "application/json"

[body]
prompt = "{prompt}"
aspect_ratio = "1:1"
negative_prompt = "{negative_prompt}"
output_format = "png"

[response]
data_path = "image"
data_type = "base64"
```

## stable-image-ultra（Stability，multipart/form-data）

```toml
name = "stable-image-ultra"
provider = "stability"
api_key = "sk-xxx"
base_url = "https://api.stability.ai/v2beta/stable-image/generate/ultra"

[request]
content_type = "multipart/form-data"
timeout = 180

[request.headers]
accept = "application/json"

[body]
prompt = "{prompt}"
aspect_ratio = "1:1"
negative_prompt = "{negative_prompt}"
output_format = "png"

[response]
data_path = "image"
data_type = "base64"
```

## doubao-seedream-4-0-250828（火山方舟）

```toml
name = "doubao-seedream-4-0-250828"
provider = "volcengine"
api_key = "sk-xxx"
base_url = "https://ark.cn-beijing.volces.com/api/v3/images/generations"

[body]
model = "doubao-seedream-4-0-250828"
prompt = "{prompt}"
size = "1024x1024"
response_format = "url"

[response]
data_path = "data.0.url"
```

## doubao-seedream-4-5-251128（火山方舟）

```toml
name = "doubao-seedream-4-5-251128"
provider = "volcengine"
api_key = "sk-xxx"
base_url = "https://ark.cn-beijing.volces.com/api/v3/images/generations"

[body]
model = "doubao-seedream-4-5-251128"
prompt = "{prompt}"
size = "1024x1024"
response_format = "url"

[response]
data_path = "data.0.url"
```

## hy-image-v3.0（腾讯混元 TokenHub）

```toml
name = "hy-image-v3.0"
provider = "tencent-tokenhub"
api_key = "sk-xxx"
base_url = "https://tokenhub.tencentmaas.com/v1/images/generations"

[body]
model = "hy-image-v3.0"
prompt = "{prompt}"
size = "1024:1024"

[response]
data_path = "data.0.url"
```

## cogview-4-250304（智谱）

```toml
name = "cogview-4-250304"
provider = "zhipu"
api_key = "sk-xxx"
base_url = "https://open.bigmodel.cn/api/paas/v4/images/generations"

[body]
model = "cogview-4-250304"
prompt = "{prompt}"
quality = "hd"

[response]
data_path = "data.0.url"
```

## gpt-image-1-mini（OpenAI）

```toml
name = "gpt-image-1-mini"
provider = "openai"
api_key = "sk-xxx"
base_url = "https://api.openai.com/v1/images/generations"

[body]
model = "gpt-image-1-mini"
prompt = "{prompt}"
n = 1
size = "1024x1024"
quality = "medium"
response_format = "b64_json"

[response]
data_path = "data.0.b64_json"
```
