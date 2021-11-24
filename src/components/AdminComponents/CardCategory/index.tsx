import React from 'react';
import { FiSettings, FiTrash } from 'react-icons/fi';

import { ICarCategory } from 'interfaces/cars';

import * as S from './styles';

interface CardCategoryProps {
  categoryData: ICarCategory;
  toggleEdit: (category: ICarCategory) => void;
  toggleDelete: (category: ICarCategory) => void;
}

export const CardCategory = ({
  categoryData,
  toggleEdit,
  toggleDelete,
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
        <button onClick={() => toggleEdit(categoryData)}>
          <FiSettings size={24} />
        </button>

        <button>
          <FiTrash size={24} onClick={() => toggleDelete(categoryData)} />
        </button>
      </S.CardButtonsContainer>
    </S.Container>
  );
};
