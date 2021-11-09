import { ButtonBase } from '@material-ui/core';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RangeDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  gap: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--gray-200);
`;

export const DateItemContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font: 500 12px 'Archivo', sans-serif;
    color: var(--gray-350);
  }

  strong {
    font: 500 1.125rem 'Inter', sans-serif;
    color: var(--gray-450);
  }

  p {
    font: 500 0.875rem 'Inter', sans-serif;
    color: var(--gray-450);
  }
`;

export const CalendarIconContainer = styled(ButtonBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--main);
  color: var(--white);
  min-height: 3rem;
  min-width: 3rem;
  border-radius: 2px;
`;

export const TotalPrice = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;

    span {
      font: 500 12px 'Archivo', sans-serif;
      color: var(--gray-350);
    }

    strong {
      font: 500 1.125rem 'Inter', sans-serif;
      color: var(--gray-450);
    }
  }

  h2 {
    font: 600 2.5rem 'Archivo', sans-serif;
    color: var(--green-500);
  }
`;
