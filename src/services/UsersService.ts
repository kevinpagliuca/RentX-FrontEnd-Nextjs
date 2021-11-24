import { IUser } from 'interfaces/auth';

import { api } from './client';

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
}

const usersService = new UsersService();
export { usersService };
