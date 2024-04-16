/**
 * @author Tahara Kazuki
 * @created 04/08/2024
 * @lastModified 04/16/2024
 * @description Types list in Config Store
 * @copyright SoTru
 */
import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import { trimTopic } from '../../utils/utils';
import type { ModelConfig } from '../../types/ConfigTypes';
import type { ModelType } from '../../types/modelTypes';
import ChatConstant from '../../constants/chatConstant';

export const ROLES = ['system', 'user', 'assistant'] as const;
export type MessageRole = (typeof ROLES)[number];

export interface RequestMessage {
  role: MessageRole;
  content: string;
}
  
export type ChatMessage = RequestMessage & {
  date: string;
  streaming?: boolean;
  isError?: boolean;
  id?: number;
  model?: ModelType;
};

export const createMessage = (override: Partial<ChatMessage>): ChatMessage => {
  return {
    id: Date.now(),
    date: new Date().toLocaleString(),
    role: 'user',
    content: '',
    ...override,
  };
};

export interface ChatStat {
  tokenCount: number;
  wordCount: number;
  charCount: number;
}

export interface ChatSession {
  id: number;
  topic: string;
  memoryPrompt: string;
  messages: ChatMessage[];
  stat: ChatStat;
  lastUpdate: number;
  lastSummarizeIndex: number;
  clearContextIndex?: number;
}

export const DEFAULT_TOPIC = ChatConstant.Store.DefaultTopic;
export const BOT_HELLO: ChatMessage = createMessage({ role: "assistant", content: ChatConstant.Store.BotHello });

const createEmptySession = (): ChatSession => {
  return {
    id: Date.now() + Math.random(),
    topic: DEFAULT_TOPIC,
    memoryPrompt: "",
    messages: [],
    stat: {
      tokenCount: 0,
      wordCount: 0,
      charCount: 0,
    },
    lastUpdate: Date.now(),
    lastSummarizeIndex: 0,
  }
}



