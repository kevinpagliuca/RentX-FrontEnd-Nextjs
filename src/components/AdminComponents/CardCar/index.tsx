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
          height={150}
          width={150}
          quality={100}
          objectFit="cover"
        />
      </span>

      <S.ContentContainer></S.ContentContainer>
    </S.Container>
  );
};
