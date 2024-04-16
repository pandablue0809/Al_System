/**
 * @author Tahara Kazuki
 * @created 04/11/2024
 * @lastModified 04/11/2024
 * @description Types list in Config Store
 * @copyright SoTru
 */
import { SubmitKey } from '../types/ConfigTypes';
import { LLMModel, ModelType } from '../types/modelTypes';

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const DEFAULT_INPUT_TEMPLATE = `{{input}}`;
export const DEFAULT_MODELS = [
  {
    name: 'gpt-4-0125-preview',
    available: true,
  },
  {
    name: 'gpt-4-turbo-preview',
    available: true,
  },
  {
    name: 'gpt-4-1106-preview',
    available: true,
  },
  {
    name: 'gpt-4-vision-preview',
    available: true,
  },
  {
    name: 'gpt-4-1106-vision-preview',
    available: true,
  },
  {
    name: 'gpt-4',
    available: true,
  },
  {
    name: 'gpt-4-0613',
    available: true,
  },
  {
    name: 'gpt-4-32k',
    available: true,
  },
  {
    name: 'gpt-4-32k-0613',
    available: true,
  },
  {
    name: 'qwen-v1', // 通义千问
    available: false,
  },
  {
    name: 'ernie', // 文心一言
    available: false,
  },
  {
    name: 'spark', // 讯飞星火
    available: false,
  },
  {
    name: 'llama', // llama
    available: false,
  },
  {
    name: 'chatglm', // chatglm-6b
    available: false,
  },
  {
    name: 'text-bison-001', // text-bison-001
    available: true,
  },
] as const;

export const DEFAULT_CONFIG = {
  submitKey: SubmitKey.CtrlEnter as SubmitKey,
  avatar: '1f603',
  fontSize: 14,
  sendPreviewBubble: true,
  sidebarWidth: 300,

  disablePromptHint: false,

  dontShowMaskSplashScreen: false, // dont show splash screen when create chat
  hideBuiltinMasks: false, // dont add builtin masks

  models: DEFAULT_MODELS.map((model) => ({ ...model })) as LLMModel[],
  modelConfig: {
    model: 'gpt-3.5-turbo' as ModelType,
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
