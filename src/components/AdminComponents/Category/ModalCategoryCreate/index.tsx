import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import Modal, { Styles } from 'react-modal';
import { toast } from 'react-toastify';

import { Button } from 'components/Form/Button';
import { TextArea } from 'components/Form/TextArea';
import { useGetCategories } from 'hooks/useCategory';
import { ICreateCategoryDTO } from 'interfaces/cars';
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
}

export const ModalCategoryCreate = ({
  modalIsOpen,
  onRequestClose,
}: ModalProps) => {
  const {
    control,
    reset,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const { refetch } = useGetCategories();

  const handleCreateCategory: SubmitHandler<ICreateCategoryDTO> = async (
    values
  ) => {
    try {
      await categoryService.createCategory(values);
      toast.success(
        ToastifyCustomMessage({ message: 'Cadastrado com sucesso!' })
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
          <h1>Criar categoria</h1>
          <FiX size={32} onClick={onRequestClose} />
        </S.ModalHeader>

        <S.ModalContent onSubmit={handleSubmit(handleCreateCategory)}>
          <CategoryForm control={control} errors={errors} />
          <S.ButtonsContainer>
            <TextArea />
            <Button loading={isSubmitting} type="submit">
              Cadastrar
            </Button>
          </S.ButtonsContainer>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};
