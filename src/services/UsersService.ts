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
}

const usersService = new UsersService();
export { usersService };
