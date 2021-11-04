import { IUserChangePasswordDTO } from './auth';

export interface IFilterCarsFormData {
  carName: string;
  priceRange: number[];
  type?: {
    eletric?: boolean;
    gasoline?: boolean;
    alcohol?: boolean;
  };
  transmission?: {
    automatic?: boolean;
    manual?: boolean;
  };
}

export interface IUserRegisterFormData {
  name: string;
  username: string;
  email: string;
  driver_license: string;
  password: string;
  password_confirmation: string;
}

export type IUserChangePasswordFormData = {
  new_password_confirmation: string;
} & IUserChangePasswordDTO;
