import React, { ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonComponent, Container } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  children: ReactNode;
  containerClass?: string;
  variant?: 'blue' | 'red' | 'green' | undefined;
}

export function Button({ children, containerClass, variant, ...rest }: ButtonProps) {
  return (
    <Container className={containerClass}>
      <ButtonComponent {...rest} variant={variant}>
        {children}
      </ButtonComponent>
    </Container>
  );
}
