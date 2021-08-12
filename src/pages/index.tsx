import Link from "next/link";
import { LogoIcon } from "../assets/Icons";
import { Button } from "../components/Form/Button";

import { Container, MainContainer, SideContainer,Content } from "../styles/pages/homeStyles";
export default function Home() {
  return (
    <div>
      <Container>
        <Content>
          <SideContainer>
            <LogoIcon />
            <h1>Alugue um carro de maneira simples e fácil</h1>
            <p>Vários modelos para você dirigir seguro, com conforto e segurança.</p>
            <Link href="/inicio" passHref>
              <Button  containerClass="btnStart">Começar agora</Button>
            </Link>
          </SideContainer>
          <MainContainer>
            <img src="/Component.png" />
          </MainContainer>
        </Content>
      </Container>
    </div>
  );
}
