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
  ContentText,
} from "../../styles/pages/carsStyles";
import { DatePickerModal } from "../../components/Modais/DatePicker";
import { ButtonBase } from "@material-ui/core";
import { Button } from "../../components/Form/Button";
import { useState } from "react";

export default function CarInfo() {
  const { back } = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"aboultCar" | "period">("aboultCar");

  function toggleNavigation(tab: "aboultCar" | "period") {
    setActiveTab(tab);
  }

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
              <ButtonBase
                className={activeTab === "aboultCar" ? "active" : undefined}
                onClick={() => toggleNavigation("aboultCar")}
              >
                SOBRE O CARRO
              </ButtonBase>
              <ButtonBase
                className={activeTab === "period" ? "active" : undefined}
                onClick={() => toggleNavigation("period")}
              >
                PERÍODO
              </ButtonBase>
            </NavigationContainer>
            {activeTab === "aboultCar" && (
              <ContentText>
                <p>
                  Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça
                  Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </p>
              </ContentText>
            )}
            {activeTab === "period" && (
              <ContentText>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores sunt repudiandae
                  ad, vitae eligendi quae dolores labore itaque odio necessitatibus voluptatem
                  tenetur porro reiciendis corporis. Repellat tempora quaerat quisquam. Illum.
                </p>
              </ContentText>
            )}

            <Button onClick={() => setIsModalOpen(!isModalOpen)} containerClass="buttonRent">Escolher período do aluguel</Button>
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
