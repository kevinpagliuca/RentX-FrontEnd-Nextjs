import React from 'react';
import { toast } from 'react-toastify';

import { DayRange } from '@hassanmojab/react-modern-calendar-datepicker';
import { dateFormatter } from 'components/SelectRentalRange/helper/dateFormatter';
import { format } from 'date-fns';
import { diffDays } from 'helpers/dates';
import { ToastifyCustomMessage } from 'styles/ToastifyCustomMessage';

interface IRentalDateContextData {
  setDateRange: React.Dispatch<React.SetStateAction<DayRange>>;
  dateRange: DayRange;
  toDayText: string;
  fromDayText: string;
  toDayDate: string;
  fromDayDate: string;
  todayDate: string[];
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  toggleApply: () => void;
  isValidContinue: boolean;
  diffDaysResult: number;
}

export const RentalDateContext = React.createContext(
  {} as IRentalDateContextData
);

interface IRentalDateProviderProps {
  children: React.ReactNode;
}

export const RentalDateProvider = ({ children }: IRentalDateProviderProps) => {
  const [dateRange, setDateRange] = React.useState<DayRange>({
    from: null,
    to: null,
  });

  const [toDayText, setToDayText] = React.useState('');
  const [fromDayText, setFromDayText] = React.useState('');

  const [toDayDate, setToDayDate] = React.useState('');
  const [fromDayDate, setFromDayDate] = React.useState('');

  const todayDate = format(new Date(), 'yyyy-MM-dd').split('-');

  const [isSelected, setIsSelected] = React.useState(false);

  const diffDaysResult =
    toDayDate && fromDayDate ? diffDays(toDayDate, fromDayDate) : 0;

  React.useEffect(() => {
    const formatedDates = dateFormatter(dateRange);
    setToDayText(formatedDates.toDateText);
    setFromDayText(formatedDates.fromDateText);
    setFromDayDate(formatedDates.fromDate);
    setToDayDate(formatedDates.toDate);
  }, [dateRange]);

  const isValidContinue = !!toDayDate && !!fromDayDate;

  const toggleApply = () => {
    if (!isValidContinue) {
      setIsSelected(false);
      return toast.error(
        <ToastifyCustomMessage
          message="Selecione uma data para continuar!"
          title="Erro"
        />
      );
    }
    setIsSelected(true);
  };

  return (
    <RentalDateContext.Provider
      value={{
        dateRange,
        setDateRange,
        toDayText,
        fromDayText,
        toDayDate,
        fromDayDate,
        todayDate,
        isSelected,
        setIsSelected,
        toggleApply,
        isValidContinue,
        diffDaysResult,
      }}
    >
      {children}
    </RentalDateContext.Provider>
  );
};

export const useRentalDate = () => React.useContext(RentalDateContext);
