import { FiArrowLeft, FiGrid, FiHome, FiUsers } from 'react-icons/fi';
import { RiCarFill } from 'react-icons/ri';

import Link from 'next/link';

import { LogoIcon } from 'assets/Icons';

import { ActiveLink } from './ActiveLink';
import * as S from './styles';
export const AdminSidebar = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <LogoIcon />
      </S.HeaderContainer>
      <S.Divisor />

      <S.ContentContainer>
        <ActiveLink href="/admin" activeClassName="active" shouldMatchExactHref>
          <S.MenuItem>
            <span>
              <FiHome size={26} />
            </span>
            <strong>Dashboard</strong>
          </S.MenuItem>
        </ActiveLink>

        <ActiveLink href="/admin/users" activeClassName="active">
          <S.MenuItem>
            <span>
              <FiUsers size={26} />
            </span>
            <strong>Usuários</strong>
          </S.MenuItem>
        </ActiveLink>

        <ActiveLink href="/admin/cars" activeClassName="active">
          <S.MenuItem>
            <span>
              <RiCarFill size={26} />
            </span>
            <strong>Carros</strong>
          </S.MenuItem>
        </ActiveLink>

        <ActiveLink href="/admin/categories" activeClassName="active">
          <S.MenuItem>
            <span>
              <FiGrid size={26} />
            </span>
            <strong>Categorias</strong>
          </S.MenuItem>
        </ActiveLink>

        <Link href="/home">
          <S.BackButton>
            <span>
              <FiArrowLeft size={26} />
            </span>
            <strong>Voltar</strong>
          </S.BackButton>
        </Link>
      </S.ContentContainer>
    </S.Container>
  );
};
