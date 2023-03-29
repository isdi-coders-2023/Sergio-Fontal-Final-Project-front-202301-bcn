import { screen } from "@testing-library/react";
import petsTest from "../../mocks/petsTest";
import { renderRouterWithProviders } from "../../testUtils/renderRouterWithProviders";
import CardList from "./CardList";

describe("Given a CardList component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list of pets", () => {
      renderRouterWithProviders(<CardList />, { pets: petsTest });

      const expectedPetList = screen.getByRole("list");

      expect(expectedPetList).toBeInTheDocument();
    });
  });
});
