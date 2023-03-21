import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PetsStructure } from "../../../hooks/types";

const initialState: PetsStructure = [];

export const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {
    loadPets: (
      currentPets,
      action: PayloadAction<PetsStructure>
    ): PetsStructure => [...action.payload],
  },
});

export const petsReducer = petsSlice.reducer;
export const { loadPets: loadPetsActionCreator } = petsSlice.actions;
