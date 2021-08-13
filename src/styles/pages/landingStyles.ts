import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: var(--dark);
  padding: 3rem;

  @media (max-width: 900px) {
    padding: 2rem;
    text-align: center;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1120px;
`;

export const SideContainer = styled.aside`
  height: 100%;
  width: 100%;

  svg {
    margin-bottom: 7.5rem;
  }

  h1 {
    font-family: "Archivo", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    line-height: 3rem;
    color: var(--white);
    margin-bottom: 2rem;
  }

  p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1.25rem;
    line-height: 1.875rem;
    color: var(--white);
    margin-bottom: 6rem;
  }

  .btnStart {
    max-width: 292px;
  }

  @media (max-width: 900px) {
    .btnStart {
      max-width: 100%;
    }
  }
`;

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    object-fit: cover;
    margin-left: 3rem;
    width: 70%;
  }

  @media (min-width: 1120px) {
    img {
      width: 100%;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
