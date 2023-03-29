import { PetsStructure } from "../../../hooks/types";
import petsTest from "../../../mocks/petsTest";
import { loadPetsActionCreator, petsReducer } from "./petSlice";

describe("Given a loadPets reducer", () => {
  describe("When it receives a list of two pets and a loadPets action", () => {
    test("Then it should return the same list of those two pets", () => {
      const currentPets: PetsStructure = [];
      const expectedPets: PetsStructure = petsTest;

      const newPets = petsReducer(
        currentPets,
        loadPetsActionCreator(expectedPets)
      );

      expect(newPets).toStrictEqual(expectedPets);
    });
  });
});
