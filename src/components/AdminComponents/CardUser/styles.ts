import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background: var(--gray-450);
  border-radius: 8px;
  padding: 1rem;
  gap: 2rem;
`;

export const AvatarContainer = styled.div`
  & .sb-avatar__text span {
    font-size: 1.25rem !important;
  }
`;

export const CardContent = styled.div`
  display: grid;
  grid-template-columns: 8rem 13rem 10rem 10rem;
  align-items: center;
  width: 100%;
  gap: 3rem;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.25rem;
  overflow: hidden;

  strong {
    font: 700 1rem 'Inter', sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    font: 500 1rem 'Archivo', sans-serif;
    color: var(--gray-350);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const CardButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  gap: 1.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font: 500 1rem 'Archivo', sans-serif;
    color: var(--gray-350);
    background: transparent;
    border: 0;
    transition: all 0.3s;

    &:hover {
      color: var(--main);
    }
  }
`;
