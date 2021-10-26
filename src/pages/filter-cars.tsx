import { Layout } from 'components/Layout';
import { SelectRentalRange } from 'components/SelectRentalRange';
import { useState } from 'react';

import * as S from 'styles/pages/filterCarsStyles';

export default function FilterCars() {
  const [step, setStep] = useState(0);
  return (
    <Layout title="Filtrar carros | RentX" headerTitle="Filtrar carros">
      <S.Container>
        <S.Title>
          {step === 0
            ? 'Escolha uma data de início e fim do aluguel '
            : '3 carros encontrados'}
        </S.Title>
        <SelectRentalRange />
      </S.Container>
    </Layout>
  );
}
