# 更新日志

本文件记录生成音频插件（tts）的重要变更。

## [2.0.0] - 2026-08-12

### 修复

- 修正二进制音频处理：海豹 gojax 的响应体会按 UTF-8 解码，原始二进制无法原样取回，接口只能返回 base64 或 URL；默认模型改为 JSON 返回 base64 的 `google-cloud-tts`。
- 主请求与鉴权请求一样纳入 `timeout` 控制，避免 `fetch` 一直不返回时指令挂起。
- 修正 `hexToBase64`：海豹 `btoa` 会把 JS 字符串按 UTF-8 编码，原实现对大于 127 的字节会编错，现改为逐字节自行编码 base64。

### 新增

- TypeScript 工程化重写，源码位于 `src/`，esbuild 构建为单文件 `dist/tts.js`。
- TOML 多模型配置，格式对齐 aiplugin4：`name`、`provider`、`api_key`、`api_secret`、`voice_id`、`base_url`、`[request]`、`[body]`、`[response]`。
- 暴露统一全局 API `globalThis.tts.generate({ text, model? })`，接口格式与 tti 保持一致。
- 支持 JSON 响应解析 URL / base64 / hex 音频数据；裸音频接口需经代理转 base64 后使用。
- 支持 `x-www-form-urlencoded` 表单提交（如百度语音）与 `auth_url` 换 token。
- 默认内置经典模型 `google-cloud-tts`，其余 10 个生成音频模型示例整理到 `MODELS.md`。

### 变更

- 插件名由 `AITTS` 统一为 `tts`，显示名由「语音」改为「生成音频」。
- 指令统一为 `.tts 提示词`。
- 配置由旧版固定字段改为 TOML 模板配置，默认生成音频模型取列表第一项。
- 默认配置精简为单一经典模型，其他服务商示例移到文档。

### 移除

- 删除旧版 `AITTS.js` 及 `.生成音频` 指令、`ttsHandler` 旧 API。
- 删除 `legacy/` 目录。

### 注意

- 2.0.0 配置与旧版不兼容，升级后需要重新填写模型配置。
