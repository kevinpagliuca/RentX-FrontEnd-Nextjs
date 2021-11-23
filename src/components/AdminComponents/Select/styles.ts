import styled, { css } from 'styled-components';

interface ContentContainerProps {
  optionSelected: boolean;
}

interface MenuOptionsContainerProps {
  isOpen: boolean;
  isReverse: boolean;
}

interface MenuItemProps {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 100%;
  border: 2px solid var(--gray-500);
  background: var(--gray-450);
  color: var(--gray-100);
  border-radius: 4px;
  transition: all 0.3s;
  position: relative;
`;

export const ContentContainer = styled.div<ContentContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  font: 400 1rem 'Archivo', sans-serif;
  line-height: 1rem;
  height: 3.5rem !important;
  position: relative;
  width: 100%;
  color: var(--gray-350);
  cursor: pointer;

  > span {
    transition: all 0.3s;
    font-size: 1rem;
    line-height: 1rem;
    position: absolute;
  }

  > p {
    padding: 1rem 0 0;
    color: var(--gray-100);
  }

  ${({ optionSelected }) =>
    optionSelected &&
    css`
      > span {
        transform: translateY(-0.75rem);
        font-size: 0.75rem;
        line-height: 0.75rem;
      }
    `}

  .select-icon {
    position: absolute;
    right: 0.25rem;
  }

  span.error {
    position: absolute;
    bottom: 0;
    left: 0;
    color: var(--main);
    font: 500 0.875rem 'Archivo', sans-serif;
  }
`;

export const MenuOptionsContainer = styled.div<MenuOptionsContainerProps>`
  ${({ isOpen, isReverse }) => css`
    display: flex;
    flex-direction: column;

    position: absolute;
    ${isReverse ? 'bottom: calc(100% + 0.5rem);' : 'top: calc(100% + 0.5rem);'}
    width: 100%;
    padding: 0.5rem 0;

    background: var(--gray-500);
    color: var(--gray-200);
    border-radius: 5px;

    z-index: 100;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-0.5rem);
    transition: all 0.3s;

    ${isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    `}
  `}
`;

export const MenuItem = styled.div<MenuItemProps>`
  ${({ isSelected }) => css`
    display: flex;
    align-items: center;
    line-height: 2.25rem;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Archivo', sans-serif;
    color: var(--gray-100);
    padding: 0 1rem;
    cursor: pointer;
    user-select: none;
    transition: all 0.2s;

    ${isSelected &&
    css`
      background: var(--gray-500);
      color: var(--gray-100);
    `}

    &:hover {
      background: var(--gray-350);
      color: var(--gray-100);
    }
  `}
`;

export const ClearMenuItemSelected = styled.div`
  display: flex;
  align-items: center;
  line-height: 2.25rem;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Archivo', sans-serif;
  color: var(--main);
  padding: 0 1rem;
  cursor: pointer;
  user-select: none;
  transition: all 0.3s;

  &:hover {
    background: var(--gray-350);
  }
`;
