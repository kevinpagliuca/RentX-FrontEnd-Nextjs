import styled, { css } from 'styled-components';

interface ContainerProps {
  filled?: boolean;
  error?: boolean;
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
      > input {
        border-color: var(--main) !important;
      }
    `}


  .startIcon {
    position: absolute;
    left: 1rem;
    color: inherit;

    & ~ input {
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
    & ~ input {
      //proximo no mesmo nivel
      padding-right: 3rem;
    }
  }

  label {
    font: 400 1rem 'Inter', sans-serif;
    position: absolute;
    left: 1.5rem;
    color: var(--gray-350);
    transition: all 0.3s ease-in-out;
    cursor: text;
  }

  &:focus-within {
    label {
      transform: translateY(-0.75rem);
      font-size: 10px;
      line-height: 10px;
      font-weight: 500;
    }
  }

  input {
    width: 100%;
    border: 2px solid var(--gray-500);
    background: var(--gray-450);
    color: var(--gray-100);
    border-radius: 4px;
    height: 3.5rem;
    padding: 0.5rem 1.5rem;
    font: 400 1rem 'Archivo', sans-serif;
    line-height: 1rem;
    transition: all 0.3s;

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
