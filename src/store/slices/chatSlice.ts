import { createAsyncThunk, createSlice, createAction } from '@reduxjs/toolkit';
import { trimTopic } from '../../utils/utils';

import { ModelType, ModelConfig } from './configSlice';
import { RequestMessage } from '../../config/api';

export type ChatMessage = RequestMessage & {
    date: string;
    streaming?: boolean;
    isError?: boolean;
    id?: number;
    model?: ModelType;
};


