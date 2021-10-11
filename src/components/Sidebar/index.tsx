import { ButtonBase } from '@material-ui/core';
import { FiUser } from 'react-icons/fi';
import { CarIcon, HomeIcon } from '../../assets/Icons';
import { ActiveLink } from './ActiveLink';
import Link from 'next/link';
import { XLogoIcon } from '../../assets/Icons';

import { SidebarContainer } from './styles';

export const Sidebar = () => {
  return (
    <SidebarContainer>
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
        <ActiveLink activeClassName="active" href="/auth">
          <ButtonBase>
            <FiUser size={24} />
          </ButtonBase>
        </ActiveLink>
      </nav>
    </SidebarContainer>
  );
};
