import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 24rem;
  gap: 1rem;
  grid-gap: 1rem;
  margin-right: 4.5rem;
  position: relative;

  &::after {
    content: '';
    height: 100%;
    background: var(--gray-300);
    width: 1px;
    position: absolute;
    right: -4.5rem;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  button {
    margin-top: 1rem;
  }
`;
