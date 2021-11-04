import { useState } from 'react';
import { FiRefreshCw } from 'react-icons/fi';

import { GetServerSideProps } from 'next';

import { ButtonBase, CircularProgress } from '@material-ui/core';
import { FilterDrawer } from 'components/FilterDrawer';
import { useGetAvailableCars } from 'hooks/useCars';
import { RGetAllCars } from 'interfaces/cars';
import CarsService from 'services/CarsService';
import * as S from 'styles/pages/homeStyles';

import { CardCar } from '../components/CardCar';
import { Layout } from '../components/Layout';

interface ProdutsCardProps {
  cars: RGetAllCars;
}

export default function Home({ cars }: ProdutsCardProps) {
  const { data, refetch, isFetching } = useGetAvailableCars({
    initialData: cars,
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <Layout title="Página Inicial | RentX">
      <FilterDrawer
        open={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onOpen={() => setIsFilterOpen(true)}
      />
      <S.Container>
        <S.TitleContainer>
          <h1>
            Carros disponíveis
            <ButtonBase centerRipple onClick={() => refetch()}>
              {!isFetching ? (
                <FiRefreshCw size={24} />
              ) : (
                // <CircularProgress color="inherit" size={24} />
                <CircularProgress color="inherit" size={24} />
              )}
            </ButtonBase>
          </h1>
        </S.TitleContainer>

        <S.ContainerItems>
          {data?.cars.map((item) => (
            <CardCar key={item.id} car={item} />
          ))}
        </S.ContainerItems>
      </S.Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const cars = await CarsService.getAll();

  return {
    props: {
      cars,
    },
  };
};
