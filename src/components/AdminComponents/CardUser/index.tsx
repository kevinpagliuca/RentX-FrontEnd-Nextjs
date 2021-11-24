import React from 'react';
import Avatar from 'react-avatar';
import { FiSettings, FiTrash } from 'react-icons/fi';

import { IUser } from 'interfaces/auth';

import * as S from './styles';

interface CardUserProps {
  userData: IUser;
  toggleModal: (user: IUser) => void;
  handleDeleteUserModal: (user: IUser) => void;
}

export const CardUser = ({
  userData,
  toggleModal,
  handleDeleteUserModal,
}: CardUserProps) => {
  return (
    <S.Container>
      <S.AvatarContainer>
        <Avatar
          email={userData.email}
          name={userData.name}
          round
          size="54"
          alt={`Avatar de ${userData.name}`}
        />
      </S.AvatarContainer>

      <S.CardContent>
        <S.CardInfoContainer>
          <strong>Nome</strong>
          <span>{userData.name}</span>
        </S.CardInfoContainer>

        <S.CardInfoContainer>
          <strong>E-mail</strong>
          <span>{userData.email}</span>
        </S.CardInfoContainer>

        <S.CardInfoContainer>
          <strong>Nome de usuário</strong>
          <span>{userData.username}</span>
        </S.CardInfoContainer>

        <S.CardInfoContainer>
          <strong>CNH</strong>
          <span>{userData.driver_license}</span>
        </S.CardInfoContainer>
      </S.CardContent>

      <S.CardButtonsContainer>
        <button onClick={() => toggleModal(userData)}>
          <FiSettings size={24} />
        </button>

        <button onClick={() => handleDeleteUserModal(userData)}>
          <FiTrash size={24} />
        </button>
      </S.CardButtonsContainer>
    </S.Container>
  );
};
