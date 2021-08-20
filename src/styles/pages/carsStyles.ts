import styled from "styled-components";

export const Container = styled.div`
  font-family: "Archivo", sans-serif;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: var(--gray-50);
  overflow: hidden;
`;

export const Header = styled.header`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 5.125rem;
  padding: 0 0 1.5rem 0;
  color: var(--gray-500);
  border-bottom: 1px solid var(--gray-500);
`;

export const HeaderContent = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 40%;
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
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 0.938rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 2.25rem;
      line-height: 2.438rem;
    }
  }

  div.titleValue {
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 0.938rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }

    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 2.25rem;
      line-height: 2.438rem;

      &.titleValueRed{
        color: var(--main);
      }
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

export const Content = styled.div`
  display: grid;
  grid-template-columns: 650px 1fr;
  gap: 6rem;
  margin-top: 2.5rem;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: blue;
  height: 100%;
`;
