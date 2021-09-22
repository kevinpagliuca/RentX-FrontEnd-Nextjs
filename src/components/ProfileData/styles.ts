import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 24rem;
  height: 100%;
  gap: 1rem;
  grid-gap: 1rem;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 11.25rem;
  height: 11.25rem;
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
  img {
    border-radius: 50%;
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--main);
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    bottom: 0;
    right: 0;
    color: var(--white);
  }
`;

export const NavigationContainer = styled.div`
  padding: 0rem 5.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid var(--gray-300);
  gap: 2rem;
  height: 2.5rem;
  button {
    font: 400 1.25rem "Archivo", sans-serif;
    transition: all 0.3s;
    color: var(--gray-350);
    height: 100%;
    white-space: nowrap;

    &.active {
      font: 600 1.25rem "Archivo", sans-serif;
      color: var(--gray-450);
      height: 100%;
      border-bottom: 2px solid var(--main);
    }
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  button{
       margin-top: 1rem;

  }

`;
