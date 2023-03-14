import { useAppDispatch } from "../store/hooks";
import { loginUserActionCreator } from "../store/features/userSlice";
import { CustomJwtPayload, LoginResponse, UserCredentials } from "./types";
import decodeToken from "jwt-decode";

const useUser = () => {
  const apiUrl = process.env.REACT_APP_URL!;
  const endpoint = "/users/login";
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    const response = await fetch(`${apiUrl}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(userCredentials),
      headers: { "Content-type": "application/json" },
    });

    const { token }: LoginResponse = await response.json();

    const { username, email }: CustomJwtPayload = decodeToken(token);

    dispatch(loginUserActionCreator({ username, email, token }));

    localStorage.setItem("token", token);
  };

  return { loginUser };
};

export default useUser;
