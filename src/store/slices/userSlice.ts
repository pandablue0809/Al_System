import { createAction, createSlice, PrepareAction } from "@reduxjs/toolkit";
import { persistPermission, readPermission, readUser } from "../../services/localStorage.service";

export type UserState = {
  user: string | null;
  permission: string | null;
}

const initialState: UserState = {
  user: readUser()?.username ?? null,
  permission: readPermission(),
};

export const setUser = createAction<PrepareAction<string>>(
  "user/setUser",
  (newUser) => {
    return {
      payload: newUser,
    };
  },
);

export const setPermission = createAction<PrepareAction<string>>("user/setPermission", (newPermission,) => {
  console.log("permission===============>", newPermission);
  return {
    payload: newPermission
  }
})

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(setPermission, (state, action) => {
      state.permission = action.payload;
    })
  },
});

export default userSlice.reducer;
