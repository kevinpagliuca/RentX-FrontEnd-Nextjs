import { AxiosError } from 'axios';
import {
  IUserSignInRequestDTO,
  IUserSignInResponseDTO,
  IUserSignUpRequestDTO,
  IUserSignUpResponseDTO,
} from 'interfaces/auth';
import { Error500 } from 'shared/errors';

import { api } from './client';

class AuthService {
  async setAuthorization(token: string) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
  async signIn({ email, password }: IUserSignInRequestDTO) {
    try {
      const { data } = await api.post<IUserSignInResponseDTO>('/auth', {
        email,
        password,
      });
      this.setAuthorization(data.token);
    } catch (error) {
      const err = error as AxiosError;
      if (err.isAxiosError) {
        switch (err.code) {
          case '401':
            throw new Error('Email ou senha inválidos!');
          case '500':
            throw new Error(Error500);
          default:
            return;
        }
      }
      throw new Error(err.message);
    }
  }
  async signUp(payload: IUserSignUpRequestDTO) {
    try {
      const { data } = await api.post<IUserSignUpResponseDTO>(
        '/register',
        payload
      );
      this.setAuthorization(data.token);
    } catch (error) {
      const err = error as AxiosError;
      if (err.isAxiosError) {
        switch (err.code) {
          case '400':
            throw new Error(
              'Erro ao cadastrar, verifique os dados informados.'
            );
          case '500':
            throw new Error(Error500);
          default:
            return;
        }
      }
      throw new Error(err.message);
    }
  }
}
export default new AuthService();
