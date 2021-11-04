import { RGetAllCars } from 'interfaces/cars';

import { api } from './client';

class CarsService {
  async getAll(): Promise<RGetAllCars> {
    const { data } = await api.get<RGetAllCars>('/cars/available');
    return data;
  }
}

export default new CarsService();
