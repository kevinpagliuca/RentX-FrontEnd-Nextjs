import React, { useCallback, useState } from 'react';

import { ButtonBase } from '@material-ui/core';
import { Button } from 'components/Form/Button';
import { RentalDateSelectModal } from 'components/Modais/RentalDateSelectModal';
import { useRentalDate } from 'contexts/RentalDateContext';
import { ICars } from 'interfaces/cars';

import { PeriodTab } from './PeriodTab';
import * as S from './styles';

interface TabNavigatonProps {
  details: ICars;
}

export const TabNavigaton = ({ details }: TabNavigatonProps) => {
  const [activeTab, setActiveTab] = useState<'about' | 'period'>('about');
  const { fromDayDate, toDayDate } = useRentalDate();
  const [isDateRangeModalOpen, setIsDateRangeModalOpen] = useState(false);

  function toggleNavigation(tab: 'about' | 'period') {
    setActiveTab(tab);
  }

  const handleOpenModal = useCallback(() => {
    setIsDateRangeModalOpen(true);
  }, []);

  return (
    <React.Fragment>
      <S.NavigationContainer activeTab={activeTab}>
        <ButtonBase
          className={activeTab === 'about' ? 'active' : undefined}
          onClick={() => toggleNavigation('about')}
        >
          SOBRE O CARRO
        </ButtonBase>
        <ButtonBase
          className={activeTab === 'period' ? 'active' : undefined}
          onClick={() => toggleNavigation('period')}
        >
          PERÍODO
        </ButtonBase>
      </S.NavigationContainer>

      <S.TabsContent>
        <div className={activeTab === 'about' ? 'show' : 'hide'}>
          <p>{details?.description || 'Nenhuma informação'}</p>
        </div>
        <div className={activeTab === 'period' ? 'show period' : 'hide period'}>
          <PeriodTab details={details} openDateRangeModal={handleOpenModal} />
        </div>
      </S.TabsContent>

      <RentalDateSelectModal
        modalIsOpen={isDateRangeModalOpen}
        onRequestClose={() => setIsDateRangeModalOpen(false)}
      />

      <Button
        onClick={!fromDayDate && !toDayDate ? handleOpenModal : () => null}
        containerClass="buttonRent"
        variant={fromDayDate && toDayDate ? 'green' : 'red'}
      >
        {fromDayDate && toDayDate
          ? 'Alugar agora'
          : 'Escolher período do aluguel'}
      </Button>
    </React.Fragment>
  );
};
