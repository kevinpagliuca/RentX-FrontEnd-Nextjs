import { useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';

import { GetServerSideProps } from 'next';

import { ButtonBase, CircularProgress } from '@material-ui/core';
import { FilterDrawer } from 'components/FilterDrawer';
import * as S from 'styles/pages/homeStyles';

import { Layout } from '../components/Layout';
import { ProdutCard } from '../components/ProdutCard';
import { Product } from '../hooks/useProducts';
import { getAllProducts, useProducts } from '../hooks/useProducts';

interface ProdutsCardProps {
  product: Product[];
}

export default function Home({ product }: ProdutsCardProps) {
  const { data, isLoading, isFetching, refetch } = useProducts({
    initialData: product,
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
            <ButtonBase centerRipple>
              {!isFetching ? (
                <AiOutlineReload size={24} />
              ) : (
                <CircularProgress color="inherit" size={24} />
              )}
            </ButtonBase>
          </h1>
        </S.TitleContainer>

        <S.ContainerItems>
          {data?.map((item) => (
            <ProdutCard key={item.id} product={item} />
          ))}
        </S.ContainerItems>
      </S.Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = await getAllProducts();

  return {
    props: {
      product: res,
    },
  };
};
