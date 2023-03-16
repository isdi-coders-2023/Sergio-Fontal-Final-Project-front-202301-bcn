import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { store } from "../../store";
import { closeModalActionCreator } from "../../store/features/uiSlice/uiSlice";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Modal from "./Modal";

const mockedDispatch = jest.spyOn(store, "dispatch");

describe("Given a Modal component", () => {
  describe("When its rendered", () => {
    test("Then it should show an image of a sad dog", () => {
      renderWithProviders(<Modal />);
      const imageAlt = "A sad dog";

      const expectedImage = screen.getByRole("img", { name: imageAlt });

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show an 'X' as a button that close the modal", () => {
      renderWithProviders(<Modal />);

      const expectedButton = screen.getByRole("button");

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When the user click on the X button", () => {
    test("Then the Modal component should close it", async () => {
      renderWithProviders(<Modal />);

      const xButton = screen.getByRole("button");

      await waitFor(async () => {
        await userEvent.click(xButton);
      });

      expect(mockedDispatch).toHaveBeenCalledWith(closeModalActionCreator());
    });
  });
});
