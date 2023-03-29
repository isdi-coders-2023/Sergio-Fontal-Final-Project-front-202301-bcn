import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of pets", () => {
      renderRouterWithProviders();

      const expectedPetList = screen.getByRole("list");

      expect(expectedPetList).toBeInTheDocument();
    });
  });
});
