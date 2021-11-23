import {
  cloneElement,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  MouseEvent,
  ReactElement,
  useState,
} from 'react';
import { FieldError } from 'react-hook-form';

import { Fade } from '@material-ui/core';

import * as S from './styles';

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  groupClassName?: string;
  containerClassName?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  error?: FieldError;
  filled?: boolean;
  id: string;
  options: string[];
}
const SelectBase: ForwardRefRenderFunction<HTMLInputElement, SelectProps> = (
  {
    placeholder,
    containerClassName = undefined,
    startIcon,
    endIcon,
    id,
    error,
    filled,
    options,
    ...rest
  },
  ref
) => {
  const [optionSelected, setOptionSelected] = useState(rest.defaultValue || '');
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectItem = (item: string) => {
    setOptionSelected(item);
    handleClose();
  };

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
      <input hidden ref={ref} value={rest.value} />
      <div onClick={handleClick} id={id}>
        {optionSelected && (
          <span className="optionSelected">{optionSelected}</span>
        )}
      </div>

      {options && (
        <S.SelectMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          parentWidth={anchorEl?.clientWidth}
          PopoverClasses={{ paper: 'menuItem' }}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          TransitionComponent={Fade}
        >
          {options.map((item) => (
            <S.SelectMenuItem key={item} onClick={() => handleSelectItem(item)}>
              {item}
            </S.SelectMenuItem>
          ))}
        </S.SelectMenu>
      )}
      {!!placeholder && <label htmlFor={id}>{placeholder}</label>}
      {!!error && <span className="error">{error.message}</span>}
    </S.Container>
  );
};

export const AdminSelect = forwardRef(SelectBase);
