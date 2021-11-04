import { AxiosError } from 'axios';
import {
  IUser,
  IUserChangePasswordDTO,
  IUserSignInRequestDTO,
  IUserSignInResponseDTO,
  IUserSignUpRequestDTO,
  IUserSignUpResponseDTO,
  IUserUpdateRequestDTO,
} from 'interfaces/auth';
import { setCookie } from 'nookies';
import { Error500 } from 'shared/errors';

import { api, setAuthentication } from './client';

type AuthCookies = {
  token?: string;
  user?: IUser;
};

const setAuthCookies = ({ token, user }: AuthCookies) => {
  if (token) {
    setCookie(undefined, '@rentX:token', token, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });
  }
  delete user.isAdmin;
  setCookie(undefined, '@rentX:userData', JSON.stringify(user), {
    maxAge: 60 * 60 * 24 * 30, // 30 days
    path: '/',
  });
};

class AuthService {
  async signIn({ email, password }: IUserSignInRequestDTO) {
    try {
      const { data } = await api.post<IUserSignInResponseDTO>('/auth', {
        email,
        password,
      });
      setAuthentication(data.token);
      setAuthCookies({ token: data.token, user: data.user });
      return data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.isAxiosError) {
        switch (err.response.status) {
          case 401:
            throw new Error('Email ou senha inválidos!');
          case 400:
            throw new Error('Email ou senha inválidos!');
          case 500:
            throw new Error(Error500);
          default:
            throw new Error(err.response.statusText);
        }
      }
      throw new Error(err.message);
    }
  }

  async signUp(payload: IUserSignUpRequestDTO) {
    try {
      const { data } = await api.post<IUserSignUpResponseDTO>(
        '/user/register',
        payload
      );
      setAuthentication(data.token);
    } catch (error) {
      const err = error as AxiosError;
      if (err.isAxiosError) {
        switch (err.response.status) {
          case 400:
            throw new Error(
              'Erro ao cadastrar, verifique os dados informados.'
            );
          case 500:
            throw new Error(Error500);
          default:
            throw new Error(err.response.statusText);
        }
      }
      throw new Error(err.message);
    }
  }

  async getAuthUser(token: string) {
    try {
      const { data } = await api.get<IUserSignInResponseDTO>('/me');
      setAuthCookies({ token: data.token, user: data.user });
      setAuthentication(token);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.isAxiosError) {
        switch (err.response.status) {
          case 400:
            throw new Error('Erro ao recuperar dados de sua sessão.');
          case 500:
            throw new Error(Error500);
          default:
            throw new Error(err.response.statusText);
        }
      }
      throw new Error(err.message);
    }
  }

  async updateUser(payload: IUserUpdateRequestDTO) {
    try {
      const { data } = await api.put<IUser>(`/user/update`, payload);
      setAuthCookies({ user: data });
      return data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.isAxiosError) {
        switch (err.response.status) {
          case 400:
            throw new Error('Erro ao atualizar dados.');
          case 500:
            throw new Error(Error500);
          default:
            throw new Error(err.response.statusText);
        }
      }
      throw new Error(err.message);
    }
  }

  async changePassword(payload: IUserChangePasswordDTO) {
    try {
      await api.put('/user/change-password', payload);
    } catch (error) {
      const err = error as AxiosError;
      if (err.isAxiosError) {
        switch (err.response.status) {
          case 400:
            throw new Error('Erro ao atualizar senha.');
          case 401:
            throw new Error('Erro no campo "Senha atual" incorreta.');
          case 500:
            throw new Error(Error500);
          default:
            throw new Error(err.response.statusText);
        }
      }
      throw new Error(err.message);
    }
  }
}
export default new AuthService();
