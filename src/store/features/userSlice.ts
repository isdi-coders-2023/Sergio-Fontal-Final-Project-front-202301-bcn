import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserStructure } from "../../types";

const initialState: UserStructure = {
  username: "",
  token: "",
  isLogged: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    loginUser: (
      currentUser: UserStructure,
      action: PayloadAction<string>
    ): UserStructure => ({
      ...currentUser,
      token: action.payload,
      isLogged: true,
    }),
  },
});

export const userReducer = usersSlice.reducer;
export const { loginUser: loginUserActionCreator } = usersSlice.actions;
