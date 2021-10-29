import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { GetServerSideProps } from 'next';

import { ButtonBase } from '@material-ui/core';
import { CalendarIcon, FilterIcon } from 'assets/Icons';
import { FilterDrawer } from 'components/FilterDrawer';
import { Layout } from 'components/Layout';
import { RentalDateSelectModal } from 'components/Modais/RentalDateSelectModal';
import { ProdutCard } from 'components/ProdutCard';
import { SelectRentalRange } from 'components/SelectRentalRange';
import { useRentalDate } from 'contexts/RentalDateContext';
import { formatUSADateToBRDate } from 'helpers/dates';
import { getAllProducts, Product, useProducts } from 'hooks/useProducts';
import * as S from 'styles/pages/filterCarsStyles';

interface FilterCarsProps {
  product: Product[];
}

export default function FilterCars({ product }: FilterCarsProps) {
  const { isSelected, toggleApply, fromDayDate, toDayDate } = useRentalDate();
  const { data } = useProducts({
    initialData: product,
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isDateRangeModalOpen, setIsDateRangeModalOpen] = useState(false);

  const handleApplyRangeDateModal = () => {
    setIsDateRangeModalOpen(false);
    toggleApply();
  };

  return (
    <Layout title="Filtrar carros | RentX" headerTitle="Filtrar carros">
      <S.Container large={isSelected}>
        <S.TitleContainer>
          <h1>
            {!isSelected
              ? 'Escolha uma data de início e fim do aluguel '
              : `${data?.length} carros encontrados`}
          </h1>
          {isSelected && (
            <S.SearchContainer>
              <div className="inputsContent">
                <span title="De">DE</span>
                <strong>{formatUSADateToBRDate(fromDayDate)}</strong>
              </div>
              <FiChevronRight size={24} color="var(--gray-350)" />
              <div className="inputsContent">
                <span title="Até">ATÉ</span>
                <strong>{formatUSADateToBRDate(toDayDate)}</strong>
              </div>

              <div onClick={() => setIsDateRangeModalOpen(!isFilterOpen)}>
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
          )}
        </S.TitleContainer>
        {!isSelected ? (
          <SelectRentalRange />
        ) : (
          <S.ContainerItems>
            {data?.map((item) => (
              <ProdutCard key={item.id} product={item} />
            ))}
            <RentalDateSelectModal
              modalIsOpen={isDateRangeModalOpen}
              onRequestClose={handleApplyRangeDateModal}
            />
            <FilterDrawer
              open={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
              onOpen={() => setIsFilterOpen(true)}
            />
          </S.ContainerItems>
        )}
      </S.Container>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getAllProducts();

  return {
    props: {
      product: res,
    },
  };
};
