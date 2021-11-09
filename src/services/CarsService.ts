import { RGetAllCars, ICreateCarsDTO, ICars } from 'interfaces/cars';

import { api } from './client';

class CarsService {
  async getAll() {
    try {
      const { data } = await api.get<RGetAllCars>('/cars/available');
      return data;
    } catch (err) {
      throw new Error('Erro ao carregar os carros disponíveis!');
    }
  }

  async getById(id: string) {
    try {
      const { data } = await api.get<RGetAllCars>(`/cars/${id}`);
      return data;
    } catch (err) {
      throw new Error('Erro ao carregar o carro!');
    }
  }

  async create(data: ICreateCarsDTO) {
    try {
      const { data: response } = await api.post<ICars>('/cars', data);
      return response;
    } catch (err) {
      throw new Error('Erro ao criar o carro!');
    }
  }
}

export default new CarsService();
