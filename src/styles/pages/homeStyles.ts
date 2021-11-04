import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1680px;
  margin-bottom: 1.5rem;
`;

export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  width: 100%;
  height: 100%;

  @media (max-width: 1100px) {
    place-items: center;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1680px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.438rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--gray-300);

  h1 {
    font-family: 'Archivo', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 2.25rem;
    line-height: 2.438rem;
    color: var(--gray-500);
    display: flex;
    align-items: center;
    width: 100%;

    button {
      margin-left: auto;
    }
  }

  p {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 1.188rem;
    text-align: right;
    color: var(--gray-400);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1 {
      margin-bottom: 1rem;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 3.125rem;

  div button {
    background-color: var(--main);
    height: 50px;
    width: 50px;
  }

  .inputsContent {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-size: 0.7rem;
      font-family: 'Archivo', sans-serif;
      font-weight: 500;
      color: var(--gray-350);
    }

    strong {
      font-size: 1rem;
      font-family: 'Archivo', sans-serif;
      font-weight: 600;
      color: var(--gray-500);
    }

    div {
      width: 100%;
      height: 1px;
      border-radius: 5px;
      background: var(--gray-350);
      margin: 2.5rem 0;
    }
  }
`;
