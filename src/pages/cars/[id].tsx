import { Container, Aside, Main, Content, Header, HeaderContent } from "../../styles/pages/carsStyles";
import CarDetails from "../../components/CarInfoComponents/CarDetails";
import { CarSlider } from "../../components/CarInfoComponents/CarSlider";
import { FaChevronLeft } from "react-icons/fa";



import { Layout } from "../../components/Layout";

export default function CarInfo() {
  return (
    <Layout title="Informações | RentX" noHeader>
      <Container>
        <Header>
          <HeaderContent>
            <div>
              <FaChevronLeft size={25} color="#47474D" />
            </div>
            <div>
              <p>
                Audi
              </p>
              <h1>
                Q3 Baita Foda
              </h1>
            </div>
            <div>
              <p>
                Ao dia
              </p>
              <h1>
                R$ 120
              </h1>
            </div>
          </HeaderContent>
        </Header>
        <Content>
          <Main>
            <CarSlider />
          </Main>
          <Aside>
            <h1>teste</h1>
            <CarDetails />
          </Aside>
        </Content>
      </Container>
    </Layout>
  );
}


