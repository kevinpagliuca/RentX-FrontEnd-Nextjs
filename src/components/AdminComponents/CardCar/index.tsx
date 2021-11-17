import Image from 'next/image';
import Link from 'next/link';

import { LeafIcon, LightningIcon, WaterIcon } from 'assets/Icons';
import { formatToBRL } from 'helpers/formatToBRL';
import { ICars } from 'interfaces/cars';

import { Container, ContentFooter } from './styles';

interface CardCarProps {
  car: ICars;
}

export const AdminCardCar = ({ car }: CardCarProps) => {
  return (
    <Link href={`/cars/${car.id}`}>
      <Container>
        <header>
          <Image src="/Lambo.png" height={150} width={300} />
        </header>
        <footer>
          <ContentFooter>
            <p>{car.brand}</p>
            <h1>{car.name}</h1>
          </ContentFooter>
          <ContentFooter>
            <p>Ao dia</p>
            <h1 className="rentAmount">{formatToBRL(car.daily_rate)}</h1>
          </ContentFooter>
          <ContentFooter>
            {car.fuel_type === 'Álcool' && <LeafIcon />}
            {car.fuel_type === 'Elétrico' && <LightningIcon />}
            {car.fuel_type === 'Gasolina' && <WaterIcon />}
          </ContentFooter>
        </footer>
      </Container>
    </Link>
  );
};
