import { Container, ContentFooter } from "./styles";
import { LeafIcon, LightningIcon, WaterIcon } from "../../assets/Icons";
import {formatToBRL} from "../../utils/formatToBRL";
import Image from "next/image";

type Product = {
  src: string;
  name: string;
  brand: string;
  type: string;
  value: number;
};

interface ProdutsCardProps {
  product: Product;
}

export const ProdutCard = ({ product }: ProdutsCardProps) => {
  return (
    <Container>
      <header>
        <Image src={product.src} height={150} width={300}/>
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
          {product.type === "leaf" && <LeafIcon />}
          {product.type === "lightning" && <LightningIcon />}
          {product.type === "water" && <WaterIcon />}
        </ContentFooter>
      </footer>
    </Container>
  );
};

