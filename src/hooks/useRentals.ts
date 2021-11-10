import { useQuery, UseQueryOptions } from 'react-query';

import { IRental } from 'interfaces/rentals';
import { rentalsService } from 'services/RentalsService';

export const useGetMyRentals = (options?: UseQueryOptions) => {
  const { data: items, ...rest } = useQuery(
    ['Rentals'],
    rentalsService.getAll,
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
      ...options,
    }
  );
  const data = items as IRental[];
  return { data, ...rest };
};
