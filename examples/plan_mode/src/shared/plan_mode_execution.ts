import type { ComposeDslContext } from "../../../types/compose-dsl";
import { disablePlanMode } from "./plan_mode_mode.js";
import { resolvePlanModeI18n } from "./plan_mode_i18n.js";
import { writePlanFile } from "./plan_mode_plan_file.js";
import { readSingleActiveChatView } from "./plan_mode_state.js";
import { parsePlantodoXml } from "./plan_mode_xml.js";

export type StartPlanImplementationResult = {
  success: boolean;
  error?: string;
  path?: string;
};

function toErrorText(error: Error | string | null | undefined): string {
  if (error instanceof Error) {
    return error.message || "error";
  }
  return error || "error";
}

export async function startPlanImplementation(
  ctx: ComposeDslContext,
  rawXmlContent: string
): Promise<StartPlanImplementationResult> {
  const text = resolvePlanModeI18n();
  const parsed = parsePlantodoXml(rawXmlContent);
  const planContent = parsed.body.trim();
  if (!planContent) {
    const message = text.toastPlanEmpty;
    await ctx.showToast(message);
    return { success: false, error: message };
  }

  try {
    const activeView = readSingleActiveChatView();
    if (!activeView) {
      await ctx.showToast(text.toastChatViewMissing);
      return { success: false, error: text.toastChatViewMissing };
    }
    const written = await writePlanFile(activeView.chatId, planContent);
    await disablePlanMode(written.chatId);
    try {
      await Tools.Chat.sendMessage(
        text.implementationMessage,
        written.chatId,
        undefined,
        undefined,
        { runtime: activeView.runtime }
      );
    } catch (error) {
      const errorText =
        error instanceof Error || typeof error === "string" || error == null
          ? toErrorText(error)
          : "error";
      const sendMessage = `${text.toastPlanSendFailedPrefix}${errorText}`;
      await ctx.showToast(sendMessage);
      return {
        success: false,
        error: sendMessage,
        path: written.path,
      };
    }
    await ctx.showToast(text.toastPlanStarted);
    return {
      success: true,
      path: written.path,
    };
  } catch (error) {
    const errorText =
      error instanceof Error || typeof error === "string" || error == null
        ? toErrorText(error)
        : "error";
    const message = `${text.toastPlanWriteFailedPrefix}${errorText}`;
    await ctx.showToast(message);
    return { success: false, error: message };
  }
}
