import React from 'react';
import { FiX } from 'react-icons/fi';
import Modal, { Styles } from 'react-modal';
import { toast } from 'react-toastify';

import { Button } from 'components/Form/Button';
import { IUser } from 'interfaces/auth';
import { usersService } from 'services/UsersService';
import { ToastifyCustomMessage } from 'styles/ToastifyCustomMessage';

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
  userDetails: IUser;
}

export const ModalUserDelete = ({
  modalIsOpen,
  onRequestClose,
  userDetails,
}: ModalProps) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await usersService.delete(userDetails.id);
      toast.success(
        ToastifyCustomMessage({
          message: 'Usuário deletado com sucesso!',
        })
      );
      onRequestClose();
    } catch (error) {
      toast.error(
        ToastifyCustomMessage({
          message: 'Falha ao deletar usuário',
        })
      );
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
            Você realmente deseja deletar o usuário{' '}
            <span>{userDetails?.name}</span> ?
          </h1>
          <FiX size={32} onClick={onRequestClose} />
        </S.ModalHeader>

        <S.ModalContent>
          <S.ButtonsContainer>
            <Button
              type="submit"
              variant="green"
              loading={isLoading}
              onClick={handleDelete}
            >
              Sim
            </Button>
            <Button type="submit" loading={isLoading} onClick={onRequestClose}>
              Não
            </Button>
          </S.ButtonsContainer>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};
