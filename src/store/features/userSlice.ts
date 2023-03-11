import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "./types";

const initialState: UserStructure = {
  username: "",
  token: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (
      initialState,
      action: PayloadAction<UserStructure>
    ): UserStructure => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = usersSlice.reducer;
export const { loginUser: loginUserActionCreator } = usersSlice.actions;
