import { UserStructure } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given loginUser reducer", () => {
  describe("When it receives a user and a loginUser action", () => {
    test("Then it should return the same user with his property isLogged set as true", () => {
      const user: UserStructure = {
        username: "Pet",
        token: "woofMeowMooOink",
        isLogged: false,
      };

      const expectedUser: UserStructure = {
        username: "Pet",
        token: "woofMeowMooOink",
        isLogged: true,
      };

      const userLogged = userReducer(user, loginUserActionCreator(user));

      expect(userLogged).toStrictEqual(expectedUser);
    });
  });
});
