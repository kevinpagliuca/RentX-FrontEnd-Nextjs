import CarDetails from "../../components/CarInfoComponents/CarDetails";
import { CarSlider } from "../../components/CarInfoComponents/CarSlider";
import { useRouter } from "next/router";
import { FaChevronLeft } from "react-icons/fa";
import { Layout } from "../../components/Layout";
import {
  Container,
  Aside,
  Content,
  Header,
  HeaderContent,
  NavigationContainer,
} from "../../styles/pages/carsStyles";
import { DatePickerModal } from "../../components/Modais/DatePicker";
import { ButtonBase } from "@material-ui/core";
import { Button } from "../../components/Form/Button";
import { useState } from "react";

export default function CarInfo() {
  const { back } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <Layout title="Informações | RentX" noHeader>
      <Container>
        <Header>
          <HeaderContent>
            <FaChevronLeft onClick={back} size={25} color="#47474D" />
            <div className="titleName">
              <p>Audi</p>
              <h1>Q3 Baita Foda</h1>
            </div>
            <div className="titleValue">
              <p>Ao dia</p>
              <h1 className="titleValueRed">R$ 120</h1>
            </div>
          </HeaderContent>
        </Header>
        <Content>
          <CarSlider />
          <Aside>
            <CarDetails />
            <NavigationContainer>
              <ButtonBase className="active"> Dados</ButtonBase>
              <ButtonBase className=""> Trocar Senha</ButtonBase>
            </NavigationContainer>
            <Button containerClass="buttonRent">Escolher período do aluguel</Button>
          </Aside>
        </Content>
      </Container>
      <DatePickerModal
        modalIsOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(!isModalOpen)}
      />
    </Layout>
  );
}
