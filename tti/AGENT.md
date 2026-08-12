# AGENT.md

本文件供 AI 编码代理在修改生成图片插件（tti）时阅读。修改前先读本文件、`README.md` 和对应源码，保持与 tts 插件架构一致。

## 插件身份

| 项目 | 值 |
| --- | --- |
| 插件目录 / package name / 全局对象 | `tti` |
| 显示名 | `生成图片` |
| SealDice 扩展名 | `tti` |
| 配置键 | `生成图片模型` |
| 指令 | `.tti 提示词` |
| 构建产物 | `dist/tti.js` |
| 作者 | `白鱼、错误` |

版本信息集中在 `src/meta.ts` 与 `header.txt`，两处必须保持同步；`package.json` 的 `version` 也要一致。

## 目录结构

```text
tti/
  header.txt         构建产物头部，@name / @version / @author / @updateUrl
  MODELS.md          非默认模型的完整 TOML 示例
  package.json       工程信息与脚本
  tsconfig.json      TypeScript 配置
  tools/build.js     构建脚本，esbuild 打包后拼接 header.txt
  tools/build-config.js  构建输出配置（dist / dev）
  types/seal.d.ts    SealDice API 类型声明
  src/
    index.ts         入口，依次注册配置、全局 API、指令
    ext.ts           seal.ext 单例，负责扩展注册
    meta.ts          NAME / DISPLAY_NAME / AUTHOR / VERSION / UPDATE_URL
    config.ts        注册「生成图片模型」模板配置与模型读取
    models.ts        默认预设（仅一个经典模型）、parseModel、getModels
    request.ts       鉴权、请求体构造、发送、响应解析、异步轮询
    api.ts           注册 globalThis.tti
    cmd.ts           注册 .tti 指令
    types.ts         对外 API 与 ModelItem 类型
    utils.ts         通用工具函数
```

## 架构

```text
index.ts main()
  -> Config.register()   注册 TOML 模板配置（分组「模型」）
  -> registerApi()       注册 globalThis.tti.generate()
  -> registerCmd()       注册 .tti

generate(text, negativeText, modelName)
  -> request.ts sendImageRequest()
  -> Config.getModel()   读取配置，取指定模型或列表第一项
  -> getAccessToken()    可选 auth_url 换 token（带缓存）
  -> 构造 URL / headers / body（占位符替换）
  -> 发起请求并解析
  -> 同步返回图片，或提取 task_id 后按 poll_url 轮询
```

`models.ts` 的 `parseModel` 负责把 TOML 转成 `ModelItem`；解析失败会打印日志并跳过该行，不影响其他模型。

## 核心约定

### 命名

- 插件目录、package name、SealDice 扩展名、全局对象统一为 `tti`，不要使用 `drawing` / `AIDrawing`。
- 显示名统一为 `生成图片`，配置键统一为 `生成图片模型`。
- 两个插件的源文件名保持一致：`api.ts`、`cmd.ts`、`config.ts`、`ext.ts`、`index.ts`、`meta.ts`、`models.ts`、`request.ts`、`types.ts`、`utils.ts`。
- TypeScript 变量与函数用 camelCase，类型用 PascalCase，常量用 SCREAMING_SNAKE_CASE。
- TOML 配置键用 snake_case（`api_key`、`base_url`、`content_type`、`poll_url` 等），TS 字段用 camelCase（`apiKey`、`baseUrl`、`contentType`、`pollUrl` 等）。

### 默认配置

- `PRESET_MODELS` 只保留一个经典模型 `gpt-image-1`，避免插件设置页模板过长。
- 其他服务商示例统一放在 `MODELS.md`，用户按需复制到配置中。

### 对外 API

`globalThis.tti.generate()` 的入参与返回格式不得破坏：

```ts
interface GenerateRequest {
  text: string;
  negativeText?: string;
  model?: string;
}

interface GenerateResult {
  success: boolean;
  type: "image";
  data: string; // URL 或 base64
  error?: string;
}
```

`model` 为空时使用配置列表第一项。异常不抛出，统一转为 `success: false` 与 `error` 返回。

### 指令

只保留 `.tti 提示词`。负向约束不是指令参数，只通过 API 字段 `negativeText` 或模型请求体的 `{negative_prompt}` 传递。

### 配置格式

模型配置是完整 TOML，必填 `name` 与 `base_url`（或 `request.url`）。常用字段：

- `provider`：服务商标识，百度等 `auth_url` 换 token 的服务商依赖它区分鉴权方式。
- `api_key` / `api_secret`：普通 Bearer 鉴权或换取 `{access_token}`。
- `voice_id`：音色/语音 ID，可出现在 URL 与请求体。
- `[request]`：method、headers、content_type、form、auth_header_name、auth_url、auth_token_path、auth_expires_path、poll_url、poll_method、poll_body、poll_interval、poll_max、timeout。
- `[body]`：请求体，支持 `{prompt}` / `{negative_prompt}` / `{model}` / `{voice_id}` / `{api_key}` / `{api_secret}` / `{access_token}` 占位符。
- `[response]`：data_path、data_type（auto/url/base64/hex）、task_id_path、task_status_path、success_values、failure_values、error_message_path。

占位符替换是递归的，URL、请求头、请求体均可使用。

## 新增模型流程

1. 阅读官方 API 文档，确认端点、鉴权方式、请求字段、响应结构与同步/异步行为。
2. 将完整 TOML 追加到 `MODELS.md`，注释写明服务商与特点；只有明确要求修改默认配置时才改 `PRESET_MODELS`，且默认仍保持单一经典模型。
3. 尽量显式配置 `[response] data_path`；异步接口配置 `poll_url`、`task_id_path`、`task_status_path` 与状态值；POST 轮询加 `poll_method` / `poll_body`。
4. 自定义鉴权头用 `auth_header_name`；需要换 token 的服务商使用 `auth_url` + `api_key` / `api_secret`。
5. 同步更新 `README.md` 的预设清单，并在 `CHANGELOG.md` 记录面向用户的变更。
6. 运行 `npm run typecheck` 与 `npm run build` 验证。

## 构建与验证

```bash
npm run typecheck   # TypeScript 严格检查
npm run build       # 构建 dist/tti.js
npm run build-dev   # 构建 dev/tti.js，含 sourcemap
```

## 注意事项

- 保持 tti 与 tts 的架构、配置格式、对外 API 一致；一处修改请求/配置/API 逻辑时，评估另一侧是否需要同步。
- `legacy/` 已删除，不要重新引入旧版文件或旧命名。
- 不修改 `types/seal.d.ts`，除非 SealDice API 本身变化。
- 发布新版本时同步修改 `package.json`、`src/meta.ts`、`header.txt` 和 `CHANGELOG.md`。
