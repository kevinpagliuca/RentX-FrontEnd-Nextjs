import {
  cloneElement,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactElement,
} from 'react';
import { FieldError } from 'react-hook-form';
import InputMask from 'react-input-mask';

import * as S from './styles';

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
    <S.Container className={containerClassName} filled={filled} error={!!error}>
      {!!startIcon &&
        cloneElement(startIcon, {
          className: 'startIcon',
        })}

      {!!endIcon &&
        cloneElement(endIcon, {
          className: 'endIcon',
        })}
      {mask ? (
        <InputMask mask={mask} maskChar="" id={id} {...rest} ref={ref} />
      ) : (
        <input {...rest} id={id} ref={ref} />
      )}
      {!!placeholder && <label htmlFor={id}>{placeholder}</label>}
      {!!error && <span className="error">{error.message}</span>}
    </S.Container>
  );
};

export const AdminInput = forwardRef(InputBase);
