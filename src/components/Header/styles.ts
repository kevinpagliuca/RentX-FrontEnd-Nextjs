import styled from "styled-components";
import {darken} from "polished";

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  position: sticky;
  top: 0;
  max-height: 5rem;
  height: 5rem;
  width: 100%;
  background: var(--white);
  z-index: 100;

  > .buttonLink {
    height: 100%;
    min-width: 5rem;
    border: 0;
    background: var(--main);
    color: var(--white);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.75rem 7.25rem;
  width: 100%;
  color: var(--gray-500);
  border-bottom: 1px solid var(--gray-100);  

  div.userHeaderContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25rem;
    grid-gap: 0.5rem;

    a.userName {
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      font-size: 1rem;
      font-weight: 600;
      background: transparent;
      color: var(--gray-500);
      position: relative;
      transition: all 0.3s;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: 0;
      white-space: nowrap;
      text-transform: uppercase;
      font-size: 1rem;
      color: var(--main);
      font-weight: 500;
      font-family: "Archivo";
      transition: all 0.3s;

      &:hover {
        color: ${`${darken(0.1, "#DC1637")}`};
      }
    }
  }

  a.signInTxt {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    font-size: 1rem;
    font-weight: 600;
    background: transparent;
    color: var(--gray-500);
    position: relative;
    transition: all 0.3s;

    button {
      margin-left: 1rem;
      color: var(--gray-400);
      background: var(--gray-100);
      border-radius: 50%;
      min-width: 3rem;
      min-height: 3rem;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const WithOutHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  position: sticky;
  top: 0;
  max-height: 5rem;
  height: 5rem;
  width: 100%;
  background: var(--white);
  z-index: 100;

  > .buttonLink {
    height: 100%;
    min-width: 5rem;
    border: 0;
    background: var(--main);
    color: var(--white);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
