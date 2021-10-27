import {
  cloneElement,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactElement,
} from 'react';
import { FieldError } from 'react-hook-form';
import InputMask from 'react-input-mask';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  groupClassName?: string;
  containerClassName?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  error?: FieldError;
  filled?: boolean;
  mask?: string | Array<string | RegExp>;
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
    filled,
    mask,
    ...rest
  },
  ref
) => {
  return (
    <Container className={containerClassName} filled={filled} error={!!error}>
      {!!startIcon &&
        cloneElement(startIcon, {
          className: 'startIcon',
        })}

      {!!endIcon &&
        cloneElement(endIcon, {
          className: 'endIcon',
        })}
      {mask ? (
        <InputMask mask={mask} maskChar="" id={id} {...rest} />
      ) : (
        <input {...rest} ref={ref} id={id} />
      )}
      {!!placeholder && <label htmlFor={id}>{placeholder}</label>}
      {!!error && <span className="error">{error.message}</span>}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
