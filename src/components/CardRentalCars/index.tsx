import Image from 'next/image';

import { RightArrowIcon } from 'assets/Icons';
import { formatDateToDateText } from 'helpers/dates';
import { IRental } from 'interfaces/rentals';

import { CarIconType } from '../CarIconType';
import * as S from './styles';

interface CardRentalCarsProps {
  rental: IRental;
}

export const CardRentalCars = ({ rental }: CardRentalCarsProps) => {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.CarInformationsContainer>
          <S.InfoGroup>
            <h1>{rental.car.brand}</h1>
            <strong>{rental.car.name}</strong>
          </S.InfoGroup>
          <S.InfoGroup>
            <h1>AO DIA</h1>
            <strong className="red">R$ {rental.car.daily_rate}</strong>
            <CarIconType type={rental.car.fuel_type} className="iconType" />
          </S.InfoGroup>
        </S.CarInformationsContainer>
        <S.CarImageContainer>
          <Image src="/Lambo.png" width={300} height={150} quality={100} />
        </S.CarImageContainer>
      </S.ContentContainer>
      <S.FooterContet>
        <h1>PERÍODO DO ALUGUEL</h1>
        <div>
          <span>{formatDateToDateText(rental.start_date)}</span>
          <RightArrowIcon />
          <span>{formatDateToDateText(rental.end_date)}</span>
        </div>
      </S.FooterContet>
    </S.Container>
  );
};
