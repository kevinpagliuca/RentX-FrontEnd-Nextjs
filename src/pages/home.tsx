import { useState } from 'react';
import { AiOutlineReload } from 'react-icons/ai';
import { FiChevronRight } from 'react-icons/fi';

import { ButtonBase, CircularProgress } from '@material-ui/core';
import { CalendarIcon, FilterIcon } from 'assets/Icons';
import { FilterDrawer } from 'components/FilterDrawer';
import { GetServerSideProps } from 'next';

import { Layout } from '../components/Layout';
import { ProdutCard } from '../components/ProdutCard';
import { Product } from '../hooks/useProducts';
import { getAllProducts, useProducts } from '../hooks/useProducts';
import * as S from '../styles/pages/homeStyles';

interface ProdutsCardProps {
  product: Product[];
}

export default function Inicio({ product }: ProdutsCardProps) {
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
          <S.SearchContainer>
            <div className="inputsContent">
              <span title="De">DE</span>
              {/* {fromDayText ? <strong>{fromDayText}</strong> : <div />} */}
              <strong> 21/21/2222</strong>
            </div>
            <FiChevronRight size={20} color="var(--gray-350)" />
            <div className="inputsContent">
              <span title="Até">ATÉ</span>
              <strong> 21/21/2222</strong>
              {/* {toDayText ? <strong>{toDayText}</strong> : <div />} */}
            </div>

            <div>
              <ButtonBase>
                <CalendarIcon />
              </ButtonBase>
            </div>
            <div onClick={() => setIsFilterOpen(!isFilterOpen)}>
              <ButtonBase>
                <FilterIcon />
              </ButtonBase>
            </div>
          </S.SearchContainer>
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
