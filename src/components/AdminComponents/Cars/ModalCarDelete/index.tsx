import React from 'react';
import { FiX } from 'react-icons/fi';
import Modal, { Styles } from 'react-modal';

import { Button } from 'components/Form/Button';
import { useDeleteCar } from 'hooks/useCars';
import { ICars } from 'interfaces/cars';

import * as S from './styles';

const customStyles: Styles = {
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1100,
    margin: '0 auto',
    maxHeight: 'calc(100% - 4rem)',
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

export const ModalCarDelete = ({
  modalIsOpen,
  onRequestClose,
  carDetails,
}: ModalProps) => {
  const [isLoading, setIsLoading] = React.useState(false);

  const { mutateAsync } = useDeleteCar();

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await mutateAsync(carDetails.id);
      onRequestClose();
    } catch (error) {
      return;
    } finally {
      setIsLoading(false);
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
            Você realmente deseja deletar o carro{' '}
            <span>{carDetails?.name}</span> ?
          </h1>
          <FiX size={32} onClick={onRequestClose} />
        </S.ModalHeader>

        <S.ModalContent>
          <S.ButtonsContainer>
            <Button
              type="button"
              variant="green"
              loading={isLoading}
              onClick={handleDelete}
            >
              Sim
            </Button>
            <Button type="button" loading={isLoading} onClick={onRequestClose}>
              Não
            </Button>
          </S.ButtonsContainer>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};
