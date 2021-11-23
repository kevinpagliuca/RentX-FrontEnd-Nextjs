import React from 'react';
import { FiSettings, FiTrash } from 'react-icons/fi';

import { CarCategory } from 'interfaces/cars';

import * as S from './styles';

interface CardCategoryProps {
  categoryData: CarCategory;
  toggleModal: (category: CarCategory) => void;
}

export const CardCategory = ({
  categoryData,
  toggleModal,
}: CardCategoryProps) => {
  return (
    <S.Container>
      <S.CardContent>
        <S.CardInfoContainer>
          <strong>Nome</strong>
          <span>{categoryData.name}</span>
        </S.CardInfoContainer>

        <S.CardInfoContainer>
          <strong>Descrição</strong>
          <span>{categoryData.description}</span>
        </S.CardInfoContainer>
      </S.CardContent>

      <S.CardButtonsContainer>
        <button onClick={() => toggleModal(categoryData)}>
          <FiSettings size={24} />
        </button>

        <button>
          <FiTrash size={24} />
        </button>
      </S.CardButtonsContainer>
    </S.Container>
  );
};
