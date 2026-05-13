"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvePlanModeI18n = resolvePlanModeI18n;
const ZH_CN = {
    menuTitle: "计划模式",
    menuDescriptionEnabled: "已开启：禁止写入工具，确认后输出 <plantodo> 计划。",
    menuDescriptionDisabled: "已关闭：若工作区存在当前计划，会要求 AI 先读取并在完成后清理。",
    menuDescriptionWorkspaceMissing: "未绑定工作区，无法开启。",
    toastWorkspaceRequired: "当前聊天未绑定工作区，不能开启计划模式。",
    toastChatViewMissing: "当前没有可用的聊天视图，无法开始实施。",
    toastPlanEmpty: "计划内容为空，无法开始实施。",
    toastPlanStarted: "已写入内部计划文件，并发送“开始实施”。",
    toastPlanWriteFailedPrefix: "写入计划失败：",
    toastPlanSendFailedPrefix: "发送开始实施失败：",
    toastPlanAlreadyCompleted: "当前工作区没有计划文件。",
    implementationMessage: "开始实施",
    rendererTitle: "实施计划",
    rendererSubtitle: "计划闭合后会显示开始实施按钮，并自动写入内部计划文件。",
    rendererStreamingHint: "计划仍在生成中，等 <plantodo> 完整闭合后再开始实施。",
    rendererReadyHint: "计划已就绪。点击后会写入内部计划文件、关闭计划模式并发送“开始实施”。",
    rendererButtonIdle: "开始实施",
    rendererButtonBusy: "正在开始实施…",
    rendererStarted: "开始实施消息已发出。",
    rendererEmpty: "计划内容为空。",
    rendererExpand: "展开全部计划",
    rendererCollapse: "收起计划",
    promptPlanningMode: [
        "当前处于计划模式。",
        "- 你现在的任务是先产出一份待确认的实施计划，不要开始实施。",
        "- 不要调用 `plan_mode_tools:get_plan` 或 `plan_mode_tools:complete_plan`。",
        "- 不要自行创建、写入、修改、删除任何文件。",
        "- 你禁止调用任何写入、编辑、删除、移动、重命名、执行命令、发送消息、修改设置或其他具有副作用的工具。",
        "- 你只允许做分析、阅读、搜索、推理与确认，不允许实施。",
        "- 当你完全确定后，输出最终计划，并且必须用 <plantodo>...</plantodo> 完整包裹。",
        "- 不要在 <plantodo> 之外再输出另一份计划。",
    ].join("\n"),
    promptExistingPlanPrefix: "先读取并遵守当前计划：",
};
const EN_US = {
    menuTitle: "Plan Mode",
    menuDescriptionEnabled: "Enabled: writing tools are forbidden; output the final plan in <plantodo>.",
    menuDescriptionDisabled: "Disabled: if a current plan exists in the workspace, the AI must read it first and clear it when done.",
    menuDescriptionWorkspaceMissing: "No workspace is bound, so this mode cannot be enabled.",
    toastWorkspaceRequired: "This chat has no bound workspace, so plan mode cannot be enabled.",
    toastChatViewMissing: "No active chat view is available, so implementation cannot start.",
    toastPlanEmpty: "The plan is empty, so implementation cannot start.",
    toastPlanStarted: "The internal plan file has been written and \"Start implementation\" was sent.",
    toastPlanWriteFailedPrefix: "Failed to write the plan: ",
    toastPlanSendFailedPrefix: "Failed to send the implementation kickoff: ",
    toastPlanAlreadyCompleted: "The current workspace does not have a plan file.",
    implementationMessage: "Start implementation",
    rendererTitle: "Implementation Plan",
    rendererSubtitle: "The action button appears after the plan is fully closed and will write the internal plan file.",
    rendererStreamingHint: "The plan is still streaming. Wait until <plantodo> is fully closed before starting implementation.",
    rendererReadyHint: "The plan is ready. This will write the internal plan file, close plan mode, and send \"Start implementation\".",
    rendererButtonIdle: "Start Implementation",
    rendererButtonBusy: "Starting…",
    rendererStarted: "The implementation kickoff message has been sent.",
    rendererEmpty: "The plan is empty.",
    rendererExpand: "Expand Full Plan",
    rendererCollapse: "Collapse Plan",
    promptPlanningMode: [
        "The conversation is currently in plan mode.",
        "- Your job right now is to produce a plan for confirmation first. Do not start implementing.",
        "- Do not call `plan_mode_tools:get_plan` or `plan_mode_tools:complete_plan`.",
        "- Do not create, write, modify, or delete any file yourself.",
        "- You must not call any tool that writes, edits, deletes, moves, renames, executes commands, sends messages, changes settings, or causes side effects.",
        "- You may only analyze, read, search, reason, and confirm. Do not implement anything yet.",
        "- Once you are completely certain, output the final plan wrapped in a complete <plantodo>...</plantodo> block.",
        "- Do not output a second copy of the same plan outside the <plantodo> block.",
    ].join("\n"),
    promptExistingPlanPrefix: "Read and follow the current plan first:",
};
function shouldUseEnglish(useEnglish) {
    if (typeof useEnglish === "boolean") {
        return useEnglish;
    }
    const locale = typeof useEnglish === "string" ? useEnglish : getLang();
    return typeof locale === "string" && locale.toLowerCase().startsWith("en");
}
function resolvePlanModeI18n(useEnglish) {
    return shouldUseEnglish(useEnglish) ? EN_US : ZH_CN;
}
