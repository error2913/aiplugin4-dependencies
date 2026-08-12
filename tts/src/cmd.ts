import { ext } from "./ext";
import { NAME } from "./meta";
import type { DependencyApi } from "./types";
import { isHttpUrl, toErrorMessage } from "./utils";

async function generateAndReply(
  ctx: seal.MsgContext,
  msg: seal.Message,
  text: string
): Promise<void> {
  const api = (globalThis as any)[NAME] as DependencyApi | undefined;
  if (!api) throw new Error("生成音频插件API未注册");

  const result = await api.generate({ text });
  if (!result.success) throw new Error(result.error || "生成音频失败");

  if (isHttpUrl(result.data)) {
    seal.replyToSender(ctx, msg, `[CQ:record,file=${result.data}]`);
    return;
  }

  let file = "";
  try {
    file = seal.base64ToImage(result.data);
  } catch (e) {
    throw new Error(`已获取音频数据，但保存为本地文件失败：${toErrorMessage(e)}`);
  }
  seal.replyToSender(ctx, msg, `[CQ:record,file=${file}]`);
}

function createCmd(name: string, help: string): seal.CmdItemInfo {
  const cmd = seal.ext.newCmdItemInfo();
  cmd.name = name;
  cmd.help = help;
  cmd.solve = async (ctx, msg, cmdArgs) => {
    const text = cmdArgs.rawArgs.trim();
    if (!text) {
      seal.replyToSender(ctx, msg, "请输入要合成的文本");
      return seal.ext.newCmdExecuteResult(true);
    }
    seal.replyToSender(ctx, msg, "正在生成音频，请稍候...");
    try {
      await generateAndReply(ctx, msg, text);
    } catch (e) {
      seal.replyToSender(ctx, msg, `生成音频失败：${toErrorMessage(e)}`);
    }
    return seal.ext.newCmdExecuteResult(true);
  };
  return cmd;
}

export function registerCmd(): void {
  const help =
    "通过文字合成音频\n" +
    "用法：.tts 提示词";
  const cmdTts = createCmd("tts", help);
  ext.cmdMap[cmdTts.name] = cmdTts;
}
