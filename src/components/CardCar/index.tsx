import Image from 'next/image';
import { CarContainer, Content, ImageCard, ContentBottom } from './styles';
import { LightningIcon } from 'assets/Icons';

export const CardCar = () => (
  <>
    <CarContainer>
      <Content>
        <p>marca carro</p>
        <h1>modelo carro</h1>
        <p>Ao dia</p>
        <h1 className="name">
          valor dia <LightningIcon className="colorIcon" />
        </h1>
      </Content>
      <div className="divImg">
        <ImageCard src="/Lambo.png" />
      </div>
    </CarContainer>

    <ContentBottom>
      <p>Periodo Aluguel</p>
      <h1>18 julho -- 21 julho</h1>
    </ContentBottom>
  </>
);
