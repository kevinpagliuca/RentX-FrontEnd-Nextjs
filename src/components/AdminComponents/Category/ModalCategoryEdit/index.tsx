import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import Modal, { Styles } from 'react-modal';

import { Button } from 'components/Form/Button';
import { CarCategory } from 'interfaces/cars';

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
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (categoryDetails) {
      reset({
        name: categoryDetails.name,
        email: categoryDetails.description,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryDetails]);

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

        <S.ModalContent>
          <CategoryForm control={control} errors={errors} />
          <S.ButtonsContainer>
            <Button onClick={() => null}>Salvar</Button>
          </S.ButtonsContainer>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};
