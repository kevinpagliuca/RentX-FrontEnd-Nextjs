import { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { CalendarIcon } from 'assets/Icons';
import { RentalDateSelectModal } from 'components/Modais/RentalDateSelectModal';
import { useRentalDate } from 'contexts/RentalDateContext';
import { ICars } from 'interfaces/cars';

import * as S from './styles';

interface PeriodTabProps {
  details: ICars;
}

export const PeriodTab = ({ details }: PeriodTabProps) => {
  const { fromDayText, toDayText, diffDaysResult } = useRentalDate();
  const [isDateRangeModalOpen, setIsDateRangeModalOpen] = useState(false);

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

        <S.CalendarIconContainer onClick={() => setIsDateRangeModalOpen(true)}>
          <CalendarIcon color="var(--main)" />
        </S.CalendarIconContainer>
      </S.RangeDateContainer>

      <RentalDateSelectModal
        modalIsOpen={isDateRangeModalOpen}
        onRequestClose={() => setIsDateRangeModalOpen(false)}
      />
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
