"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startPlanImplementation = startPlanImplementation;
const plan_mode_mode_js_1 = require("./plan_mode_mode.js");
const plan_mode_i18n_js_1 = require("./plan_mode_i18n.js");
const plan_mode_plan_file_js_1 = require("./plan_mode_plan_file.js");
const plan_mode_state_js_1 = require("./plan_mode_state.js");
const plan_mode_xml_js_1 = require("./plan_mode_xml.js");
function toErrorText(error) {
    if (error instanceof Error) {
        return error.message || "error";
    }
    return error || "error";
}
async function startPlanImplementation(ctx, rawXmlContent) {
    const text = (0, plan_mode_i18n_js_1.resolvePlanModeI18n)();
    const parsed = (0, plan_mode_xml_js_1.parsePlantodoXml)(rawXmlContent);
    const planContent = parsed.body.trim();
    if (!planContent) {
        const message = text.toastPlanEmpty;
        await ctx.showToast(message);
        return { success: false, error: message };
    }
    try {
        const activeView = (0, plan_mode_state_js_1.readSingleActiveChatView)();
        if (!activeView) {
            await ctx.showToast(text.toastChatViewMissing);
            return { success: false, error: text.toastChatViewMissing };
        }
        const written = await (0, plan_mode_plan_file_js_1.writePlanFile)(activeView.chatId, planContent);
        await (0, plan_mode_mode_js_1.disablePlanMode)(written.chatId);
        try {
            await Tools.Chat.sendMessage(text.implementationMessage, written.chatId, undefined, undefined, { runtime: activeView.runtime });
        }
        catch (error) {
            const errorText = error instanceof Error || typeof error === "string" || error == null
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
    }
    catch (error) {
        const errorText = error instanceof Error || typeof error === "string" || error == null
            ? toErrorText(error)
            : "error";
        const message = `${text.toastPlanWriteFailedPrefix}${errorText}`;
        await ctx.showToast(message);
        return { success: false, error: message };
    }
}
