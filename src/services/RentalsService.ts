import { IRental } from 'interfaces/rentals';

import { api } from './client';

class RentalsService {
  async getAll() {
    try {
      const { data } = await api.get<IRental[]>('/rentals');
      return data;
    } catch (err) {
      throw new Error('Erro ao buscar agendamentos');
    }
  }
}

const rentalsService = new RentalsService();
export { rentalsService };
