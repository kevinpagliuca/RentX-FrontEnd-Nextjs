import React from 'react';

import { ButtonBase } from '@material-ui/core';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

import { FiX } from 'react-icons/fi';
import { ModalContent, ModalHeader, ModalBody } from './styles';
import Modal, { Styles } from 'react-modal';
import { SelectRentalRange } from 'components/SelectRentalRange';

const customStyles: Styles = {
  content: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1100,
    padding: '1rem',
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

export const DatePickerModal = ({
  modalIsOpen,
  onRequestClose,
}: ModalProps) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick
      style={customStyles}
      // bodyOpenClassName="modalOpen"
      className="modalContent"
    >
      <ModalContent>
        <ModalHeader>
          <span>Escolha uma data de início e fim do aluguel</span>
          <ButtonBase onClick={onRequestClose}>
            <FiX />
          </ButtonBase>
        </ModalHeader>

        <ModalBody>
          <SelectRentalRange />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
