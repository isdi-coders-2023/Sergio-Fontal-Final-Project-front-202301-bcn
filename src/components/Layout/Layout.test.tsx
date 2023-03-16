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

    test("Then it should not show an image of a sad dog", () => {
      renderWithProviders(<Layout />);
      const imageAlt = "A sad dog";

      const expectedImage = screen.queryByRole("img", { name: imageAlt });

      expect(expectedImage).toBeNull();
    });
  });

  describe("When it's rendered and modal state property isOpen is true", () => {
    test("Then it should show an image of a sad dog", () => {
      renderWithProviders(<Layout />, { ui: { isOpen: true, isError: false } });
      const imageAlt = "A sad dog";

      const expectedImage = screen.getByRole("img", { name: imageAlt });

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
