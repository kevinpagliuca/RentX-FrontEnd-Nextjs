import {
  VelocityIcon,
  SeilType,
  Exchange,
  Up,
  Peaple,
  PowerHorse,
} from 'assets/Icons';

import * as S from './styles';

export default function CarDetails() {
  return (
    <S.Container>
      <S.ContainerContent>
        <S.ContainerIcon>
          <VelocityIcon />
        </S.ContainerIcon>
        <S.ContainerLabel>
          <p>270km</p>
        </S.ContainerLabel>
      </S.ContainerContent>

      <S.ContainerContent>
        <S.ContainerIcon>
          <Up />
        </S.ContainerIcon>
        <S.ContainerLabel>
          <p>6.8s</p>
        </S.ContainerLabel>
      </S.ContainerContent>

      <S.ContainerContent>
        <S.ContainerIcon>
          <SeilType />
        </S.ContainerIcon>
        <S.ContainerLabel>
          <p>Gasolina</p>
        </S.ContainerLabel>
      </S.ContainerContent>

      <S.ContainerContent>
        <S.ContainerIcon>
          <PowerHorse />
        </S.ContainerIcon>
        <S.ContainerLabel>
          <p>Auto</p>
        </S.ContainerLabel>
      </S.ContainerContent>

      <S.ContainerContent>
        <S.ContainerIcon>
          <Peaple />
        </S.ContainerIcon>
        <S.ContainerLabel>
          <p>5 pessoas</p>
        </S.ContainerLabel>
      </S.ContainerContent>

      <S.ContainerContent>
        <S.ContainerIcon>
          <Exchange />
        </S.ContainerIcon>
        <S.ContainerLabel>
          <p>280 HP</p>
        </S.ContainerLabel>
      </S.ContainerContent>
    </S.Container>
  );
}
