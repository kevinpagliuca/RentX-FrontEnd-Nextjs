import { useMutation, useQuery, UseQueryOptions } from 'react-query';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';
import { ICarCategory } from 'interfaces/cars';
import { categoryService } from 'services/CategoryService';
import { queryClient } from 'services/reactQuery/queryClient';
import { ToastifyCustomMessage } from 'styles/ToastifyCustomMessage';

export const useGetCategories = (options?: UseQueryOptions) => {
  const { data: items, ...rest } = useQuery(
    ['Categories'],
    categoryService.getAll,
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
      onError: (error: AxiosError) => {
        toast.error(error.message);
      },
      ...options,
    }
  );
  const data = items as ICarCategory[];
  const categoriesOptions = data?.map((category) => {
    return {
      value: category.id,
      label: category.name,
    };
  });
  return { data, categoriesOptions, ...rest };
};

export const useCreateCategory = () => {
  return useMutation(categoryService.create, {
    onSuccess: () => {
      toast.success(
        ToastifyCustomMessage({ message: 'Categoria criada com sucesso!' })
      );
      queryClient.invalidateQueries('Categories');
    },
    onError: (error: AxiosError) => {
      toast.error(ToastifyCustomMessage({ message: error.message }));
    },
  });
};

export const useUpdateCategory = () => {
  return useMutation(categoryService.update, {
    onSuccess: () => {
      toast.success(
        ToastifyCustomMessage({ message: 'Categoria atualizada com sucesso!' })
      );
      queryClient.invalidateQueries('Categories');
    },
    onError: (error: AxiosError) => {
      toast.error(ToastifyCustomMessage({ message: error.message }));
    },
  });
};

export const useDeleteCategory = () => {
  return useMutation(categoryService.delete, {
    onSuccess: () => {
      toast.success(
        ToastifyCustomMessage({ message: 'Categoria deletada com sucesso!' })
      );
      queryClient.invalidateQueries('Categories');
    },
    onError: (error: AxiosError) => {
      toast.error(ToastifyCustomMessage({ message: error.message }));
    },
  });
};
