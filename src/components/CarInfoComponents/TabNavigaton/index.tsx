import React, { useEffect, useRef, useState } from 'react';

import { ButtonBase } from '@material-ui/core';
import { Button } from 'components/Form/Button';
import { useRentalDate } from 'contexts/RentalDateContext';
import { ICars } from 'interfaces/cars';

import { PeriodTab } from './PeriodTab';
import * as S from './styles';

interface TabNavigatonProps {
  details: ICars;
}

export const TabNavigaton = ({ details }: TabNavigatonProps) => {
  const [activeTab, setActiveTab] = useState<'about' | 'period'>('about');
  const [tabHeight, setTabHeight] = useState(0);
  const { fromDayDate, toDayDate } = useRentalDate();
  const tabRef = useRef<HTMLDivElement>(null);

  function toggleNavigation(tab: 'about' | 'period') {
    setActiveTab(tab);
  }

  useEffect(() => {
    setTabHeight(tabRef.current?.clientHeight);
  }, [activeTab]);

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

      <S.TabsContent ref={tabRef} height={tabHeight}>
        <div className={activeTab === 'about' ? 'show' : 'hide'}>
          <p>{details?.description || 'Nenhuma informação'}</p>
        </div>
        <div className={activeTab === 'period' ? 'show' : 'hide'}>
          <PeriodTab details={details} />
        </div>
      </S.TabsContent>

      <Button
        // onClick={() => setIsModalOpen(!isModalOpen)}
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
