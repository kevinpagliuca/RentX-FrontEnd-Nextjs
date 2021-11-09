import {
  VelocityIcon,
  SeilType,
  Exchange,
  Peaple,
  PowerHorse,
} from 'assets/Icons';
import { ICars } from 'interfaces/cars';

import * as S from './styles';

interface CarDetailsProps {
  details: ICars;
}

export default function CarDetails({ details }: CarDetailsProps) {
  return (
    <S.Container>
      <S.BoxContainer>
        <S.IconBox>
          <VelocityIcon />
        </S.IconBox>
        <S.DetailBox>
          {details.max_velocity ? (
            <p>{details.max_velocity} km/h</p>
          ) : (
            <p>--</p>
          )}
        </S.DetailBox>
      </S.BoxContainer>

      <S.BoxContainer>
        <S.IconBox>
          <SeilType />
        </S.IconBox>
        <S.DetailBox>
          <p>{details.fuel_type}</p>
        </S.DetailBox>
      </S.BoxContainer>

      <S.BoxContainer>
        <S.IconBox>
          <PowerHorse />
        </S.IconBox>
        <S.DetailBox>
          <p>{details.transmission_type}</p>
        </S.DetailBox>
      </S.BoxContainer>

      <S.BoxContainer>
        <S.IconBox>
          <Peaple />
        </S.IconBox>
        <S.DetailBox>
          <p>
            {details.seats} {details.seats > 1 ? 'pessoas' : 'pessoa'}
          </p>
        </S.DetailBox>
      </S.BoxContainer>

      {details.horse_power && (
        <S.BoxContainer>
          <S.IconBox>
            <Exchange />
          </S.IconBox>
          <S.DetailBox>
            <p>{details.horse_power} HP</p>
          </S.DetailBox>
        </S.BoxContainer>
      )}
    </S.Container>
  );
}
