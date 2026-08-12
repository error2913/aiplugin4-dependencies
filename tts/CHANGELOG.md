# 更新日志

本文件记录生成音频插件（tts）的重要变更。

## [2.0.0] - 2026-08-12

### 新增

- TypeScript 工程化重写，源码位于 `src/`，esbuild 构建为单文件 `dist/tts.js`。
- TOML 多模型配置，格式对齐 aiplugin4：`name`、`provider`、`api_key`、`api_secret`、`voice_id`、`base_url`、`[request]`、`[body]`、`[response]`。
- 暴露统一全局 API `globalThis.tts.generate({ text, model? })`，接口格式与 tti 保持一致。
- 支持二进制音频直接转 base64，也支持 JSON 响应解析 URL / base64 / hex 音频数据。
- 支持 `x-www-form-urlencoded` 表单提交（如百度语音）与 `auth_url` 换 token。
- 默认内置经典模型 `gpt-4o-mini-tts`，其余 10 个生成音频模型示例整理到 `MODELS.md`。

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
