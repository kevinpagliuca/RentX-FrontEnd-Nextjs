import { AxiosError } from 'axios';
import { CarCategory } from 'interfaces/cars';
import { ICreateCategoryDTO, IUpdateCategoryDTO } from 'interfaces/cars';
import { Error500 } from 'shared/errors';

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

  async createCategory(values: ICreateCategoryDTO) {
    try {
      const { data } = await api.post<CarCategory>('/categories', values);
      return data;
    } catch (error) {
      const err = error as AxiosError;
      if (err.isAxiosError) {
        switch (err.response.status) {
          case 401:
            throw new Error('Não Autorizado!');
          case 400:
            throw new Error('Categoria já cadastrada!');
          case 500:
            throw new Error(Error500);
          default:
            throw new Error(err.response.statusText);
        }
      }
      throw new Error(err.message);
    }
  }

  async updateCategory(values: IUpdateCategoryDTO, id: string) {
    try {
      const { data } = await api.put<CarCategory>(`/categories/${id}`, values);
      return data;
    } catch (err) {
      throw new Error('Erro ao criar as categorias disponíveis!');
    }
  }

  async deleteCategory(id: string) {
    try {
      const { data } = await api.delete<CarCategory>(`/categories/${id}`);
      return data;
    } catch (err) {
      throw new Error('Erro ao criar as categorias disponíveis!');
    }
  }
}

export default new CategoryService();
