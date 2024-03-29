import { createAction, createSlice, PrepareAction } from "@reduxjs/toolkit";

export type UserState = {
  user: string | null;
}

const initialState: UserState = {
  user: null
};

export const setUser = createAction<PrepareAction<string>>(
  "user/setUser",
  (newUser) => {
    return {
      payload: newUser,
    };
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
  },
});

export default userSlice.reducer;
