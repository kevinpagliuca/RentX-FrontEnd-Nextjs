import { CircularProgress } from '@material-ui/core';
import React, {
  ReactNode,
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from 'react';
import { IntrinsicElementsKeys } from 'styled-components';
import { ButtonComponent, Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children: ReactNode;
  containerClass?: string;
  variant?: 'transparent' | 'red' | 'green' | undefined;
  as?: IntrinsicElementsKeys;
  loading?: boolean;
  loadingSize?: number;
}

const ButtonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  {
    children,
    containerClass,
    variant,
    as,
    loading,
    loadingSize,
    ...rest
  }: ButtonProps,
  ref
) => {
  return (
    <Container className={containerClass}>
      <ButtonComponent
        {...rest}
        variant={variant}
        ref={ref}
        disabled={loading || rest.disabled}
      >
        {loading && <CircularProgress size={loadingSize} color="inherit" />}
        {!loading && children}
      </ButtonComponent>
    </Container>
  );
};

export const Button = forwardRef(ButtonBase);
