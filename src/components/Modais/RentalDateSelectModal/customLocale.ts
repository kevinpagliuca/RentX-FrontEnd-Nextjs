import { CalendarDigit, Day } from 'react-modern-calendar-datepicker';

//Custom Locale
export const myCustomLocale = {
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
  getToday(gregorainTodayObject: Day): Day {
    return gregorainTodayObject;
  },

  // return a native JavaScript date here
  toNativeDate(date: Day): Date {
    return new Date(date.year, date.month - 1, date.day);
  },

  // return a number for date's month length
  getMonthLength(date: Day): number {
    return new Date(date.year, date.month, 0).getDate();
  },

  // return a transformed digit to your locale
  transformDigit(digit: CalendarDigit): CalendarDigit {
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
