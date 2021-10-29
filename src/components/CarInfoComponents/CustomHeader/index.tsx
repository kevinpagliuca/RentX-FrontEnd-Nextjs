import { FaChevronLeft } from 'react-icons/fa';

import { useRouter } from 'next/router';

import * as S from './styles';
export function CustomHeader() {
  const { back } = useRouter();
  return (
    <S.Header>
      <S.HeaderContent>
        <FaChevronLeft onClick={back} size={25} color="#47474D" />
        <div className="titleName">
          <p>Audi</p>
          <h1>Q3 Baita Foda</h1>
        </div>
        <div className="titleValue">
          <p>Ao dia</p>
          <h1 className="titleValueRed">R$ 120</h1>
        </div>
      </S.HeaderContent>
    </S.Header>
  );
}
