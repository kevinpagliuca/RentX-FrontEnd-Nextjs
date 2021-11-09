import styled, { css } from 'styled-components';

type NavigationContainerProps = {
  activeTab: 'about' | 'period';
};

type TabsContentProps = {
  height: number;
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

export const TabsContent = styled.div<TabsContentProps>`
  width: 100%;
  flex: 1;
  ${({ height }) =>
    css`
      height: ${height ? height : 0} !important;
    `};
  transition: all 0.3s;

  > div {
    visibility: hidden;
    opacity: 0;
    color: var(--gray-400);
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    overflow: hidden;
    transition: all 0.3s;

    &.hide {
      height: 0px;
    }

    &.show {
      visibility: visible;
      opacity: 1;
      padding: 1rem 0;
      ${({ height }) =>
        css`
          height: ${height ? height : 0} !important;
        `};
    }
  }
`;
