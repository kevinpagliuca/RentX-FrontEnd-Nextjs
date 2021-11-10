import styled, { css } from 'styled-components';

type NavigationContainerProps = {
  activeTab: 'about' | 'period';
};

export const NavigationContainer = styled.div<NavigationContainerProps>`
  margin-top: 3rem;
  display: flex;
  width: 100%;
  border-bottom: 1px solid var(--gray-300);
  height: 2.5rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s;

  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 3px;
    background: var(--main);
    position: absolute;
    bottom: 0px;
    left: 0;
    transition: all 0.3s;
  }

  ${({ activeTab }) =>
    activeTab === 'period' &&
    css`
      &::after {
        transform: translateX(100%);
      }
    `}

  button {
    font: 600 0.875rem 'Archivo', sans-serif;
    transition: all 0.3s;
    color: var(--gray-350);
    height: 100%;
    white-space: nowrap;
    width: 100%;

    &.active {
      color: var(--gray-450);
      height: 100%;
    }
  }
`;

export const TabsContent = styled.div`
  width: 100%;
  margin: auto;
  transition: all 0.3s;

  > div {
    visibility: hidden;
    opacity: 0;
    color: var(--gray-400);
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    overflow: hidden auto;
    max-height: 12.5rem;
    transition: all 0.3s;

    &.hide {
      height: 0;
    }

    &.show {
      visibility: visible;
      opacity: 1;
      padding: 1rem 0;
      height: 12.5rem;

      &.period {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
