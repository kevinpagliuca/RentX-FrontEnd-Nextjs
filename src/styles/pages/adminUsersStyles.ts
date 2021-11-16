import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto 2.5rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0;
    background: transparent;
    border: 0;
    color: var(--white);
    transition: all 0.3s;

    &:hover {
      color: var(--main);
    }
  }
`;

export const SearchContainer = styled.div`
  max-width: 20rem;
  display: flex;
  align-items: center;
  width: 100%;
`;
