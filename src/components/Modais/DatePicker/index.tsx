import React from 'react';
import TextField from '@material-ui/core/TextField';

import StaticDateRangePicker from '@material-ui/lab/StaticDateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Locale from 'date-fns/locale/pt-BR';
import Modal, { Styles } from 'react-modal';

import { ButtonBase } from '@material-ui/core';
import { FiX } from 'react-icons/fi';
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  DatePickerContainer,
} from './styles';

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
  const [value, setValue] = React.useState<any>([null, null]);

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
          <DatePickerContainer>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={Locale}>
              <StaticDateRangePicker
                displayStaticWrapperAs="mobile"
                disablePast
                startText="Início"
                endText="Final"
                toolbarTitle="Selecione as datas"
                calendars={1}
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <div className="inputsContainer">
                    {console.log(startProps, endProps)}
                    <TextField {...startProps} />
                    <TextField {...endProps} />
                  </div>
                )}
              />
            </LocalizationProvider>
          </DatePickerContainer>

          <div>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
            <h1>teste</h1>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
