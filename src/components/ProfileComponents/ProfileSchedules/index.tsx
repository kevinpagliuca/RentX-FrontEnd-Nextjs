import { CardRentalCars } from 'components/CardRentalCars';
import { useGetMyRentals } from 'hooks/useRentals';

import * as S from './styles';

export const ProfileSchedules = () => {
  const { data } = useGetMyRentals();

  return (
    <S.Container>
      <S.Title>Agendamentos feitos</S.Title>
      <S.ContentContainer>
        {data?.map((rental) => (
          <CardRentalCars key={rental.id} rental={rental} />
        ))}
      </S.ContentContainer>
    </S.Container>
  );
};
