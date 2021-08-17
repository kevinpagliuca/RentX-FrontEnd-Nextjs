import Image from "next/image";
import { Container, Aside, Main } from "../../styles/pages/carsStyles";
import CarDetails from "../../components/CarInfoComponents/CarDetails";

import { Layout } from "../../components/Layout";

export default function CarInfo() {
  return (
    <Layout title="Informações | RentX" noHeader>
      <Container>
        <Main>
          <Image
            src="https://i.ibb.co/LSSm8RW/Audi.png"
            height={723}
            width={848}
            objectFit="cover"
          />
        </Main>
        <Aside>
          <h1>teste</h1>
          <CarDetails />
        </Aside>
      </Container>
    </Layout>
  );
}
