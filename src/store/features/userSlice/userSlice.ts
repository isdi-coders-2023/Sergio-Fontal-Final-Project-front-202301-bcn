import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UserStructure } from "../types";

const initialState: UserState = {
  username: "",
  email: "",
  token: "",
  isLogged: false,
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (
      initialState,
      action: PayloadAction<UserStructure>
    ): UserState => ({
      ...action.payload,
      isLogged: true,
    }),

    logoutUser: (currentState): UserState => ({
      ...initialState,
    }),
  },
});

export const userReducer = usersSlice.reducer;
export const {
  loginUser: loginUserActionCreator,
  logoutUser: logoutUserActionCreator,
} = usersSlice.actions;
