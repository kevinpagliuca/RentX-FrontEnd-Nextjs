import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { Calendar, DayRange } from 'react-modern-calendar-datepicker';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

import { Button } from 'components/Form/Button';

import { myCustomLocale } from './customLocale';
import { dateFormatter } from './helper/dateFormatter';
import * as S from './styles';

export const SelectRentalRange = () => {
  const [dayRange, setDayRange] = useState<DayRange>({
    from: null,
    to: null,
  });

  const [toDayText, setToDayText] = useState('');
  const [fromDayText, setFromDayText] = useState('');

  const todayDate = format(new Date(), 'yyyy-MM-dd').split('-');

  useEffect(() => {
    const formatedDates = dateFormatter(dayRange);
    setToDayText(formatedDates.toDateText);
    setFromDayText(formatedDates.fromDateText);
  }, [dayRange]);

  const handleConfirmSchedule = () => {
    return;
  };

  return (
    <S.Container>
      <S.DatePickerContainer>
        <Calendar
          value={dayRange}
          onChange={setDayRange}
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
        <Button type="button" onClick={handleConfirmSchedule}>
          Confirmar
        </Button>
      </S.RangeInputsContainer>
    </S.Container>
  );
};
