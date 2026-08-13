# 更新日志

本文件记录生成图片插件（tti）的重要变更。

## [2.0.0] - 2026-08-12

### 修复

- 补齐 `x-www-form-urlencoded` 表单请求体编码，与 tts 保持一致；此前配置 `form = true` 时仍发送 JSON。
- 修正 `hexToBase64`：海豹 `btoa` 会把 JS 字符串按 UTF-8 编码，原实现对大于 127 的字节会编错，现改为逐字节自行编码 base64。

### 新增

- TypeScript 工程化重写，源码位于 `src/`，esbuild 构建为单文件 `dist/tti.js`。
- TOML 多模型配置，格式对齐 aiplugin4：`name`、`provider`、`api_key`、`api_secret`、`base_url`、`[request]`、`[body]`、`[response]`。
- 暴露统一全局 API `globalThis.tti.generate({ text, negativeText?, model? })`。
- 支持 JSON、`x-www-form-urlencoded`、`multipart/form-data` 请求体，以及 URL / base64 / hex 响应数据。
- 支持同步返回与异步任务轮询；轮询支持 GET / POST、`poll_body`、`{task_id}` 占位符。
- 支持 `auth_url` 换 token（如百度文心一格），token 带过期缓存。
- 默认内置经典模型 `gpt-image-1`，其余 13 个生成图片模型示例整理到 `MODELS.md`。

### 变更

- 插件名由 `AIDrawing` / `drawing` 统一为 `tti`，显示名由「绘图」改为「生成图片」。
- 指令统一为 `.tti 提示词`。
- 配置由旧版固定字段改为 TOML 模板配置，默认生成图片模型取列表第一项。
- 默认配置精简为单一经典模型，其他服务商示例移到文档。

### 移除

- 删除旧版 `AIDrawing.js` 及 `.generateimage` / `.生成图片` 指令、`aiDrawing` 旧 API。
- 删除 `legacy/` 目录。

### 注意

- 2.0.0 配置与旧版不兼容，升级后需要重新填写模型配置。
