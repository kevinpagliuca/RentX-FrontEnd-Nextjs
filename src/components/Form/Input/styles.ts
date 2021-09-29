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
    left: 2rem;
    color: inherit;
    & ~ input {
      //proximo no mesmo nivel
      padding-left: 4rem;
    }

    & ~ label {
      left: 4rem;
    }
  }
  .endIcon {
    position: absolute;
    right: 2rem;
    color: inherit;
    & ~ input {
      //proximo no mesmo nivel
      padding-right: 4rem;
    }
  }

  label {
    font: 400 1rem 'Inter', sans-serif;
    position: absolute;
    left: 1.5rem;
    color: var(--gray-350);
    transition: all 0.3s ease-in-out;
  }

  &:focus-within {
    label {
      transform: translateY(-0.75rem);
      font-size: 0.75rem;
      line-height: 0.75rem;
    }
  }

  input {
    width: 100%;
    border: 2px solid var(--gray-300);
    border-radius: 4px;
    height: 4rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
    font: 400 1rem 'Inter', sans-serif;
    line-height: 1rem;
    color: var(--gray-500);
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
  }

  span.error {
    position: absolute;
    bottom: 0;
    left: 0;
    color: var(--main);
    font: 500 0.875rem 'Archivo', sans-serif;
  }
`;
