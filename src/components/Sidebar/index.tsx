import { FiUser } from 'react-icons/fi';
import { RiShieldUserLine } from 'react-icons/ri';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { ButtonBase } from '@material-ui/core';
import { useAuth } from 'contexts/AuthContext';

import { CarIcon, HomeIcon, XLogoIcon } from '../../assets/Icons';
import { ActiveLink } from './ActiveLink';
import * as S from './styles';

export const Sidebar = () => {
  const { asPath } = useRouter();
  const { isAuthenticated, isAdmin } = useAuth();
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
        <ActiveLink
          activeClassName="active"
          href="/filter-cars"
          aditionalClassName={
            asPath.includes('/cars/') ? 'activated' : undefined
          }
        >
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

        {isAdmin && (
          <ActiveLink activeClassName="active" href="/admin">
            <ButtonBase>
              <RiShieldUserLine size={28} />
            </ButtonBase>
          </ActiveLink>
        )}
      </nav>
    </S.SidebarContainer>
  );
};
