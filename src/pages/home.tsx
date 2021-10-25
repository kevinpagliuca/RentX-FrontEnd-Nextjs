import { GetServerSideProps } from 'next';
import { ProdutCard } from '../components/ProdutCard';
import { getAllProducts, useProducts } from '../hooks/useProducts';
import { AiOutlineReload } from 'react-icons/ai';
import {
  Container,
  TitleContainer,
  ContainerItems,
} from '../styles/pages/homeStyles';
import { Product } from '../hooks/useProducts';
import { Layout } from '../components/Layout';
import { ButtonBase, CircularProgress } from '@material-ui/core';

interface ProdutsCardProps {
  product: Product[];
}

export default function Inicio({ product }: ProdutsCardProps) {
  const { data, isLoading, isFetching, refetch } = useProducts({
    initialData: product,
  });

  return (
    <Layout title="Página Inicial | RentX">
      <Container>
        <TitleContainer>
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
          <p>Total 12 carros</p>
        </TitleContainer>

        <ContainerItems>
          {data?.map((item) => (
            <ProdutCard key={item.id} product={item} />
          ))}
        </ContainerItems>
      </Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const apiServer = setupAPI(ctx);
  // const response = await apiServer.get("products");
  const res = await getAllProducts();

  return {
    props: {
      product: res,
    },
  };
};
