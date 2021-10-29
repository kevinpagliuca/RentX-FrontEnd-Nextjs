import styled from 'styled-components';

export const NavigationContainer = styled.div`
  margin-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid var(--gray-300);
  gap: 0rem;
  height: 2.5rem;

  button {
    font: 400 1.25rem 'Archivo', sans-serif;
    transition: all 0.3s;
    color: var(--gray-350);
    height: 100%;
    white-space: nowrap;
    width: 100%;

    &.active {
      font: 600 1.25rem 'Archivo', sans-serif;
      color: var(--gray-450);
      height: 100%;
      border-bottom: 2px solid var(--main);
    }
  }
`;

export const ContentText = styled.div`
  height: 7.625rem;

  p {
    color: var(--gray-400);
    padding: 2rem 0rem 0.5rem 0rem;
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
