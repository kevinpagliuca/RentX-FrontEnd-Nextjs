import { GetStaticPaths, GetStaticProps } from 'next';

import CarDetails from 'components/CarInfoComponents/CarDetails';
import { CarSlider } from 'components/CarInfoComponents/CarSlider';
import { Layout } from 'components/Layout';
import { TabNavigaton } from 'components/TabNavigaton';
import * as S from 'styles/pages/carsStyles';

export default function CarInfo() {
  return (
    <Layout title="Informações | RentX" noHeader whiteBackground customHeader>
      <S.Container>
        <S.Content>
          <CarSlider />
          <S.Aside>
            <CarDetails />
            <TabNavigaton />
          </S.Aside>
        </S.Content>
      </S.Container>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 4, // 4 hours
  };
};
