import { FaChevronLeft } from 'react-icons/fa';

import { useRouter } from 'next/router';

import { ICars } from 'interfaces/cars';

import * as S from './styles';

interface CustomHeaderProps {
  details: ICars;
}

export function CustomHeader({ details }: CustomHeaderProps) {
  const { back } = useRouter();
  return (
    <S.Header>
      <S.HeaderContent>
        <FaChevronLeft onClick={back} size={25} color="#47474D" />
        <div className="titleName">
          <p>{details.brand}</p>
          <h1>{details.name}</h1>
        </div>
        <div className="titleValue">
          <p>Ao dia</p>
          <h1 className="titleValueRed">R$ {details.daily_rate}</h1>
        </div>
      </S.HeaderContent>
    </S.Header>
  );
}
