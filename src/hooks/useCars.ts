import { useMutation, useQuery, UseQueryOptions } from 'react-query';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';
import { ICars, RGetAllCars } from 'interfaces/cars';
import CarsService from 'services/CarsService';
import { queryClient } from 'services/reactQuery/queryClient';
import { ToastifyCustomMessage } from 'styles/ToastifyCustomMessage';

interface IUseGetCarByIdProps {
  options?: UseQueryOptions;
  id: string;
}

export const useGetAvailableCars = (options?: UseQueryOptions) => {
  const { data: items, ...rest } = useQuery(['Cars'], CarsService.getAll, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    onError: (error: AxiosError) => {
      toast.error(ToastifyCustomMessage({ message: error.message }));
    },
    ...options,
  });
  const data = items as RGetAllCars;
  return { data, ...rest };
};

export const useGetCarById = ({ options, id }: IUseGetCarByIdProps) => {
  const { data: item, ...rest } = useQuery(
    ['Cars', id],
    () => CarsService.getById(id),
    {
      onError: (error: AxiosError) => {
        toast.error(ToastifyCustomMessage({ message: error.message }));
      },
      ...options,
    }
  );
  const data = item as ICars;

  return { data, ...rest };
};

export const useGetCarsByAdmin = (options?: UseQueryOptions) => {
  const { data: items, ...rest } = useQuery(
    ['Cars'],
    CarsService.getAllByAdmin,
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
      onError: (error: AxiosError) => {
        toast.error(ToastifyCustomMessage({ message: error.message }));
      },
      ...options,
    }
  );
  const data = items as RGetAllCars;
  return { data, ...rest };
};

export const useCreateCar = () => {
  return useMutation(CarsService.create, {
    onSuccess: () => {
      toast.success(
        ToastifyCustomMessage({ message: 'Carro cadastrado com sucesso!' })
      );
      queryClient.invalidateQueries('Cars');
    },
    onError: (error: AxiosError) => {
      toast.error(ToastifyCustomMessage({ message: error.message }));
    },
  });
};

export const useDeleteCar = () => {
  return useMutation(CarsService.delete, {
    onSuccess: () => {
      queryClient.invalidateQueries('Cars');
      toast.success(
        ToastifyCustomMessage({ message: 'Carro deletado com sucesso!' })
      );
    },
    onError: (error: AxiosError) => {
      toast.error(ToastifyCustomMessage({ message: error.message }));
    },
  });
};

export const useUpdateCar = () => {
  return useMutation(CarsService.update, {
    onSuccess: () => {
      toast.success(
        ToastifyCustomMessage({ message: 'Carro atualizado com sucesso!' })
      );
      queryClient.invalidateQueries('Cars');
    },
    onError: (error: AxiosError) => {
      toast.error(ToastifyCustomMessage({ message: error.message }));
    },
  });
};
