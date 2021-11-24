import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  max-height: 500px;
  border-radius: 20px;
  color: var(--gray-350);
  background: var(--dark);
  padding: 3rem 1rem 1.5rem;
  transition: all 0.3s;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h1 {
    color: var(--white);
    font: 500 1.5rem 'Inter', sans-serif;
    line-height: 2rem;
    text-align: center;

    span {
      color: var(--main);
      font: 700 1.5rem 'Archivo', sans-serif;
      text-decoration: underline;
    }
  }

  svg {
    cursor: pointer;
    position: absolute;
    right: 1rem;
    top: 1rem;
    transition: all 0.3s;

    &:hover {
      color: var(--main);
    }
  }
`;

export const ModalContent = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  overflow: auto;
  padding-right: 1rem;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;

  button {
    height: 3.5rem;
    width: 100%;
    padding: 0 3rem;
  }
`;
