import { AxiosError } from 'axios';
import { IUser, IUserUpdateRequestDTO } from 'interfaces/auth';
import { Error500 } from 'shared/errors';

import { api } from './client';

interface IRequestUpdateUsersDTO {
  id: string;
  payload: IUserUpdateRequestDTO;
}

class UsersService {
  async getAll() {
    try {
      const { data } = await api.get<IUser[]>('/user/all');
      return data;
    } catch (err) {
      throw new Error('Erro ao buscar usuários');
    }
  }

  async delete(id: string) {
    try {
      await api.delete(`/user/${id}`);
    } catch (err) {
      throw new Error('Erro ao deletar usuário');
    }
  }

  async updateUserById({ id, payload }: IRequestUpdateUsersDTO) {
    try {
      const { data } = await api.put<IUser>(`/user/update/${id}`, payload);
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
}

const usersService = new UsersService();
export { usersService };
