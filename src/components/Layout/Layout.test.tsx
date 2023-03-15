import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/renderWithProviders";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When it's rendered", () => {
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
