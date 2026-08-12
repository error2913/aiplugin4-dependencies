# 生成音频模型示例

插件默认只内置经典模型 `gpt-4o-mini-tts`。需要其他服务商时，从本文档复制完整 TOML，粘贴到 SealDice →「生成语音模型」配置中，替换 `api_key` 等示例值即可。

## fnlp/MOSS-TTSD-v0.5（硅基流动）

```toml
name = "fnlp/MOSS-TTSD-v0.5"
provider = "siliconflow"
api_key = "sk-xxx"
base_url = "https://api.siliconflow.cn/v1/audio/speech"

[body]
model = "fnlp/MOSS-TTSD-v0.5"
input = "{text}"
voice = "fnlp/MOSS-TTSD-v0.5:alex"
response_format = "mp3"
speed = 1.0
```

## glm-tts（智谱）

```toml
name = "glm-tts"
provider = "zhipu"
api_key = "sk-xxx"
base_url = "https://open.bigmodel.cn/api/paas/v4/audio/speech"

[body]
model = "glm-tts"
input = "{text}"
voice = "tongtong"
response_format = "wav"
```

## 百度语音（百度，表单提交）

```toml
name = "百度语音"
provider = "baidu"
api_key = "your_api_key"
api_secret = "your_secret_key"
base_url = "https://tsn.baidu.com/text2audio"

[request]
auth_url = "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id={api_key}&client_secret={api_secret}"
content_type = "application/x-www-form-urlencoded"
form = true

[body]
tex = "{text}"
tok = "{access_token}"
cuid = "seal-aiplugin4"
ctp = 1
lan = "zh"
spd = 5
pit = 5
vol = 5
per = 5003
aue = 3
```

## speech-2.8-hd（MiniMax，hex 自动转 base64）

```toml
name = "speech-2.8-hd"
provider = "minimax"
api_key = "your_api_key"
base_url = "https://api.minimax.io/v1/t2a_v2"

[body]
model = "speech-2.8-hd"
text = "{text}"
stream = false
output_format = "hex"

[body.voice_setting]
voice_id = "female-cq"
speed = 1.0
vol = 1.0
pitch = 1.0

[body.audio_setting]
sample_rate = 32000
bitrate = 128000
format = "mp3"
channel = 1

[response]
data_path = "data.audio"
data_type = "hex"
```

## cosyvoice-v3-flash（阿里云百炼）

```toml
name = "cosyvoice-v3-flash"
provider = "dashscope"
api_key = "sk-xxx"
base_url = "https://dashscope.aliyuncs.com/compatible-mode/v1/audio/speech"

[body]
model = "cosyvoice-v3-flash"
input = "{text}"
voice = "longxiaochun"
response_format = "mp3"
```

## FunAudioLLM/CosyVoice2-0.5B（硅基流动）

```toml
name = "FunAudioLLM/CosyVoice2-0.5B"
provider = "siliconflow"
api_key = "sk-xxx"
base_url = "https://api.siliconflow.cn/v1/audio/speech"

[body]
model = "FunAudioLLM/CosyVoice2-0.5B"
input = "{text}"
voice = "FunAudioLLM/CosyVoice2-0.5B:anna"
response_format = "mp3"
```

## fishaudio/fish-speech-1.5（硅基流动）

```toml
name = "fishaudio/fish-speech-1.5"
provider = "siliconflow"
api_key = "sk-xxx"
base_url = "https://api.siliconflow.cn/v1/audio/speech"

[body]
model = "fishaudio/fish-speech-1.5"
input = "{text}"
voice = "fishaudio/fish-speech-1.5:anna"
response_format = "mp3"
```

## fishaudio-s21pro-flash（Fish Audio v3）

```toml
name = "fishaudio-s21pro-flash"
provider = "fishaudio"
api_key = "sk-xxx"
voice_id = "53a27b24-38c9-47fd-9dc6-dd8fcd55f0a9"
base_url = "https://fishaudio.org/api/open/v3/speech/tts"

[body]
text = "{text}"
voiceId = "{voice_id}"
modelId = "fishaudio-s21pro-flash"
format = "mp3"
```

## eleven-multilingual-v2（ElevenLabs）

```toml
name = "eleven-multilingual-v2"
provider = "elevenlabs"
api_key = "sk-xxx"
voice_id = "your-voice-id"
base_url = "https://api.elevenlabs.io/v1/text-to-speech/{voice_id}"

[request]
auth_header_name = "xi-api-key"

[body]
text = "{text}"
model_id = "eleven_multilingual_v2"

[body.voice_settings]
stability = 0.5
similarity_boost = 0.75
```

## google-cloud-tts（Google Cloud）

```toml
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
data_type = "base64"
```
