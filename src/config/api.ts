export const ROLES = ["system", "user", "assistant"] as const;
export type MessageRole = (typeof ROLES)[number];

export interface RequestMessage {
    role: MessageRole;
    content: string;
}

export interface LLMModel {
    name: string;
    available: boolean;
}