import { useQuery, UseQueryOptions } from 'react-query';
import { toast } from 'react-toastify';

import { AxiosError } from 'axios';
import { IUser } from 'interfaces/auth';
import { usersService } from 'services/UsersService';

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
