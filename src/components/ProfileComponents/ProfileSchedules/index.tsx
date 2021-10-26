import { CardRentalCars } from 'components/CardRentalCars';
import * as S from './styles';

interface tmpData {
  id: string | number;
  brand: string;
  carName: string;
  carImg: string;
  type: 'electric' | 'gasoline' | 'alcohol';
  price: number;
}

export const ProfileSchedules = () => {
  const carsData: tmpData[] = [
    {
      id: 1,
      brand: 'Merdecez',
      carName: 'CL-500',
      carImg:
        'https://images.unsplash.com/photo-1616788590791-6834e62d9367?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
      type: 'gasoline',
      price: 500,
    },
    {
      id: 2,
      brand: 'Merdecez',
      carName: 'CL-500',
      carImg:
        'https://images.unsplash.com/photo-1616788590791-6834e62d9367?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
      type: 'gasoline',
      price: 500,
    },
    {
      id: 3,
      brand: 'Merdecez',
      carName: 'CL-500',
      carImg:
        'https://images.unsplash.com/photo-1616788590791-6834e62d9367?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
      type: 'gasoline',
      price: 500,
    },
  ];
  return (
    <S.Container>
      <S.Title>Agendamentos feitos</S.Title>
      <S.ContentContainer>
        {carsData.map((car) => (
          <CardRentalCars key={car.id} />
        ))}
      </S.ContentContainer>
    </S.Container>
  );
};
