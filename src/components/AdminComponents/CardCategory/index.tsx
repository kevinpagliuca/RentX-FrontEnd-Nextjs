import React from 'react';
import { FiSettings, FiTrash } from 'react-icons/fi';
import { toast } from 'react-toastify';

import { useGetCategories } from 'hooks/useCategory';
import { CarCategory } from 'interfaces/cars';
import categoryService from 'services/CategoryService';
import { ToastifyCustomMessage } from 'styles/ToastifyCustomMessage';

import * as S from './styles';

interface CardCategoryProps {
  categoryData: CarCategory;
  toggleModal: (category: CarCategory) => void;
}

export const CardCategory = ({
  categoryData,
  toggleModal,
}: CardCategoryProps) => {
  const { refetch } = useGetCategories();

  const handleDeleteCategory = async (id: string) => {
    try {
      await categoryService.deleteCategory(id);
      toast.success(
        ToastifyCustomMessage({ message: 'Deletado com sucesso!' })
      );
      refetch();
    } catch (error) {
      toast.error(ToastifyCustomMessage({ message: error.message }), {
        className: 'customToast_dark',
      });
    }
  };

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
          <FiTrash
            size={24}
            onClick={() => handleDeleteCategory(categoryData.id)}
          />
        </button>
      </S.CardButtonsContainer>
    </S.Container>
  );
};
