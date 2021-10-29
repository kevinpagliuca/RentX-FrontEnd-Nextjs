import Avatar from 'react-avatar';
import { FiUser } from 'react-icons/fi';

import Link from 'next/link';

import { ButtonBase } from '@material-ui/core';
import { CustomHeader } from 'components/CarInfoComponents/CustomHeader';

import { useAuth } from '../../contexts/AuthContext';
import * as S from './styles';

interface HeaderProps {
  headerTitle?: string;
  custom?: boolean;
}

export const Header = ({ headerTitle, custom }: HeaderProps) => {
  const { isAuthenticated, user, signOut } = useAuth();
  async function handleLogout() {
    await signOut();
  }
  return (
    <S.HeaderContainer>
      {!custom ? (
        <S.HeaderContent>
          <h1>{headerTitle || 'Início'}</h1>
          {!isAuthenticated ? (
            <Link href="/auth">
              <a className="signInTxt">
                Faça Login
                <ButtonBase>
                  <FiUser />
                </ButtonBase>
              </a>
            </Link>
          ) : (
            <div className="userHeaderContainer">
              <Link href="/profile">
                <a className="userName">{user?.name}</a>
              </Link>
              <button onClick={handleLogout}>Sair</button>
              <Avatar
                name={user?.name}
                round={true}
                size="48"
                className="userTxt"
                color="var(--main)"
              />
            </div>
          )}
        </S.HeaderContent>
      ) : (
        <S.HeaderContent custom>
          <CustomHeader />
        </S.HeaderContent>
      )}
    </S.HeaderContainer>
  );
};
