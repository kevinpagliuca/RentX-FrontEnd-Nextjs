import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';
import Modal, { Styles } from 'react-modal';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Button } from 'components/Form/Button';
import { IUserSignUpRequestDTO } from 'interfaces/auth';
import AuthService from 'services/AuthService';
import { registerFormSchema } from 'shared/validators';
import { ToastifyCustomMessage } from 'styles/ToastifyCustomMessage';

import { UsersForm } from '../Form';
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
}

export const ModalUserCreate = ({
  modalIsOpen,
  onRequestClose,
}: ModalProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  const handleCreateUser: SubmitHandler<IUserSignUpRequestDTO> = async (
    data
  ) => {
    try {
      await AuthService.signUp(data);
      toast.success(
        ToastifyCustomMessage({
          message: 'Usuário criado com sucesso!',
        })
      );
    } catch (error) {
      toast.error(
        ToastifyCustomMessage({
          message: 'Falha ao cadastrar usuário',
        })
      );
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
          <h1>Criar usuário</h1>
          <FiX size={32} onClick={onRequestClose} />
        </S.ModalHeader>

        <S.ModalContent onSubmit={handleSubmit(handleCreateUser)}>
          <UsersForm control={control} errors={errors} />
          <S.ButtonsContainer>
            <Button type="submit" loading={isSubmitting}>
              Cadastrar
            </Button>
          </S.ButtonsContainer>
        </S.ModalContent>
      </S.ModalContainer>
    </Modal>
  );
};
