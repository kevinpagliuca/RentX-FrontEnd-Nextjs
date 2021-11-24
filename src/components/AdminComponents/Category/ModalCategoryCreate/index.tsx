import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import Modal, { Styles } from 'react-modal';

import { Button } from 'components/Form/Button';
import { useCreateCategory } from 'hooks/useCategory';
import { ICreateCategoryDTO } from 'interfaces/cars';

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

  const { mutateAsync } = useCreateCategory();

  const handleCreateCategory: SubmitHandler<ICreateCategoryDTO> = async (
    data
  ) => {
    try {
      await mutateAsync(data);
      reset();
      onRequestClose();
    } catch (error) {
      return;
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
            <Button
              loading={isSubmitting}
              type="submit"
              containerClass="buttonContainer"
            >
              Cadastrar
            </Button>
          </S.ButtonsContainer>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};
