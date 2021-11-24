import {
  cloneElement,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactElement,
} from 'react';
import { FieldError } from 'react-hook-form';

import * as S from './styles';

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  groupClassName?: string;
  containerClassName?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  error?: FieldError;
  filled?: boolean;
  id: string;
}
const TextAreaBase: ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = (
  {
    placeholder,
    containerClassName = undefined,
    startIcon,
    endIcon,
    id,
    error,
    filled,
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

      <textarea {...rest} id={id} ref={ref} />

      {!!placeholder && <label htmlFor={id}>{placeholder}</label>}
      {!!error && <span className="error">{error.message}</span>}
    </S.Container>
  );
};

export const TextArea = forwardRef(TextAreaBase);
