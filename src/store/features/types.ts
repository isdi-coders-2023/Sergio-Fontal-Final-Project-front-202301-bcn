export interface UserStructure {
  username: string;
  email: string;
  token: string;
}

export interface UserState extends UserStructure {
  isLogged: boolean;
}
