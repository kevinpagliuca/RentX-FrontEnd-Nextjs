import { add, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

// DATE FORMAT IN FORMAT '1999-05-29'
export const formatUSADateToBRDate = (date: string) => {
  return format(add(new Date(date), { days: 1 }), "dd 'de 'MMMM", {
    locale: ptBR,
  });
};

export const formatDateToDateText = (date: Date) => {
  return format(add(new Date(date), { days: 1 }), 'dd MMM yyyy', {
    locale: ptBR,
  });
};

export const diffDays = (startDate: string, endDate: string) => {
  const diff = Math.abs(
    new Date(startDate).getTime() - new Date(endDate).getTime()
  );
  return Math.ceil(diff / (1000 * 3600 * 24));
};
