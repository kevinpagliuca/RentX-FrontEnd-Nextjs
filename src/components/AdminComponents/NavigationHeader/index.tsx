import { Dispatch, memo, SetStateAction, useEffect, useState } from 'react';

import { ButtonBase } from '@material-ui/core';

import { linksValues } from './linksValues';
import * as S from './styles';

interface NavigationHeaderProps {
  tabActive: 'cars' | 'categories' | undefined;
  setTabActive: Dispatch<SetStateAction<'cars' | 'categories' | undefined>>;
}

const NavigationHeaderBase = ({
  tabActive,
  setTabActive,
}: NavigationHeaderProps) => {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    !tabActive && setTranslateX(0);
    tabActive === 'cars' && setTranslateX(100);
    tabActive === 'categories' && setTranslateX(200);
  }, [tabActive]);

  return (
    <S.Container>
      <S.ContentContainer translateX={translateX}>
        {linksValues.map(({ Icon, ...link }) => (
          <ButtonBase
            key={link.id}
            onClick={() => setTabActive(link.tab)}
            className={tabActive === link.tab ? 'active' : undefined}
          >
            <Icon size={link.iconSize} />
            {link.name}
          </ButtonBase>
        ))}
      </S.ContentContainer>
    </S.Container>
  );
};

export const NavigationHeader = memo(NavigationHeaderBase);
