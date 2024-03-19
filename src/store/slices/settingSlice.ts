import { createAction, createSlice, PrepareAction } from "@reduxjs/toolkit";
import { SubmitKey } from "../../constants/config";

type SettingState = {
    submitKey: SubmitKey;
}

const initialState: SettingState = {
    submitKey: SubmitKey.CtrlEnter,
}

export const setSubmitKey = createAction<PrepareAction<SubmitKey>>('setting/setSubmitKey', (newKey) => {
    return {
        payload: newKey
    };
});

const settingSlice = createSlice({
    name: 'setting',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setSubmitKey, (state, action) => {
            state.submitKey = action.payload;
        })
    }
})

export default settingSlice.reducer;