import Card from "./Card";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import { petMute, petNoa, petRoc } from "../../mocks/petsTest";
import { screen } from "@testing-library/react";

describe("Given a Card component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image of a pet", () => {
      renderWithProviders(<Card pet={petMute} />);

      const imageAlt = "Mute posing for his new family";

      const expectedImage = screen.getByRole("img", { name: imageAlt });

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a button", () => {
      renderWithProviders(<Card pet={petMute} />);

      const buttonText = "View +";

      const expectedButton = screen.getByRole("button", { name: buttonText });

      expect(expectedButton).toBeInTheDocument();
    });
  });

  describe("When it receives a male pet and it's rendered", () => {
    test("Then it should show a male symbol", () => {
      renderWithProviders(<Card pet={petRoc} />);

      const symbolLabel = "text__gender";

      const expectedSymbol = screen.getByLabelText(symbolLabel);

      expect(expectedSymbol).toBeInTheDocument();
    });
  });

  describe("When it receives a female pet and it's rendered", () => {
    test("Then it should show a female symbol", () => {
      renderWithProviders(<Card pet={petNoa} />);

      const symbolLabel = "text__gender";

      const expectedSymbol = screen.getByLabelText(symbolLabel);

      expect(expectedSymbol).toBeInTheDocument();
    });
  });
});
