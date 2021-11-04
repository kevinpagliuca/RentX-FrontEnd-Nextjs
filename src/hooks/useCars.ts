import { useQuery, UseQueryOptions } from 'react-query';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';
import { RGetAllCars } from 'interfaces/cars';
import CarsService from 'services/CarsService';

export const useGetAvailableCars = (options?: UseQueryOptions) => {
  const { data: items, ...rest } = useQuery(['Cars'], CarsService.getAll, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    onError: (error: AxiosError) => {
      toast.error(error.message);
    },
    ...options,
  });

  const data = items as RGetAllCars;
  return { data, ...rest };
};
