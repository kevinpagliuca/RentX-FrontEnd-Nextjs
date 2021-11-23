import { FiSettings, FiTrash } from 'react-icons/fi';

import Image from 'next/image';

import { ICars } from 'interfaces/cars';

import * as S from './styles';

interface CardCarProps {
  car: ICars;
}

export const AdminCardCar = ({ car }: CardCarProps) => {
  return (
    <S.Container>
      <span className="carImage">
        <Image
          src="/Lambo.png"
          layout="fill"
          quality={100}
          objectFit="contain"
        />
      </span>

      <S.ContentContainer>
        <S.ItemsGroup>
          <S.CarInfoGroup>
            <span>Nome</span>
            <strong>{car.name}</strong>
          </S.CarInfoGroup>

          <S.CarInfoGroup>
            <span>Fabricante</span>
            <strong>{car.brand}</strong>
          </S.CarInfoGroup>
          <S.CarInfoGroup>
            <span>Placa</span>
            <strong>{car.license_plate}</strong>
          </S.CarInfoGroup>
        </S.ItemsGroup>

        <S.ItemsGroup>
          <S.CarInfoGroup color={car.available ? 'green' : 'red'}>
            <span>Diponibilidade</span>
            <strong>{car.available ? 'Disponível' : 'Indisponível'}</strong>
          </S.CarInfoGroup>

          <S.CarInfoGroup color="red">
            <span>Ao dia</span>
            <strong>R$ {car.daily_rate}</strong>
          </S.CarInfoGroup>

          <S.CarInfoGroup color="red">
            <span>Juros</span>
            <strong>R$ {car.fine_amount}</strong>
          </S.CarInfoGroup>
        </S.ItemsGroup>

        <S.ButtonsActions>
          <button onClick={() => null}>
            <FiSettings size={24} />
          </button>

          <button>
            <FiTrash size={24} />
          </button>
        </S.ButtonsActions>
      </S.ContentContainer>
    </S.Container>
  );
};
