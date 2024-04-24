/**
 * @author Tahara Kazuki
 * @created 04/08/2024
 * @lastModified 04/16/2024
 * @description Types list in Config Store
 * @copyright SoTru
 */
import { createSlice, createAction, PrepareAction } from '@reduxjs/toolkit';
import type { ModelType } from '../../types/modelTypes';
import ChatConstant from '../../constants/chatConstant';

export const ROLES = ['system', 'user', 'assistant'] as const;
export type MessageRole = (typeof ROLES)[number];

export interface RequestMessage {
  role: MessageRole;
  content: string;
}

export type ChatMessage = RequestMessage & {
  id?: number;
  model?: ModelType;
  streaming?: boolean;
  isError?: boolean;
  date: string;
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
export const BOT_HELLO: ChatMessage = createMessage({ role: 'assistant', content: ChatConstant.Store.BotHello });

const createEmptySession = (): ChatSession => {
  return {
    id: Date.now() + Math.random(),
    topic: DEFAULT_TOPIC,
    memoryPrompt: '',
    messages: [],
    stat: {
      tokenCount: 0,
      wordCount: 0,
      charCount: 0,
    },
    lastUpdate: Date.now(),
    lastSummarizeIndex: 0,
  };
};

export type ChatStore = {
  sessions: ChatSession[];
  currentSessionIndex: number;
  globalId: number;
};

const initialState: ChatStore = {
  sessions: [createEmptySession()],
  currentSessionIndex: 0,
  globalId: 0,
};



export const newSession = createAction<PrepareAction<number>>('chat/newSession', (index) => {
  return {
    payload: index,
  }
})

export const nextSession = createAction<PrepareAction<number>>('chat/nextSession', (delta) => {
  return {
    payload: delta,
  };
});

export const selectSession = createAction<PrepareAction<number>>('chat/selectSession', (index) => {
  return {
    payload: index,
  };
});

export const moveSession = createAction<PrepareAction<{ from: number; to: number }>>('chat/moveSession', (movePayload) => {
  return {
    payload: movePayload,
  };
});

export const deleteSession = createAction<PrepareAction<number>>('chat/deleteSession', (index) => {
  return {
    payload: index,
  };
});

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(newSession, (state, action) => {
      const session  = createEmptySession();
    });
    builder.addCase(nextSession, (state, action) => {
      const n = state.sessions.length;
      const limit = (x: number) => (x + n) % n;
      state.currentSessionIndex = limit(state.currentSessionIndex + action.payload);
    });
    builder.addCase(selectSession, (state, action) => {
      state.currentSessionIndex = action.payload;
    });
    builder.addCase(moveSession, (state, action) => {
      const { from, to } = action.payload;
      const newSessions = [...state.sessions];
      const session = newSessions.splice(from, 1)[0];
      newSessions.splice(to, 0, session);

      // Modify current session index
      let newIndex = state.currentSessionIndex;
      if (newIndex === from) {
        newIndex = to;
      } else if (newIndex > from && newIndex <= to) {
        newIndex -= 1;
      } else if (newIndex < from && newIndex >= to) {
        newIndex += 1;
      }

      state.sessions = newSessions;
      state.currentSessionIndex = newIndex;
    });
    builder.addCase(deleteSession, (state, action) => {
      const index = action.payload;
      const deletingLastSession = state.sessions.length === 1;
      const sessions = [...state.sessions];
      const deletedSession = sessions.at(index);
      if (!deletedSession) {
        return;
      }
      sessions.slice(index, 1);
      let nextIndex = Math.min(state.currentSessionIndex - Number(index < state.currentSessionIndex), sessions.length - 1);
      if (deletingLastSession) {
        nextIndex = 0;
        sessions.push(createEmptySession());
      }
      state.currentSessionIndex = nextIndex;
      state.sessions = sessions;
    });
  },
});

export default chatSlice.reducer;
