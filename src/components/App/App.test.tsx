import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Layout from "../Layout/Layout";
import App from "./App";

describe("Given an App component", () => {
  describe("When its rendered", () => {
    test("Then it should show an image as website logo", () => {
      renderWithProviders(<App></App>);
      const imageAlt = "pet alert logo";

      const expectedLogo = screen.getByRole("img", { name: imageAlt });

      expect(expectedLogo).toBeInTheDocument();
    });

    test("Then it should show a link as website logo", () => {
      renderWithProviders(<App></App>);
      const linkName = "pet alert logo";

      const expectedLogo = screen.getByRole("link", { name: linkName });

      expect(expectedLogo).toBeInTheDocument();
    });

    test("Then it should show a main section with Aria-label `Find your new family member`", () => {
      const arialLabelText = "Find your new family member";
      renderWithProviders(<Layout />);

      const expectedAriaLabel = screen.getByRole("main", {
        name: arialLabelText,
      });

      expect(expectedAriaLabel).toBeInTheDocument();
    });
  });
});
