/**
 * @author Tahara Kazuki
 * @created 04/11/2024
 * @lastModified 04/11/2024
 * @description Types list in Config Store
 * @copyright SoTru
 */

import { DEFAULT_CONFIG } from "../constants/configConstant";

export enum SubmitKey {
    Enter = "Enter",
    CtrlEnter = "Ctrl + Enter",
    ShiftEnter = "Shift + Enter",
    AltEnter = "Alt + Enter",
    MetaEnter = "Meta + Enter",
}

export enum StorageKey {
    Chat = "chat-next-web-store",
    Access = "access-control",
    Config = "app-config",
    Mask = "mask-store",
    Prompt = "prompt-store",
    Update = "chat-update",
    Sync = "sync",
}

export type ChatConfig = typeof DEFAULT_CONFIG;
export type ModelConfig = ChatConfig['modelConfig'];
