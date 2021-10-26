export interface IUser {
  id: string;
  email: string;
  fullName: string;
  drive_license: string;
}

export type IUserSignInRequestDTO = {
  password: string;
} & Pick<IUser, 'email'>;

export type IUserSignUpRequestDTO = {
  password: string;
} & Pick<IUser, 'email' | 'drive_license' | 'fullName'>;

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
