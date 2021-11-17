import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import Modal, { Styles } from 'react-modal';

import { Button } from 'components/Form/Button';
import { ICars } from 'interfaces/cars';

import { CarsForm } from '../Form';
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
  carDetails: ICars;
}

export const ModalCarEdit = ({
  modalIsOpen,
  onRequestClose,
  carDetails,
}: ModalProps) => {
  const {
    control,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (carDetails) {
      reset(carDetails);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carDetails]);

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
          <h1>Editar usuário</h1>
          <FiX size={32} onClick={onRequestClose} />
        </S.ModalHeader>

        <S.ModalContent>
          <CarsForm control={control} errors={errors} />
          <S.ButtonsContainer>
            <Button onClick={() => null}>Salvar</Button>
          </S.ButtonsContainer>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};
