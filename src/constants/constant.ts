export enum Path {
    Home = "/",
    Chat = "/chat",
    Settings = "/settings",
    NewChat = "/new-chat",
    Masks = "/masks",
    Auth = "/auth",
}

export enum SlotID {
    AppBody = "app-body",
}

export enum FileName {
    Masks = "masks.json",
    Prompts = "prompts.json",
}

export enum StoreKey {
    Chat = "chat-next-web-store",
    Access = "access-control",
    Config = "app-config",
    Mask = "mask-store",
    Prompt = "prompt-store",
    Update = "chat-update",
    Sync = "sync",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`
export const DEFAULT_MODELS = [
    {
        name: "gpt-4-0125-preview",
        available: true,
    },
    {
        name: "gpt-4-turbo-preview",
        available: true,
    },
    {
        name: "gpt-4-1106-preview",
        available: true,
    },
    {
        name: "gpt-4-vision-preview",
        available: true,
    },
    {
        name: "gpt-4-1106-vision-preview",
        available: true,
    },
    {
        name: "gpt-4",
        available: true,
    },
    {
        name: "gpt-4-0613",
        available: true,
    },
    {
        name: "gpt-4-32k",
        available: true,
    },
    {
        name: "gpt-4-32k-0613",
        available: true,
    },
    {
        name: "qwen-v1", // 通义千问
        available: false,
    },
    {
        name: "ernie", // 文心一言
        available: false,
    },
    {
        name: "spark", // 讯飞星火
        available: false,
    },
    {
        name: "llama", // llama
        available: false,
    },
    {
        name: "chatglm", // chatglm-6b
        available: false,
    },
    {
        name: "text-bison-001", // text-bison-001
        available: true,
    },
] as const;
