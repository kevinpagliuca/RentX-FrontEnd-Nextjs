import { api } from './client';

class RentalsService {
  async getAll() {
    try {
      const rentals = await api.get('/rentals');
      return rentals;
    } catch (err) {
      throw new Error('Erro ao buscar agendamentos');
    }
  }
}

export { RentalsService };
