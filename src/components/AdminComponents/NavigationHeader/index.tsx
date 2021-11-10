import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { ButtonBase } from '@material-ui/core';

import { ActiveLink } from './ActiveLink';
import { linksValues } from './linksValues';
import * as S from './styles';

export const NavigationHeader = () => {
  const { asPath } = useRouter();
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    asPath === '/admin' && setTranslateX(0);
    asPath === '/admin?cars' && setTranslateX(100);
    asPath === '/admin?categories' && setTranslateX(200);
  }, [asPath]);

  return (
    <S.Container>
      <S.ContentContainer translateX={translateX}>
        {linksValues.map(({ Icon, ...link }) => (
          <ActiveLink
            key={link.id}
            activeClassName={link.activeClassName}
            href={link.link}
            shouldMatchExactHref={link.shouldMatchExactHref}
          >
            <ButtonBase>
              <Icon size={link.iconSize} />
              {link.name}
            </ButtonBase>
          </ActiveLink>
        ))}
      </S.ContentContainer>
    </S.Container>
  );
};
