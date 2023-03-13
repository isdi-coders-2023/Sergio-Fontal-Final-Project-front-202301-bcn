import { JwtPayload } from "jwt-decode";

export interface UserCredentials {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface CustomJwtPayload extends JwtPayload {
  username: string;
  email: string;
}
