import styled from 'styled-components';

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 850px;
  height: 500px;
  color: var(--gray-350);
  background: var(--white);
  transition: all 0.3s;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  background: var(--dark);
  padding: 1.75rem 3rem;
  position: relative;

  > span {
    color: var(--white);
  }
  
  > button {
    position: absolute;
    right: 0;
    width: 5rem;
    height: 100%;
    font-size: 30px;
    transition: all 0.3s;

    &:hover {
      color: var(--main);
    }
  }
`;


export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 6rem;
`;