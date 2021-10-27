import { useEffect, useState } from 'react';
import { FiUser } from 'react-icons/fi';

import { ButtonBase } from '@material-ui/core';
import { useAuth } from 'contexts/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { CarIcon, HomeIcon, XLogoIcon } from '../../assets/Icons';
import { ActiveLink } from './ActiveLink';
import * as S from './styles';

export const Sidebar = () => {
  const { asPath } = useRouter();
  const { isAuthenticated } = useAuth();
  const userPaths = ['/auth', '/register', '/profile'];

  return (
    <S.SidebarContainer>
      <Link href="/" passHref>
        <ButtonBase className="buttonLink">
          <XLogoIcon />
        </ButtonBase>
      </Link>
      <nav>
        <ActiveLink activeClassName="active" href="/home">
          <ButtonBase>
            <HomeIcon />
          </ButtonBase>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/filter-cars">
          <ButtonBase>
            <CarIcon />
          </ButtonBase>
        </ActiveLink>
        <ActiveLink
          activeClassName="active"
          aditionalClassName={
            userPaths.includes(asPath) ? 'activated' : undefined
          }
          href={isAuthenticated ? '/profile' : '/auth'}
        >
          <ButtonBase>
            <FiUser size={24} />
          </ButtonBase>
        </ActiveLink>
      </nav>
    </S.SidebarContainer>
  );
};
