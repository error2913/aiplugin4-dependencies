// 模拟海豹 SealDice 1.6.0 运行时调用 tti / tts 插件完整链路：
// - 用 goja 的 UTF-8 解码规则模拟 Go -> JS 的字符串转换
// - 用 gojax 的 Response（body/text/json）模拟 fetch 返回
// - 用 goja 的 atob/btoa 语义模拟 base64
// 验证 dist 产物：全局 API、TOML 配置解析、请求体编码、响应解析、轮询、指令回调。

const assert = require("assert");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");

function bytesToGojaString(bytes) {
  // goja 将 Go string 转 JS string 时按 UTF-8 解码，非法字节替换为 U+FFFD
  return new TextDecoder("utf-8", { fatal: false }).decode(bytes);
}

function gojaBtoa(input) {
  // 海豹 btoa 是 Go: base64.EncodeToString([]byte(s))，JS 字符串按 UTF-8 编码
  return Buffer.from(input, "utf8").toString("base64");
}

function gojaAtob(input) {
  const clean = String(input)
    .replace(/^data:text\/plain;base64,/, "")
    .replace(/\s+/g, "");
  return Buffer.from(clean, "base64").toString("binary");
}

function makeSeal(harness) {
  const extRegistry = {};
  const templateConfigs = {};
  const extensions = {};
  let cmdId = 0;

  const makeExt = () => ({
    name: "",
    aliases: [],
    version: "",
    autoActive: true,
    cmdMap: {},
    author: "",
    isLoaded: true,
    getDescText: () => "",
    onLoad: () => {},
    onNotCommandReceived: () => {},
    onCommandReceived: () => {},
    onMessageReceived: () => {},
    onMessageSend: () => {},
    onMessageDeleted: () => {},
    onMessageEdit: () => {},
    onGroupJoined: () => {},
    onGroupMemberJoined: () => {},
    onGuildJoined: () => {},
    onBecomeFriend: () => {},
    onPoke: () => {},
    onGroupLeave: () => {},
    storageInit: () => {},
    storageClose: () => {},
    storageSet: () => {},
    storageGet: () => ""
  });

  return {
    ext: {
      new(name, author, version) {
        const info = makeExt();
        info.name = name;
        info.author = author;
        info.version = version;
        return info;
      },
      register(info) {
        extensions[info.name] = info;
      },
      find(name) {
        return extensions[name] || null;
      },
      newCmdExecuteResult(solved) {
        return { solved, showHelp: false };
      },
      newCmdItemInfo() {
        const cmd = {
          name: "",
          help: "",
          solve: () => ({ solved: true, showHelp: false }),
          allowDelegate: false,
          disabledInPrivate: false,
          enableExecuteTimesParse: false,
          raw: false,
          checkCurrentBotOn: false,
          checkMentionOthers: false
        };
        cmd.id = ++cmdId;
        return cmd;
      },
      registerTemplateConfig(extInfo, key, defaultValue, desc, group) {
        templateConfigs[key] = { extInfo, defaultValue, desc, group };
        extRegistry[key] = defaultValue;
      },
      getTemplateConfig(extInfo, key) {
        if (harness.configOverride) return harness.configOverride;
        return extRegistry[key] || [];
      },
      getConfig() {
        return null;
      },
      getStringConfig() {
        return "";
      },
      getIntConfig() {
        return 0;
      },
      getBoolConfig() {
        return false;
      },
      getFloatConfig() {
        return 0;
      },
      getOptionConfig() {
        return "";
      },
      registerStringConfig() {},
      registerIntConfig() {},
      registerBoolConfig() {},
      registerFloatConfig() {},
      registerOptionConfig() {},
      newConfigItem() {
        return { key: "", type: "string", defaultValue: "", value: "", option: [], deprecated: false, description: "" };
      },
      registerConfig() {},
      unregisterConfig() {},
      registerTask() {
        return { on: () => true, off: () => true };
      }
    },
    replyToSender(ctx, msg, text) {
      harness.replies.push(text);
    },
    base64ToImage(base64) {
      harness.savedBase64.push(base64);
      return `local-${harness.savedBase64.length}.bin`;
    },
    newMessage() {
      return {
        platform: "QQ",
        message: "",
        time: Date.now(),
        messageType: "group",
        groupId: "g1",
        sender: { nickname: "tester", userId: "u1" },
        rawId: "1"
      };
    },
    createTempCtx() {
      return { endPoint: {}, isPrivate: false };
    },
    getEndPoints() {
      return [];
    },
    getVersion() {
      return {
        version: "1.6.0",
        versionCode: 1006000,
        versionSimple: "1.6.0",
        versionDetail: { major: 1, minor: 6, patch: 0, prerelease: "", buildMetaData: "20260726" }
      };
    }
  };
}

