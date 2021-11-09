import { GetStaticPaths, GetStaticProps } from 'next';

import CarDetails from 'components/CarInfoComponents/CarDetails';
import { CarSlider } from 'components/CarInfoComponents/CarSlider';
import { TabNavigaton } from 'components/CarInfoComponents/TabNavigaton';
import { Layout } from 'components/Layout';
import { useGetCarById } from 'hooks/useCars';
import { ICars } from 'interfaces/cars';
import CarsService from 'services/CarsService';
import { nextRedirect } from 'shared/redirect';
import * as S from 'styles/pages/carsStyles';

interface CarInfoProps {
  car: ICars;
  carId: string;
}

export default function CarInfo({ car, carId }: CarInfoProps) {
  const { data } = useGetCarById({
    id: carId,
    options: {
      initialData: car,
    },
  });

  return (
    <Layout
      title="Informações | RentX"
      noHeader
      whiteBackground
      customHeader={data}
    >
      <S.Container>
        <S.ContentContainer>
          <CarSlider />
          <S.CarDetailsContainer>
            <CarDetails details={data} />
            <TabNavigaton details={data} />
          </S.CarDetailsContainer>
        </S.ContentContainer>
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

export const getStaticProps: GetStaticProps = async (ctx) => {
  if (!ctx.params.id) nextRedirect();
  const car = await CarsService.getById(ctx.params.id as string);
  return {
    props: {
      car,
      carId: ctx.params.id,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
