import decodeToken from "jwt-decode";
import { useAppDispatch } from "../../store/hooks";
import { UserCredentials, CustomJwtPayload, LoginResponse } from "../types";
import { loginUserActionCreator } from "../../store/features/userSlice/userSlice";
import { openModalActionCreator } from "../../store/features/uiSlice/uiSlice";

const apiUrl = process.env.REACT_APP_URL!;
const endpoint = "/users/login";

const useUser = () => {
  const dispatch = useAppDispatch();

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-type": "application/json" },
      });

      const { token }: LoginResponse = await response.json();

      const { username, email }: CustomJwtPayload = decodeToken(token);

      dispatch(loginUserActionCreator({ username, email, token }));

      localStorage.setItem("token", token);
    } catch (error) {
      dispatch(openModalActionCreator({ isOpen: true, isError: true }));
    }
  };

  return { loginUser };
};

export default useUser;
