import styled from 'styled-components';

interface CarInfoGroupProps {
  color?: 'red' | 'green';
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background: var(--gray-500);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  max-width: 32rem;
  width: 100%;
  position: relative;

  .carImage {
    width: 100%;
    height: 100%;
    position: relative;
    min-height: 140px;
    border-bottom: 1px solid var(--gray-400);
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

export const ItemsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 1.5rem;
`;

export const CarInfoGroup = styled.div<CarInfoGroupProps>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  span {
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Archivo', sans-serif;
    color: var(--gray-350);
  }

  strong {
    font-size: 0.875rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    color: var(--gray-200);

    color: ${({ color }) =>
      color === 'red'
        ? 'var(--main)'
        : color === 'green' && 'var(--green-500)'};
    & + span {
      margin-top: 0.5rem;
    }
  }
`;

export const ButtonsActions = styled.div`
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background: transparent;
    color: var(--gray-350);
    transition: 0.3s;

    &:hover {
      color: var(--main);
    }
  }
`;
