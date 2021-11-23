import { Menu, MenuItem } from '@material-ui/core';
import styled, { css } from 'styled-components';

interface ContainerProps {
  filled?: boolean;
  error?: boolean;
}

interface SelectMenuProps {
  parentWidth: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  color: var(--gray-400);
  transition: all 0.3s;

  ${(props) =>
    props.filled &&
    css`
      .startIcon {
        color: var(--main) !important;
      }
    `}

  ${(props) =>
    props.error &&
    css`
      padding-bottom: 1.25rem;
      > div {
        border-color: var(--main) !important;
      }
    `}


  .startIcon {
    position: absolute;
    left: 1rem;
    color: inherit;

    & ~ div {
      padding-left: 3rem;
    }

    & ~ label {
      left: 3rem;
    }
  }
  .endIcon {
    position: absolute;
    right: 1rem;
    color: inherit;
    & ~ div {
      //proximo no mesmo nivel
      padding-right: 3rem;
    }
  }

  label {
    font: 400 1rem 'Inter', sans-serif;
    position: absolute;
    left: 1.6rem;
    color: var(--gray-350);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    user-select: none;
  }

  &:focus-within {
    label {
      transform: translateY(-0.75rem);
      font-size: 10px;
      line-height: 10px;
      font-weight: 500;
    }
  }

  > div {
    width: 100%;
    border: 2px solid var(--gray-500);
    background: var(--gray-450);
    color: var(--gray-100);
    border-radius: 4px;
    height: 3.5rem;
    padding: 0.5rem 1.5rem;
    font: 400 1rem 'Archivo', sans-serif;
    line-height: 1rem;
    position: relative;
    cursor: pointer;
    transition: all 0.3s;

    .optionSelected {
      font: 400 1rem 'Archivo', sans-serif;
      display: flex;
      align-items: center;
      width: 100%;
      padding-top: 0.25rem;
    }

    &:focus {
      padding-top: 1.25rem;
    }

    &:not([value='']) {
      padding-top: 1.25rem;
      & ~ label {
        transform: translateY(-0.75rem);
        font-size: 0.75rem;
        line-height: 0.75rem;
      }
    }

    &:-webkit-autofill {
      background-clip: text;
      -webkit-text-fill-color: var(--gray-500);
      -webkit-box-shadow: 0 0 0 999rem var(--light-red) inset;
      box-shadow: 0 0 0 999rem var(--light-red) inset;
    }
  }

  span.error {
    position: absolute;
    bottom: 0;
    left: 0;
    color: var(--main);
    font: 500 0.875rem 'Archivo', sans-serif;
  }
`;

export const SelectMenu = styled(Menu)<SelectMenuProps>`
  .menuItem {
    background: var(--gray-450);
    color: var(--gray-100);
    margin: 0.5rem 0;
    border: 2px solid var(--gray-500);
    transition: all 0.3s;
    ${({ parentWidth }) => css`
      width: ${parentWidth + 4}px;
    `};

    ul {
      padding: 0;
      li {
        padding: 0.5rem 1rem;
        transition: all 0.3s;

        & + li {
          border-top: 1px solid var(--gray-400);
        }

        &:hover {
          background: var(--gray-500);
        }
      }
    }
  }
`;

export const SelectMenuItem = styled(MenuItem)``;
