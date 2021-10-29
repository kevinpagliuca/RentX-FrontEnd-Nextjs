import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  color: var(--gray-500);
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  svg {
    cursor: pointer;
    color: var(--gray-500);
    transition: all 0.3s linear;

    &:hover {
      filter: drop-shadow(10px 0px 0px var(--gray-500));
    }
  }

  div.titleName {
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      font-family: 'Archivo', sans-serif;
      text-transform: uppercase;
    }

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 2.25rem;
      font-family: 'Archivo', sans-serif;
    }
  }

  div.titleValue {
    display: flex;
    align-items: center;
    gap: 1rem;
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      font-family: 'Archivo', sans-serif;
      text-transform: uppercase;
    }

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 2.25rem;
      font-family: 'Archivo', sans-serif;
      color: var(--main);
    }
  }

  @media (max-width: 1360px) {
    width: 50%;
    div {
      p {
        font-size: 0.5rem;
      }
    }
  }

  @media (max-width: 1021px) {
    width: 70%;
  }

  @media (max-width: 798px) {
    width: 80%;
  }

  @media (max-width: 517px) {
    width: 90%;
    div {
      p {
        font-size: 0.5rem;
      }
    }

    div {
      h1 {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 375px) {
    width: 90%;
  }
`;