function makeGojaxResponse(bodyString, status, headers) {
  const body = bodyString;
  const response = {
    body,
    headers,
    status,
    ok: status >= 200 && status < 300,
    url: "",
    method: "",
    text() {
      return Promise.resolve(body);
    },
    json() {
      return Promise.resolve(JSON.parse(body));
    }
  };
  return response;
}

function makeFetch(harness) {
  return async function fetch(url, init) {
    const opts = init || {};
    const record = {
      url,
      method: opts.method || "GET",
      headers: opts.headers || {},
      body: opts.body
    };
    harness.requests.push(record);

    const handlers = harness.routeStack;
    const handler = handlers.length ? handlers[handlers.length - 1](record) : null;
    if (!handler) throw new Error(`模拟路由未覆盖：${record.method} ${record.url}`);
    const { status = 200, body = "", contentType = "application/json", asBinary = false } =
      handler.body instanceof Function ? await handler.body(record) : handler;

    let bodyString;
    if (asBinary) {
      const bytes = typeof body === "string" ? Buffer.from(body, "binary") : body;
      bodyString = bytesToGojaString(bytes);
    } else {
      bodyString = typeof body === "string" ? body : JSON.stringify(body);
    }
    const response = makeGojaxResponse(bodyString, status, {
      "content-type": contentType
    });
    response.url = url;
    response.method = record.method;
    return response;
  };
}

function createHarness() {
  const harness = {
    requests: [],
    replies: [],
    savedBase64: [],
    errors: [],
    configOverride: null,
    routeStack: []
  };
  return harness;
}

function loadPlugin(name, harness) {
  const code = fs.readFileSync(path.join(root, name, "dist", `${name}.js`), "utf8");
  const sandbox = {
    console,
    setTimeout,
    clearTimeout,
    setInterval,
    clearInterval,
    seal: makeSeal(harness),
    fetch: makeFetch(harness),
    atob: gojaAtob,
    btoa: gojaBtoa,
    Promise,
    Date,
    Math,
    JSON,
    Array,
    Object,
    String,
    Number,
    parseInt,
    parseFloat,
    isNaN,
    isFinite,
    RegExp,
    Error,
    Map,
    Set,
    WeakMap,
    WeakSet,
    Symbol,
    BigInt,
    ArrayBuffer,
    DataView,
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    BigInt64Array,
    BigUint64Array,
    Proxy,
    Reflect
  };
  sandbox.globalThis = sandbox;
  // 用主 realm 执行，避免 vm 跨 realm 导致 instanceof RegExp 等判断失真；
  // with 沙箱模拟 goja 插件包装函数里的宿主全局注入。
  const wrapped = new Function(
    "sandbox",
    `return function (exports, require, module, __filename, __dirname) { with (sandbox) { ${code} } }`
  )(sandbox);
  wrapped({}, () => ({}), { exports: {} }, `${name}.js`, root);
  return sandbox;
}

function withRoute(harness, fn) {
  const wrapper = (record) => fn(record);
  harness.routeStack.push(wrapper);
  return () => {
    const index = harness.routeStack.lastIndexOf(wrapper);
    if (index >= 0) harness.routeStack.splice(index, 1);
  };
}

