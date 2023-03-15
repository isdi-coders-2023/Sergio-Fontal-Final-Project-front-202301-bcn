import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show an image as the website logo", () => {
      renderWithProviders(<Header />);
      const imageAlt = "pet alert logo";

      const expectedLogo = screen.getByRole("img", { name: imageAlt });

      expect(expectedLogo).toBeInTheDocument();
    });

    test("Then it should show a heading level 1 with the text 'pet alert!'", () => {
      renderWithProviders(<Header />);
      const text = "pet alert!";

      const expectedHeading = screen.getByRole("heading", { name: text });

      expect(expectedHeading).toBeInTheDocument();
    });
  });
});
