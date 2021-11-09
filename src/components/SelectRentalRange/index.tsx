import React, { useCallback } from 'react';

import { Calendar } from '@hassanmojab/react-modern-calendar-datepicker';
import { Button } from 'components/Form/Button';
import { useRentalDate } from 'contexts/RentalDateContext';

import { myCustomLocale } from './customLocale';
import * as S from './styles';

interface SelectRentalRangeProps {
  onRequestClose?: () => void;
}

export const SelectRentalRange = ({
  onRequestClose,
}: SelectRentalRangeProps) => {
  const {
    dateRange,
    setDateRange,
    fromDayText,
    toDayText,
    todayDate,
    isValidContinue,
    toggleApply,
  } = useRentalDate();

  const handleApply = useCallback(() => {
    if (!!onRequestClose) {
      onRequestClose();
    }
    toggleApply();
  }, [onRequestClose, toggleApply]);

  return (
    <S.Container>
      <S.DatePickerContainer>
        <Calendar
          value={dateRange}
          onChange={setDateRange}
          locale={myCustomLocale}
          colorPrimary="var(--main)"
          colorPrimaryLight="var(--light-red)"
          calendarClassName="custom-calendar"
          calendarTodayClassName="custom-today-day"
          minimumDate={{
            day: Number(todayDate[2]),
            month: Number(todayDate[1]),
            year: Number(todayDate[0]),
          }}
          shouldHighlightWeekends
        />
      </S.DatePickerContainer>

      <S.RangeInputsContainer>
        <div className="inputsContent">
          <span title="De">DE</span>
          {fromDayText ? <strong>{fromDayText}</strong> : <div />}
          <span title="Até">ATÉ</span>
          {toDayText ? <strong>{toDayText}</strong> : <div />}
        </div>
        <Button type="button" onClick={handleApply} disabled={!isValidContinue}>
          Confirmar
        </Button>
      </S.RangeInputsContainer>
    </S.Container>
  );
};
