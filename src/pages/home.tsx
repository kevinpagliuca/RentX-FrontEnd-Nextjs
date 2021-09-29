import { GetServerSideProps } from 'next';
import { ProdutCard } from '../components/ProdutCard';
import { getAllProducts, useProducts } from '../hooks/useProducts';
import {
  Container,
  TitleContainer,
  ContainerItems,
} from '../styles/pages/homeStyles';
import { Product } from '../hooks/useProducts';
import { Layout } from '../components/Layout';

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
          {isFetching && 'LOADING'}
          <h1>Carros disponíveis</h1>
          <p>Total 12 carros</p>
        </TitleContainer>

        <ContainerItems>
          {data?.map((item) => (
            <ProdutCard product={item} />
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
