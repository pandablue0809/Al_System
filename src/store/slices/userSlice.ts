import { createAction, createSlice, PrepareAction } from "@reduxjs/toolkit";

export interface UserState {
  user: string;
}

const initialState: UserState = {
  user: "",
};

export const setUser = createAction<PrepareAction<string>>(
  "user/setUser",
  (newUser) => {
    console.log("dispatched username=======>", newUser);
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
