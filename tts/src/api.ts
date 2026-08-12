import { NAME, VERSION } from "./meta";
import { generateSpeech } from "./request";
import type { DependencyApi, GenerateRequest, GenerateResult } from "./types";
import { toErrorMessage } from "./utils";

export function registerApi(): void {
  if ((globalThis as any)[NAME]) return;

  const api: DependencyApi = {
    name: NAME,
    version: VERSION,
    generate: async (request: GenerateRequest): Promise<GenerateResult> => {
      try {
        const data = await generateSpeech(request.text, request.model || "");
        return { success: true, type: "audio", data };
      } catch (e) {
        return { success: false, type: "audio", data: "", error: toErrorMessage(e) };
      }
    }
  };

  (globalThis as any)[NAME] = api;
}
