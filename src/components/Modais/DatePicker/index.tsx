import React, { useEffect, useState } from 'react';
import Locale from 'date-fns/locale/pt-BR';

import { TextField, ButtonBase } from '@material-ui/core';
import { StaticDateRangePicker, LocalizationProvider } from '@material-ui/lab';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import { Calendar, DayRange } from 'react-modern-calendar-datepicker';

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
  const [dayRange, setDayRange] = useState<DayRange>({
    from: null,
    to: null,
  });

  useEffect(() => {
    if (!!value[0]) setStartDate(new Date(value[0]).toLocaleDateString());
    if (!!value[1]) setEndDate(new Date(value[1]).toLocaleDateString());
  }, [value]);

  //Custom Locale
  const myCustomLocale = {
    // months list by order
    months: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio ',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],

    // week days by order
    weekDays: [
      {
        name: 'Domingo', // used for accessibility
        short: 'DOM', // displayed at the top of days' rows
        isWeekend: true, // is it a formal weekend or not?
      },
      {
        name: 'Segunda',
        short: 'SEG',
      },
      {
        name: 'Terça',
        short: 'TER',
      },
      {
        name: 'Quarta',
        short: 'QUA',
      },
      {
        name: 'Quinta',
        short: 'QUI',
      },
      {
        name: 'Sexta',
        short: 'SEX',
      },
      {
        name: 'Sabado',
        short: 'SAB',
        isWeekend: true,
      },
    ],

    // just play around with this number between 0 and 6
    weekStartingIndex: 0,

    // return a { year: number, month: number, day: number } object
    getToday(gregorainTodayObject) {
      return gregorainTodayObject;
    },

    // return a native JavaScript date here
    toNativeDate(date) {
      return new Date(date.year, date.month - 1, date.day);
    },

    // return a number for date's month length
    getMonthLength(date) {
      return new Date(date.year, date.month, 0).getDate();
    },

    // return a transformed digit to your locale
    transformDigit(digit) {
      return digit;
    },

    // texts in the date picker
    nextMonth: 'Próximo mês',
    previousMonth: 'Mês anterior',
    openMonthSelector: 'Seletor de mês aberto',
    openYearSelector: 'Seletor de ano aberto',
    closeMonthSelector: 'Fechar Seletor de Mês',
    closeYearSelector: 'Fechar seletor de ano',
    defaultPlaceholder: 'Selecione ...',

    // for input range value
    from: 'De',
    to: 'Para',

    // used for input value when multi dates are selected
    digitSeparator: ',',

    // if your provide -2 for example, year will be 2 digited
    yearLetterSkip: 0,

    // is your language rtl or ltr?
    isRtl: false,
  };

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
            <Calendar
              value={dayRange}
              onChange={setDayRange}
              locale={myCustomLocale}
              colorPrimary="#dc1637"
              colorPrimaryLight="#fdedef"
              calendarClassName="custom-calendar"
              calendarTodayClassName="custom-today-day"
            />
          </DatePickerContainer>

          <div className="rangeDateInput">
            <span>DE</span>
            <TextField
              variant="filled"
              value={
                dayRange.from &&
                `${dayRange.from?.day}/${dayRange.from?.month}/${dayRange.from?.year}`
              }
            />
            <span>ATÉ</span>
            <TextField
              variant="filled"
              value={
                dayRange.to &&
                `${dayRange.to?.day}/${dayRange.to?.month}/${dayRange.to?.year}`
              }
            />

            <Button>Confirmar</Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
