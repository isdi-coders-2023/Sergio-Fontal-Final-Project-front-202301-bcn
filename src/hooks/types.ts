import { JwtPayload } from "jwt-decode";

export interface UserCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface CustomJwtPayload extends JwtPayload {
  username: string;
  email: string;
}

export interface PetStructure {
  id: string;
  name: string;
  image: string;
}

export type PetsStructure = PetStructure[];
