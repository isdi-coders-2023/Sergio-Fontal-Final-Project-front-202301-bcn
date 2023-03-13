import { useAppDispatch } from "../store/hooks";
import { loginUserActionCreator } from "../store/features/userSlice";
import { CustomJwtPayload, loginResponse, UserCredentials } from "./types";
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

    const { token }: loginResponse = await response.json();

    const { username }: CustomJwtPayload = decodeToken(token);

    dispatch(loginUserActionCreator({ username, token }));

    localStorage.setItem("token", token);
  };

  return { loginUser };
};

export default useUser;