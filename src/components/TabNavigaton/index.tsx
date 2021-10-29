import { useState } from 'react';

import { ButtonBase } from '@material-ui/core';
import { Button } from 'components/Form/Button';

import * as S from './styles';

export const TabNavigaton = () => {
  const [activeTab, setActiveTab] = useState<'about' | 'period'>('about');

  function toggleNavigation(tab: 'about' | 'period') {
    setActiveTab(tab);
  }

  return (
    <>
      <S.NavigationContainer>
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

      {activeTab === 'about' && (
        <S.ContentText>
          <p>
            Este é automóvel desportivo. Surgiu do lendário touro de lide
            indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
            para quem gosta de acelerar.
          </p>
        </S.ContentText>
      )}

      {activeTab === 'period' && (
        <S.ContentText>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
            sunt repudiandae ad, vitae eligendi quae dolores labore itaque odio
            necessitatibus voluptatem tenetur porro reiciendis corporis.
            Repellat tempora quaerat quisquam. Illum.
          </p>
        </S.ContentText>
      )}

      <Button
        // onClick={() => setIsModalOpen(!isModalOpen)}
        containerClass="buttonRent"
      >
        Escolher período do aluguel
      </Button>
    </>
  );
};
