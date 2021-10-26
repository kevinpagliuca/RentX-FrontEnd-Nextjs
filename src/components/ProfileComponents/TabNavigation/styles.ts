import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid var(--gray-300);
  gap: 0rem;
  height: 2.5rem;

  button {
    font: 400 1.25rem 'Archivo', sans-serif;
    transition: all 0.3s;
    color: var(--gray-350);
    height: 100%;
    white-space: nowrap;
    width: 100%;

    &.active {
      font: 600 1.25rem 'Archivo', sans-serif;
      color: var(--gray-450);
      height: 100%;
      border-bottom: 2px solid var(--main);
    }
  }
`;