async function invokeCmd(context, name, text) {
  const ext = context.seal.ext.find(name);
  assert(ext, `扩展 ${name} 未注册`);
  const cmd = ext.cmdMap[name];
  assert(cmd, `指令 ${name} 未注册`);
  const ctx = context.seal.createTempCtx({}, context.seal.newMessage());
  const msg = context.seal.newMessage();
  const cmdArgs = {
    command: name,
    args: [text],
    kwargs: [],
    at: [],
    rawArgs: text,
    amIBeMentioned: false,
    amIBeMentionedFirst: false,
    cleanArgs: text,
    specialExecuteTimes: 1,
    rawText: `.${name} ${text}`,
    getKwarg: () => null,
    getArgN: (n) => (n === 1 ? text : ""),
    chopPrefixToArgsWith: () => false,
    eatPrefixWith: () => ["", false],
    getRestArgsFrom: () => text,
    isArgEqual: () => false
  };
  await cmd.solve(ctx, msg, cmdArgs);
}

async function main() {
  let passed = 0;
  const results = [];
  let activeHarness = null;

  async function case_(title, fn) {
    try {
      await fn();
      results.push({ title, ok: true });
      passed++;
    } catch (e) {
      results.push({ title, ok: false, error: e.message });
      console.error(`FAIL ${title}\n  ${e.stack}`);
    } finally {
      activeHarness.routeStack.length = 0;
      activeHarness.configOverride = null;
    }
  }

  // ---------------- tti ----------------
  {
    const harness = createHarness();
    const context = loadPlugin("tti", harness);
    activeHarness = harness;

    await case_("tti 全局 API 注册", async () => {
      assert(context.globalThis.tti && typeof context.globalThis.tti.generate === "function");
      assert.strictEqual(context.globalThis.tti.name, "tti");
      assert.strictEqual(context.globalThis.tti.version, "2.0.0");
    });

    await case_("tti OpenAI JSON 返回 base64", async () => {
      harness.requests = [];
      withRoute(harness, (record) => ({
        body: { data: [{ b64_json: "c2VhbC1pbWFnZQ==" }] }
      }));
      const result = await context.globalThis.tti.generate({ text: "一只猫" });
      assert.strictEqual(result.success, true);
      assert.strictEqual(result.type, "image");
      assert.strictEqual(result.data, "c2VhbC1pbWFnZQ==");
      assert.strictEqual(harness.requests[0].url, "https://api.openai.com/v1/images/generations");
      const sent = JSON.parse(harness.requests[0].body);
      assert.strictEqual(sent.prompt, "一只猫");
      assert.strictEqual(harness.requests[0].headers["Authorization"], "Bearer sk-xxx");
    });

    await case_("tti hex 转 base64（非 ASCII 字节）", async () => {
      harness.requests = [];
      harness.configOverride = [
        `
name = "hex-model"
provider = "example"
api_key = "k"
base_url = "https://example.com/hex"

[body]
prompt = "{prompt}"

[response]
data_path = "data"
data_type = "hex"`
      ];
      withRoute(harness, () => ({
        body: { data: "fffb9044" }
      }));
      const result = await context.globalThis.tti.generate({ text: "x" });
      assert.strictEqual(result.success, true, result.error || "");
      assert.strictEqual(result.data, "//uQRA==");
      harness.configOverride = null;
    });

    await case_("tti 异步 GET 轮询 RUNNING -> SUCCEEDED", async () => {
      harness.requests = [];
      let pollCount = 0;
      harness.configOverride = [
        `
name = "async-get"
provider = "example"
api_key = "k"
base_url = "https://example.com/create"

[request]
poll_url = "https://example.com/tasks/{task_id}"
poll_interval = 0.01
poll_max = 5

[body]
prompt = "{prompt}"

[response]
task_id_path = "output.task_id"
task_status_path = "output.task_status"
data_path = "result.0.url"
success_values = ["SUCCEEDED"]`
      ];
      withRoute(harness, (record) => {
        if (record.url.includes("/tasks/")) {
          pollCount++;
          if (pollCount === 1) {
            return { body: { output: { task_status: "RUNNING" } } };
          }
          return { body: { output: { task_status: "SUCCEEDED" }, result: [{ url: "https://cdn.example.com/a.png" }] } };
        }
        return { body: { output: { task_id: "task-123" } } };
      });
      const result = await context.globalThis.tti.generate({ text: "赛博朋克城市" });
      assert.strictEqual(result.success, true, result.error || "");
      assert.strictEqual(result.data, "https://cdn.example.com/a.png");
      assert(pollCount >= 2);
      assert(harness.requests[1].url.includes("task-123"));
    });

    await case_("tti 异步 POST 轮询 + poll_body {task_id}", async () => {
      harness.requests = [];
      withRoute(harness, (record) => {
        if (record.url === "https://example.com/poll") {
          assert.strictEqual(record.method, "POST");
          const pollSent = JSON.parse(record.body);
          assert.strictEqual(pollSent.task_id, "tid-9");
          return { body: { status: "COMPLETED", data: { url: "https://cdn.example.com/p.png" } } };
        }
        return { body: { task_id: "tid-9" } };
      });
      harness.configOverride = [
        `
name = "poll-model"
provider = "example"
api_key = "k"
base_url = "https://example.com/create"

[request]
poll_url = "https://example.com/poll"
poll_method = "POST"

[request.poll_body]
task_id = "{task_id}"

[body]
prompt = "{prompt}"

[response]
task_id_path = "task_id"
task_status_path = "status"
success_values = ["COMPLETED"]`
      ];
      const result = await context.globalThis.tti.generate({ text: "测试" });
      assert.strictEqual(result.success, true);
      assert.strictEqual(result.data, "https://cdn.example.com/p.png");
      harness.configOverride = null;
    });

    await case_("tti form=true 表单编码", async () => {
      harness.requests = [];
      harness.configOverride = [
        `
name = "form-model"
provider = "example"
api_key = "k"
base_url = "https://example.com/form"

[request]
form = true

[body]
prompt = "{prompt}"
negative_prompt = "{negative_prompt}"
steps = 4`
      ];
      withRoute(harness, () => ({
        body: { url: "https://cdn.example.com/form.png" }
      }));
      const result = await context.globalThis.tti.generate({ text: "cat", negativeText: "blur" });
      assert.strictEqual(result.success, true, result.error || "");
      const record = harness.requests[0];
      assert.strictEqual(record.headers["Content-Type"], "application/x-www-form-urlencoded");
      assert.strictEqual(record.body, "prompt=cat&negative_prompt=blur&steps=4");
      harness.configOverride = null;
    });

    await case_("tti HTTP 500 被 API 捕获", async () => {
      harness.requests = [];
      withRoute(harness, () => ({ status: 500, body: { error: { message: "server exploded" } } }));
      const result = await context.globalThis.tti.generate({ text: "x" });
      assert.strictEqual(result.success, false);
      assert(result.error.includes("500"));
      assert(result.error.includes("server exploded"));
    });

    await case_("tti 指令端到端", async () => {
      harness.replies = [];
      withRoute(harness, () => ({
        body: { data: [{ b64_json: "aW1nLWRhdGE=" }] }
      }));
      await invokeCmd(context, "tti", "一只橘猫");
      assert(harness.replies.some((r) => r.includes("[CQ:image,file=local-")));
      assert.strictEqual(context.seal.ext.find("tti").name, "tti");
    });
  }

  // ---------------- tts ----------------
  {
    const harness = createHarness();
    const context = loadPlugin("tts", harness);
    activeHarness = harness;

    await case_("tts 全局 API 注册", async () => {
      assert(context.globalThis.tts && typeof context.globalThis.tts.generate === "function");
      assert.strictEqual(context.globalThis.tts.name, "tts");
      assert.strictEqual(context.globalThis.tts.version, "2.0.0");
    });

    await case_("tts 默认 google-cloud-tts JSON base64", async () => {
      harness.requests = [];
      withRoute(harness, (record) => {
        assert.strictEqual(record.headers["x-goog-api-key"], "your-api-key");
        const sent = JSON.parse(record.body);
        assert.strictEqual(sent.input.text, "你好");
        return { body: { audioContent: "YXVkaW8tZGF0YQ==" } };
      });
      const result = await context.globalThis.tts.generate({ text: "你好" });
      assert.strictEqual(result.success, true);
      assert.strictEqual(result.data, "YXVkaW8tZGF0YQ==");
      assert(harness.requests[0].url.startsWith("https://texttospeech.googleapis.com/"));
    });

    await case_("tts hex 转 base64（非 ASCII 字节）", async () => {
      harness.requests = [];
      harness.configOverride = [
        `
name = "hex-audio"
provider = "example"
api_key = "k"
base_url = "https://example.com/audio"

[body]
input = "{text}"

[response]
data_path = "audio"
data_type = "hex"`
      ];
      withRoute(harness, () => ({
        body: { audio: "fffb9044" }
      }));
      const result = await context.globalThis.tts.generate({ text: "你好" });
      assert.strictEqual(result.success, true, result.error || "");
      assert.strictEqual(result.data, "//uQRA==");
      harness.configOverride = null;
    });

    await case_("tts 表单编码（百度语音）", async () => {
      harness.requests = [];
      harness.configOverride = [
        `
name = "baidu-form"
provider = "baidu"
api_key = "ak"
api_secret = "sk"
base_url = "https://tsn.baidu.com/text2audio"

[request]
auth_url = "https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id={api_key}&client_secret={api_secret}"
content_type = "application/x-www-form-urlencoded"
form = true

[body]
tex = "{text}"
tok = "{access_token}"
cuid = "test"
ctp = 1
lan = "zh"

[response]
data_path = "audioContent"`
      ];
      withRoute(harness, (record) => {
        if (record.url.includes("aip.baidubce.com/oauth")) {
          return { body: { access_token: "token-abc", expires_in: 3600 } };
        }
        assert.strictEqual(record.headers["Content-Type"], "application/x-www-form-urlencoded");
        assert.strictEqual(record.body, "tex=%E4%BD%A0%E5%A5%BD&tok=token-abc&cuid=test&ctp=1&lan=zh");
        return { body: { audioContent: "YXVkaW8=" } };
      });
      const result = await context.globalThis.tts.generate({ text: "你好" });
      assert.strictEqual(result.success, true, result.error || "");
      assert.strictEqual(result.data, "YXVkaW8=");
      harness.configOverride = null;
    });

    await case_("tts 裸二进制响应被明确拒绝", async () => {
      harness.requests = [];
      withRoute(harness, () => ({
        asBinary: true,
        body: Buffer.from([0xff, 0xfb, 0x90, 0x44, 0x00, 0x00, 0x00, 0x19]),
        contentType: "audio/mpeg"
      }));
      const result = await context.globalThis.tts.generate({ text: "你好" });
      assert.strictEqual(result.success, false);
      assert(result.error.includes("base64"), result.error);
    });

    await case_("tts HTTP 503 被 API 捕获", async () => {
      harness.requests = [];
      withRoute(harness, () => ({ status: 503, body: { message: "busy" } }));
      const result = await context.globalThis.tts.generate({ text: "x" });
      assert.strictEqual(result.success, false);
      assert(result.error.includes("503"));
      assert(result.error.includes("busy"));
    });

    await case_("tts 指令端到端", async () => {
      harness.replies = [];
      withRoute(harness, () => ({
        body: { audioContent: "YXVkaW8tZGF0YQ==" }
      }));
      await invokeCmd(context, "tts", "你好世界");
      assert(harness.replies.some((r) => r.includes("[CQ:record,file=local-")));
    });
  }

  console.log(`\n${passed}/${results.length} 通过`);
  for (const r of results) {
    console.log(`${r.ok ? "PASS" : "FAIL"} ${r.title}`);
  }
  if (passed !== results.length) {
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
