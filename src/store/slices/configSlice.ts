/**
 * @author Tahara Kazuki
 * @created 04/08/2024
 * @lastModified 04/11/2024
 * @description Types list in Config Store
 * @copyright SoTru
 */

import { createSlice, createAction, PrepareAction } from '@reduxjs/toolkit';

import { DEFAULT_CONFIG } from '../../constants/configConstant';
import type { ChatConfig } from '../../types/ConfigTypes';
//use localstorage service
import { persistConfig, readConfig } from '../../services/localStorage.service';
import { LLMModel } from '../../types/modelTypes';

const initialState: ChatConfig = readConfig();
//Updating set props variable into default state thru setting panel
export const resetConfig = createAction('config/resetConfig', () => {
  persistConfig(DEFAULT_CONFIG);
  return {
    payload: DEFAULT_CONFIG,
  };
});
//Updating set props variable thru setting panel
export const setConfig = createAction<PrepareAction<ChatConfig>>('config/setConfig', (UpdatePayload) => {
  persistConfig(UpdatePayload);
  return {
    payload: UpdatePayload,
  };
});
// Adding new model to default model list
export const mergeModelsConfig = createAction<PrepareAction<LLMModel[]>>('config/mergeModelsConfig', (newModel) => {
  return {
    payload: newModel,
  };
});

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(resetConfig, (state, action) => {
      state = action.payload;
    });
    builder.addCase(setConfig, (state, action) => {
      state = action.payload;
    });
    builder.addCase(mergeModelsConfig, (state, action) => {
      const modelMap: Record<string, LLMModel> = {};
      // Mark old models as unavailable
      for (const model of state.models) {
        model.available = false;
        modelMap[model.name] = model;
      }
      // Mark new models as available and merge
      for (const model of action.payload) {
        model.available = true;
        modelMap[model.name] = model;
      }
      state.models = Object.values(modelMap);
    });
  },
});

export default configSlice.reducer;