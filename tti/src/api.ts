import { NAME, VERSION } from "./meta";
import { sendImageRequest } from "./request";
import type { DependencyApi, GenerateRequest, GenerateResult } from "./types";
import { toErrorMessage } from "./utils";

export function registerApi(): void {
  if ((globalThis as any)[NAME]) return;

  const api: DependencyApi = {
    name: NAME,
    version: VERSION,
    generate: async (request: GenerateRequest): Promise<GenerateResult> => {
      try {
        const data = await sendImageRequest(
          request.text,
          request.negativeText || "",
          request.model || ""
        );
        return { success: true, type: "image", data };
      } catch (e) {
        return { success: false, type: "image", data: "", error: toErrorMessage(e) };
      }
    }
  };

  (globalThis as any)[NAME] = api;
}
