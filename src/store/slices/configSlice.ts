import { DEFAULT_MODELS, DEFAULT_INPUT_TEMPLATE, StoreKey } from "../../constants/constant";
import { LLMModel } from "../../config/api";

export type ModelType = (typeof DEFAULT_MODELS)[number]["name"];

export enum SubmitKey {
    Enter = "Enter",
    CtrlEnter = "Ctrl + Enter",
    ShiftEnter = "Shift + Enter",
    AltEnter = "Alt + Enter",
    MetaEnter = "Meta + Enter",
}

export const DEFAULT_CONFIG = {
    submitKey: SubmitKey.CtrlEnter as SubmitKey,
    avatar: "1f603",
    fontSize: 14,
    sendPreviewBubble: true,
    sidebarWidth: 300,

    disablePromptHint: false,

    dontShowMaskSplashScreen: false, // dont show splash screen when create chat
    hideBuiltinMasks: false, // dont add builtin masks

    models: DEFAULT_MODELS as any as LLMModel[],

    modelConfig: {
        model: "gpt-3.5-turbo" as ModelType,
        temperature: 0.5,
        top_p: 1,
        max_tokens: 1444,
        presence_penalty: 0,
        frequency_penalty: 0,
        sendMemory: true,
        historyMessageCount: 4,
        compressMessageLengthThreshold: 1000,
        template: DEFAULT_INPUT_TEMPLATE,
    },
};
export type ChatConfig = typeof DEFAULT_CONFIG;
export type ModelConfig = ChatConfig["modelConfig"];