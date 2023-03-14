import { act, renderHook } from "@testing-library/react";
import { server } from "../mocks/server";
import { CustomJwtPayload, UserCredentials } from "./types";
import useUser from "./useUser";
import Wrapper from "../mocks/Wrapper";
import { loginUserActionCreator } from "../store/features/userSlice";
import { UserStructure } from "../store/features/types";
import decodeToken from "jwt-decode";

beforeAll(() => {
  jest.clearAllMocks();
  server.listen();
});

afterAll(() => {
  server.close();
  jest.clearAllMocks();
});

const mockDispatcher = jest.fn();

jest.mock("../store/hooks", () => ({
  ...jest.requireActual("../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

jest.mock("jwt-decode", () => jest.fn());

const userCredentials: UserCredentials = {
  email: "pet@petalert.com",
  password: "PetAdmin",
};

const mockTokenPayload: CustomJwtPayload = {
  username: "Pet",
  email: "pet@petalert.com",
};

const mockToken = "mockedToken";

describe("Given a useUser custom Hook", () => {
  describe("When its loginUser function is called with the username 'pet@petalert.com' and the password 'PetAdmin'", () => {
    test("Then it should call the dispatch with the loginUser Action creator", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const mockedUser: UserStructure = {
        username: mockTokenPayload.username,
        email: mockTokenPayload.email,
        token: mockToken,
      };

      await act(async () => loginUser(userCredentials));

      expect(mockDispatcher).toHaveBeenCalledWith(
        loginUserActionCreator(mockedUser)
      );
    });
  });
});
