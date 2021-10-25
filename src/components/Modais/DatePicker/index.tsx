import React, { useEffect, useState } from 'react';
import Locale from 'date-fns/locale/pt-BR';

import { TextField, ButtonBase } from '@material-ui/core';
import { StaticDateRangePicker, LocalizationProvider } from '@material-ui/lab';

import AdapterDateFns from '@material-ui/lab/AdapterDateFns';

import { FiX } from 'react-icons/fi';
import {
  ModalContent,
  ModalHeader,
  ModalBody,
  DatePickerContainer,
} from './styles';
import Modal, { Styles } from 'react-modal';
import { Button } from 'components/Form/Button';

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
  const [value, setValue] = useState<any>([null, null]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    if (!!value[0]) setStartDate(new Date(value[0]).toLocaleDateString());
    if (!!value[1]) setEndDate(new Date(value[1]).toLocaleDateString());
  }, [value]);

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
                displayStaticWrapperAs="desktop"
                disablePast
                startText="Início"
                endText="Final"
                toolbarTitle="Selecione o período"
                showToolbar
                calendars={1}
                // toolbarFormat="MM/yy"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                  <div className="inputsContainer">
                    {console.log(startProps)}
                    <TextField {...startProps} />
                    <TextField {...endProps} />
                  </div>
                )}
              />
            </LocalizationProvider>
          </DatePickerContainer>

          <div className="rangeDateInput">
            <span>DE</span>
            <TextField variant="filled" value={startDate} />
            <span>ATÉ</span>
            <TextField variant="filled" value={endDate} />

            <Button>Confirmar</Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
