import {
  cloneElement,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  useState,
} from "react";
import { FieldError } from "react-hook-form";
import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  groupClassName?: string;
  containerClassName?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  error?: FieldError;
  // controlled?: boolean;
  id: string;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    placeholder,
    containerClassName = undefined,
    className,
    startIcon,
    endIcon,
    id,
    error,
    // controlled = false,
    ...rest
  },
  ref
) => {
  return (
    <Container className={containerClassName}>
      {!!startIcon &&
        cloneElement(startIcon, {
          className: "startIcon",
        })}

      {!!endIcon &&
        cloneElement(endIcon, {
          className: "endIcon",
        })}

      <input {...rest} ref={ref} id={id} />
      {!!placeholder && <label htmlFor={id}>{placeholder}</label>}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
