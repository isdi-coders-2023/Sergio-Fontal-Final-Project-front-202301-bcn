import { UserState, UserStructure } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given loginUser reducer", () => {
  describe("When it receives a user state and a loginUser action", () => {
    test("Then it should return the same user with his property isLogged set as true", () => {
      const user: UserStructure = {
        username: "Pet",
        email: "pet@petalert.com",
        token: "woofMeowMooOink",
      };

      const expectedUser: UserState = {
        username: "Pet",
        email: "pet@petalert.com",
        token: "woofMeowMooOink",
        isLogged: true,
      };

      const userLogged = userReducer(user, loginUserActionCreator(user));

      expect(userLogged).toStrictEqual(expectedUser);
    });
  });
});
