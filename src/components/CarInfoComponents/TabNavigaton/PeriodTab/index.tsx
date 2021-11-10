import { FiChevronRight } from 'react-icons/fi';

import { CalendarIcon } from 'assets/Icons';
import { useRentalDate } from 'contexts/RentalDateContext';
import { ICars } from 'interfaces/cars';

import * as S from './styles';

interface PeriodTabProps {
  details: ICars;
  openDateRangeModal: () => void;
}

export const PeriodTab = ({ details, openDateRangeModal }: PeriodTabProps) => {
  const { fromDayText, toDayText, diffDaysResult } = useRentalDate();

  return (
    <S.Container>
      <S.RangeDateContainer>
        <S.DateItemContainer>
          <span>DE</span>
          {fromDayText ? (
            <strong>{fromDayText}</strong>
          ) : (
            <p>Não selecionado</p>
          )}
        </S.DateItemContainer>
        <span>
          <FiChevronRight size={24} color="var(--gray-350)" />
        </span>
        <S.DateItemContainer>
          <span>DE</span>
          {toDayText ? <strong>{toDayText}</strong> : <p>Não selecionado</p>}
        </S.DateItemContainer>

        <S.CalendarIconContainer onClick={openDateRangeModal}>
          <CalendarIcon color="var(--main)" />
        </S.CalendarIconContainer>
      </S.RangeDateContainer>

      <S.TotalPrice>
        <div>
          <span>TOTAL</span>
          <strong>
            R$ {details.daily_rate} x{diffDaysResult}
            {diffDaysResult === 1 ? ' diária' : ' diárias'}
          </strong>
        </div>
        <h2>R$ {details.daily_rate * diffDaysResult}</h2>
      </S.TotalPrice>
    </S.Container>
  );
};
