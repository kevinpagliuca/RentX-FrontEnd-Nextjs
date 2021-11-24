import { AxiosError } from 'axios';
import { ICarCategory } from 'interfaces/cars';
import { ICreateCategoryDTO, IUpdateCategoryDTO } from 'interfaces/cars';
import { Error500 } from 'shared/errors';

import { api } from './client';

interface IRequestUpdateCategoryDTO {
  id: string;
  payload: IUpdateCategoryDTO;
}

class CategoryService {
  async getAll() {
    try {
      const { data } = await api.get<ICarCategory[]>('/categories');
      return data;
    } catch (err) {
      throw new Error('Erro ao carregar as categorias disponíveis!');
    }
  }

  async create(values: ICreateCategoryDTO) {
    try {
      const { data } = await api.post<ICarCategory>('/categories', values);
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

  async update({ id, payload }: IRequestUpdateCategoryDTO) {
    try {
      const { data } = await api.put<ICarCategory>(
        `/categories/${id}`,
        payload
      );
      return data;
    } catch (err) {
      throw new Error('Erro ao criar categoria.');
    }
  }

  async delete(id: string) {
    try {
      const { data } = await api.delete<ICarCategory>(`/categories/${id}`);
      return data;
    } catch (err) {
      throw new Error('Erro ao apagar categoria!');
    }
  }
}

const categoryService = new CategoryService();
export { categoryService };
