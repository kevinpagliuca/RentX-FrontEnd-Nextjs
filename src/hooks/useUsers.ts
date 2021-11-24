import { useQuery, UseQueryOptions } from 'react-query';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';
import { CarCategory } from 'interfaces/cars';
import categoryService from 'services/CategoryService';

export const useGetCategories = (options?: UseQueryOptions) => {
  const { data: items, ...rest } = useQuery(['Cars'], categoryService.getAll, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    onError: (error: AxiosError) => {
      toast.error(error.message);
    },
    ...options,
  });
  const data = items as CarCategory;
  return { data, ...rest };
};
