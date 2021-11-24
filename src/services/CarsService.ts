import {
  RGetAllCars,
  ICreateCarsDTO,
  ICars,
  IUpdateCarsDTO,
} from 'interfaces/cars';

import { api } from './client';

interface IRequestUpdateCarsDTO {
  id: string;
  payload: IUpdateCarsDTO;
}

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

  async delete(id: string) {
    try {
      await api.delete(`/cars/${id}`);
    } catch {
      throw new Error('Erro ao excluir o carro.');
    }
  }

  async update({ id, payload }: IRequestUpdateCarsDTO) {
    try {
      await api.put(`/cars/${id}`, payload);
    } catch {
      throw new Error('Erro ao atualizar o carro.');
    }
  }

  async getAllByAdmin() {
    try {
      const { data } = await api.get<RGetAllCars>('/cars/list/all');
      return data;
    } catch {
      throw new Error('Erro ao listar carros.');
    }
  }
}

export default new CarsService();
