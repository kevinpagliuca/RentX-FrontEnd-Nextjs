export interface IUser {
  id: string;
  username: string;
  email: string;
  name: string;
  driver_license: string;
  isAdmin?: boolean;
}

export type IUserSignInRequestDTO = {
  password: string;
} & Pick<IUser, 'email'>;

export type IUserSignUpRequestDTO = {
  password: string;
} & Pick<IUser, 'email' | 'driver_license' | 'name'>;

export type IUserUpdateRequestDTO = Omit<IUser, 'id' | 'isAdmin'>;

export type IUserChangePasswordDTO = {
  current_password: string;
  new_password: string;
};

export type IUserSignInResponseDTO = {
  user: IUser;
  token: string;
};

export type IUserSignUpResponseDTO = {
  user: IUser;
  token: string;
};

export interface IAuthContextData {
  user: IUser | undefined;
  signIn: (user: IUserSignInRequestDTO) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}
