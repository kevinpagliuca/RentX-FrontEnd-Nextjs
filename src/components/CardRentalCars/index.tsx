import { RightArrowIcon } from 'assets/Icons';
import Image from 'next/image';

import { CarIconType } from '../CarIconType';
import * as S from './styles';
export const CardRentalCars = () => {
  return (
    <S.Container>
      <S.ContentContainer>
        <S.CarInformationsContainer>
          <S.InfoGroup>
            <h1>AUDI</h1>
            <strong>RS 5 Coupé</strong>
          </S.InfoGroup>
          <S.InfoGroup>
            <h1>AO DIA</h1>
            <strong className="red">R$ 340</strong>
            <CarIconType type="alcohol" className="iconType" />
          </S.InfoGroup>
        </S.CarInformationsContainer>
        <S.CarImageContainer>
          <Image src="/Lambo.png" width={300} height={150} quality={100} />
        </S.CarImageContainer>
      </S.ContentContainer>
      <S.FooterContet>
        <h1>PERÍODO DO ALUGUEL</h1>

        <div>
          <span>18 Jul 2021</span>
          <RightArrowIcon />
          <span>20 Jul 2021</span>
        </div>
      </S.FooterContet>
    </S.Container>
  );
};
