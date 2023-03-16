import { ModalState } from "../types";
import {
  closeModalActionCreator,
  openModalActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given an openModal reducer", () => {
  describe("When it receives a modal state and an openModal action", () => {
    test("Then it should return the same modal with his property isOpen set as true", () => {
      const modal: ModalState = { isOpen: false, isError: false };

      const expectedModal: ModalState = { isOpen: true, isError: false };

      const modalOpened = uiReducer(modal, openModalActionCreator(modal));

      expect(modalOpened).toStrictEqual(expectedModal);
    });
  });

  describe("When it receives a modal state and a closeModal action", () => {
    test("Then it should return the same modal with his properties isOpen and isError set as false", () => {
      const modal: ModalState = { isOpen: true, isError: true };

      const expectedModal: ModalState = { isOpen: false, isError: false };

      const modalClosed = uiReducer(modal, closeModalActionCreator());

      expect(modalClosed).toStrictEqual(expectedModal);
    });
  });
});
