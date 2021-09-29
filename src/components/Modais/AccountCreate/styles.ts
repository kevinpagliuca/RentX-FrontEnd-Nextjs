import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 450px;
  height: 450px;
  border-radius: 8px;
  background: url('/imgCross.png') center no-repeat #29292e;
  color: var(--gray-350);
  padding: 4rem 2.5rem;
  transition: all 0.3s;

  h1 {
    color: var(--white);
    font: 600 2.125rem 'Archivo', sans-serif;
    line-height: 2.5rem;
  }

  p {
    text-align: center;
    font: 400 1.125rem 'inter', sans-serif;
    line-height: 1.875rem;
    color: var(--gray-350);
    width: 100%;
    white-space: nowrap;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 7.5rem;
    height: 4rem;
    background: var(--gray-500);
    color: var(--white);
    border: 0;
  }
`;

export const ModalBackdrop = styled.div``;
