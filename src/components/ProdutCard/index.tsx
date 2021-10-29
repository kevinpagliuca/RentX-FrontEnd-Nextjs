import Image from 'next/image';
import Link from 'next/link';

import { LeafIcon, LightningIcon, WaterIcon } from 'assets/Icons';
import { formatToBRL } from 'helpers/formatToBRL';
import { Product } from 'hooks/useProducts';

import { Container, ContentFooter } from './styles';

interface ProdutsCardProps {
  product: Product;
}

export const ProdutCard = ({ product }: ProdutsCardProps) => {
  return (
    <Link href={`/cars/${product.id}`}>
      <Container>
        <header>
          <Image src={product.src} height={150} width={300} />
        </header>
        <footer>
          <ContentFooter>
            <p>{product.brand}</p>
            <h1>{product.name}</h1>
          </ContentFooter>
          <ContentFooter>
            <p>Ao dia</p>
            <h1 className="rentAmount">{formatToBRL(product.value)}</h1>
          </ContentFooter>
          <ContentFooter>
            {product.type === 'leaf' && <LeafIcon />}
            {product.type === 'lightning' && <LightningIcon />}
            {product.type === 'water' && <WaterIcon />}
          </ContentFooter>
        </footer>
      </Container>
    </Link>
  );
};
