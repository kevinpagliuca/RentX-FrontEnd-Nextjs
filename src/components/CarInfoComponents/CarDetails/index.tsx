import { Container, ContainerIcon, ContainerLabel, ContainerContent } from "./styles";

export default function CarDetails() {
  return (
    <Container>
      <ContainerContent>
        <ContainerIcon>
          <p>icon</p>
        </ContainerIcon>
        <ContainerLabel>
          <p>270km</p>
        </ContainerLabel>
      </ContainerContent>
    </Container>
  );
}
