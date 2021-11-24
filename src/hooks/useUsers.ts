import { useMutation, useQuery, UseQueryOptions } from 'react-query';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';
import { IUser } from 'interfaces/auth';
import AuthService from 'services/AuthService';
import { queryClient } from 'services/reactQuery/queryClient';
import { usersService } from 'services/UsersService';
import { ToastifyCustomMessage } from 'styles/ToastifyCustomMessage';

export const useGetUsers = (options?: UseQueryOptions) => {
  const { data: items, ...rest } = useQuery(['Users'], usersService.getAll, {
    staleTime: 1000 * 60 * 5, // 5 minutes
    onError: (error: AxiosError) => {
      toast.error(error.message);
    },
    ...options,
  });
  const data = items as IUser[];
  return { data, ...rest };
};

export const useCreateUser = () => {
  return useMutation(AuthService.signUp, {
    onSuccess: () => {
      toast.success(
        ToastifyCustomMessage({ message: 'Usuário criado com sucesso!' })
      );
      queryClient.invalidateQueries('Users');
    },
    onError: (error: AxiosError) => {
      toast.error(ToastifyCustomMessage({ message: error.message }));
    },
  });
};

export const useUpdateUser = () => {
  return useMutation(usersService.updateUserById, {
    onSuccess: () => {
      toast.success(
        ToastifyCustomMessage({ message: 'Usuário atualizado com sucesso!' })
      );
      queryClient.invalidateQueries('Users');
    },
    onError: (error: AxiosError) => {
      toast.error(ToastifyCustomMessage({ message: error.message }));
    },
  });
};

export const useDeleteUser = () => {
  return useMutation(usersService.delete, {
    onSuccess: () => {
      toast.success(
        ToastifyCustomMessage({ message: 'Usuário deletado com sucesso!' })
      );
      queryClient.invalidateQueries('Users');
    },
    onError: (error: AxiosError) => {
      toast.error(ToastifyCustomMessage({ message: error.message }));
    },
  });
};
