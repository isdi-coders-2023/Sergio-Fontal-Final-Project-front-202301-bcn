import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "../types";

export const initialUiState: ModalState = {
  isError: false,
  isOpen: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    openModal: (currentUiState, action: PayloadAction<ModalState>) => ({
      ...currentUiState,
      isOpen: true,
      isError: action.payload.isError,
    }),

    closeModal: (currentUiState) => ({
      ...currentUiState,
      isOpen: false,
      isError: false,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  openModal: openModalActionCreator,
  closeModal: closeModalActionCreator,
} = uiSlice.actions;
