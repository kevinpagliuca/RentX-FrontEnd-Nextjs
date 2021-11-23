import { CarCategory } from 'interfaces/cars';

import { api } from './client';

class CategoryService {
  async getAll() {
    try {
      const { data } = await api.get<CarCategory[]>('/categories');
      return data;
    } catch (err) {
      throw new Error('Erro ao carregar as categorias disponíveis!');
    }
  }
}

export default new CategoryService();
