import router from 'next/router';
import React from 'react';

import { ButtonBase, Grow } from '@material-ui/core';
import Modal, { Styles } from 'react-modal';

import { GreenCheckIcon } from '../../../assets/Icons';

import { ModalContent } from './styles';

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
    background: 'rgba(0, 0, 0, 0.4)',
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

export const AccountCreateModal = ({
  modalIsOpen,
  onRequestClose,
}: ModalProps) => {
  function toggleOk() {
    onRequestClose();
    // router.push('/auth');
  }
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick
      style={customStyles}
      bodyOpenClassName="modalOpen"
      className="modalContent"
    >
      <ModalContent>
        <GreenCheckIcon />
        <h1>Conta Criada</h1>
        <p>
          Agora você parte da RentX. <br />
          Faça seu login e comece a aproveitar.
        </p>

        <ButtonBase onClick={toggleOk}>Ok</ButtonBase>
      </ModalContent>
    </Modal>
  );
};
