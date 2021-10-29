import { add, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

// DATE FORMAT IN FORMAT '1999-05-29'
export const formatUSADateToBRDate = (date: string) => {
  return format(add(new Date(date), { days: 1 }), "dd 'de 'MMMM", {
    locale: ptBR,
  });
};
