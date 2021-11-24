import React, { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import Modal, { Styles } from 'react-modal';
import { toast } from 'react-toastify';

import { Button } from 'components/Form/Button';
import { useUpdateCar } from 'hooks/useCars';
import { ICars } from 'interfaces/cars';
import { ToastifyCustomMessage } from 'styles/ToastifyCustomMessage';

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
    handleSubmit,
  } = useForm();

  useEffect(() => {
    carDetails && reset(carDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carDetails]);

  const { mutateAsync } = useUpdateCar();

  const handleUpdateCar: SubmitHandler<ICars> = async (data) => {
    try {
      await mutateAsync({ id: carDetails.id, payload: data });
      onRequestClose();
    } catch (error) {
      toast.error(ToastifyCustomMessage({ message: 'Erro ao editar carro.' }));
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
          <h1>
            Editando carro: <span>{carDetails?.name}</span>
          </h1>
          <FiX size={32} onClick={onRequestClose} />
        </S.ModalHeader>

        <S.ModalContent onSubmit={handleSubmit(handleUpdateCar)}>
          <CarsForm control={control} errors={errors} />
          <S.ButtonsContainer>
            <Button type="submit">Salvar</Button>
          </S.ButtonsContainer>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};
