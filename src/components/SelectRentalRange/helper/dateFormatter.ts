import { DayRange } from '@hassanmojab/react-modern-calendar-datepicker';
import { add, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const dateFormatter = (dayRange: DayRange) => {
  let fromDateText = '';
  let toDateText = '';

  let fromDate = '';
  let toDate = '';

  if (dayRange.from?.year) {
    const newFormatedDateFrom = `${dayRange.from?.year}-${String(
      dayRange.from?.month
    ).padStart(2, '0')}-${String(dayRange.from?.day).padStart(2, '0')}`;
    fromDate = newFormatedDateFrom;
    fromDateText = format(
      add(new Date(newFormatedDateFrom), { days: 1 }),
      "dd 'de 'MMMM",
      {
        locale: ptBR,
      }
    );
  }

  if (dayRange.to?.year) {
    const newFormatedDateTo = `${dayRange.to?.year}-${String(
      dayRange.to?.month
    ).padStart(2, '0')}-${String(dayRange.to?.day).padStart(2, '0')}`;
    toDate = newFormatedDateTo;
    toDateText = format(
      add(new Date(newFormatedDateTo), { days: 1 }),
      "dd 'de 'MMMM",
      {
        locale: ptBR,
      }
    );
  }

  return { fromDateText, toDateText, toDate, fromDate };
};
