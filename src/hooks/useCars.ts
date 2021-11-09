import { useQuery, UseQueryOptions } from 'react-query';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';
import { ICars, RGetAllCars } from 'interfaces/cars';
import CarsService from 'services/CarsService';

interface IUseGetCarByIdProps {
  options?: UseQueryOptions;
  id: string;
}

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

export const useGetCarById = ({ options, id }: IUseGetCarByIdProps) => {
  const { data: item, ...rest } = useQuery(
    ['Car', id],
    () => CarsService.getById(id),
    {
      onError: (error: AxiosError) => {
        toast.error(error.message);
      },
      ...options,
    }
  );
  const data = item as ICars;

  return { data, ...rest };
};
