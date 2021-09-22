import { Container, ContainerIcon, ContainerLabel, ContainerContent } from "./styles";
import { VelocityIcon, SeilType, Exchange, Up, Peaple, PowerHorse } from "../../../assets/Icons";

export default function CarDetails() {
  return (
    <Container>
      <ContainerContent>
        <ContainerIcon>
          <VelocityIcon />
        </ContainerIcon>
        <ContainerLabel>
          <p>270km</p>
        </ContainerLabel>
      </ContainerContent>

      <ContainerContent>
        <ContainerIcon>
          <Up />
        </ContainerIcon>
        <ContainerLabel>
          <p>6.8s</p>
        </ContainerLabel>
      </ContainerContent>

      <ContainerContent>
        <ContainerIcon>
          <SeilType />
        </ContainerIcon>
        <ContainerLabel>
          <p>Gasolina</p>
        </ContainerLabel>
      </ContainerContent>

      <ContainerContent>
        <ContainerIcon>
          <PowerHorse />
        </ContainerIcon>
        <ContainerLabel>
          <p>Auto</p>
        </ContainerLabel>
      </ContainerContent>

      <ContainerContent>
        <ContainerIcon>
          <Peaple />
        </ContainerIcon>
        <ContainerLabel>
          <p>5 pessoas</p>
        </ContainerLabel>
      </ContainerContent>

      <ContainerContent>
        <ContainerIcon>
          <Exchange  />
        </ContainerIcon>
        <ContainerLabel>
          <p>280 HP</p>
        </ContainerLabel>
      </ContainerContent>
    </Container>
  );
}
