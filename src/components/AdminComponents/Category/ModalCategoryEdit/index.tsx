import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import Modal, { Styles } from 'react-modal';
import { toast } from 'react-toastify';

import { Button } from 'components/Form/Button';
import { useGetCategories } from 'hooks/useCategory';
import { CarCategory } from 'interfaces/cars';
import { IUpdateCategoryDTO } from 'interfaces/cars';
import categoryService from 'services/CategoryService';
import { ToastifyCustomMessage } from 'styles/ToastifyCustomMessage';

import { CategoryForm } from '../Form';
import * as S from './styles';

const customStyles: Styles = {
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1100,
    margin: '0 auto',
  },
  overlay: {
    zIndex: 1000,
    background: 'rgba(255, 255, 255, 0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

Modal.setAppElement('#__next');

interface ModalProps {
  modalIsOpen: boolean;
  onRequestClose: () => void;
  categoryDetails: CarCategory;
}

export const ModalCategoryEdit = ({
  modalIsOpen,
  onRequestClose,
  categoryDetails,
}: ModalProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
    reset,
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (categoryDetails) {
      reset({
        name: categoryDetails.name,
        description: categoryDetails.description,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryDetails]);

  const { refetch } = useGetCategories();

  const handleEditCategory: SubmitHandler<IUpdateCategoryDTO> = async (
    values
  ) => {
    try {
      await categoryService.updateCategory(values, categoryDetails.id);
      toast.success(
        ToastifyCustomMessage({ message: 'Atualizado com sucesso!' })
      );
      reset();
      onRequestClose();
      refetch();
    } catch (error) {
      toast.error(ToastifyCustomMessage({ message: error.message }), {
        className: 'customToast_dark',
      });
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick
      style={customStyles}
      bodyOpenClassName="modalOpen"
      className="modalContent"
    >
      <S.ModalContainer>
        <S.ModalHeader>
          <h1>Editar Categoria</h1>
          <FiX size={32} onClick={onRequestClose} />
        </S.ModalHeader>

        <S.ModalContent onSubmit={handleSubmit(handleEditCategory)}>
          <CategoryForm control={control} errors={errors} />
          <S.ButtonsContainer>
            <Button loading={isSubmitting} type="submit">
              Salvar
            </Button>
          </S.ButtonsContainer>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};
