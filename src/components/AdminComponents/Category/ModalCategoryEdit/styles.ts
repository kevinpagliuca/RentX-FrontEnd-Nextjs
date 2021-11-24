import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 400px;
  height: 100%;
  border-radius: 20px;
  color: var(--gray-350);
  background: var(--dark);
  padding: 1.5rem 2rem;
  transition: all 0.3s;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h1 {
    color: var(--white);
    font: 600 2rem 'Inter', sans-serif;
    line-height: 2.5rem;
  }

  svg {
    cursor: pointer;
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
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  width: 100%;

  .buttonContainer {
    width: 100%;
  }

  button {
    height: 3.5rem;
    width: 100%;
  }
`;
