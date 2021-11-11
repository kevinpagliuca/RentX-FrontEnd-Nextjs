import styled, { css } from 'styled-components';

interface ContentContainerProps {
  translateX?: number;
}

export const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 5rem;
`;

export const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 33.33%;
    height: 3px;
    background: var(--main);
    transition: all 1s;
  }

  ${({ translateX }) => css`
    &::after {
      transform: translateX(${translateX}%);
    }
  `};

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    color: var(--gray-350);
    height: 100%;
    font: 500 1.25rem 'Inter', sans-serif;
    border-bottom: 2px solid var(--gray-300);
    position: relative;

    & + button::after {
      content: '';
      position: absolute;
      left: 0;
      height: 3rem;
      width: 2px;
      background: var(--gray-300);
    }

    &.active {
      color: var(--gray-500);
      font: 600 1.25rem 'Inter', sans-serif;
    }

    svg {
      margin-right: 1rem;
    }
  }
`;
