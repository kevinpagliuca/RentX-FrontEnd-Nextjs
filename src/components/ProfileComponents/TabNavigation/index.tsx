import { ButtonBase } from '@material-ui/core';

import * as S from './styles';

type TabOptions = 'data' | 'changePass';

interface TabNavigationProps {
  activeTab: TabOptions;
  toggleNavigation: (tab: TabOptions) => void;
}

export const TabNavigation = ({
  activeTab,
  toggleNavigation,
}: TabNavigationProps) => {
  return (
    <S.Container>
      <ButtonBase
        className={activeTab === 'data' ? 'active' : undefined}
        onClick={() => toggleNavigation('data')}
      >
        Dados
      </ButtonBase>
      <ButtonBase
        className={activeTab === 'changePass' ? 'active' : undefined}
        onClick={() => toggleNavigation('changePass')}
      >
        Trocar Senha
      </ButtonBase>
    </S.Container>
  );
};
