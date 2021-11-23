import { ReactElement, useEffect, useRef, useState } from 'react';
import { FieldError } from 'react-hook-form';
import { FiChevronDown } from 'react-icons/fi';

import { ClickAwayListener } from '@material-ui/core';

import * as S from './styles';

interface SelectProps {
  placeholder?: string;
  groupClassName?: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  error?: FieldError;
  onChange: (value: string | number | readonly string[]) => void;
  value: string | number | readonly string[];
  id: string;
  options: string[];
  defaultValue?: string | number | readonly string[];
}

export const AdminSelect = ({
  placeholder,
  startIcon,
  error,
  options,
  onChange,
  ...rest
}: SelectProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState(rest.defaultValue || '');

  const [isReverse, setIsReverse] = useState(false);

  useEffect(() => {
    const onScroll = (e) => {
      const topOffset = containerRef?.current?.offsetTop;
      const relativeOffset = topOffset - e.target?.scrollTop;
      const windowHeight = window?.innerHeight;
      if (relativeOffset > windowHeight / 2.5) {
        setIsReverse(true);
      } else {
        setIsReverse(false);
      }
    };
    window.addEventListener('scroll', onScroll, true);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    onChange(optionSelected);
  }, [optionSelected, onChange]);

  return (
    <S.Container ref={containerRef}>
      <ClickAwayListener onClickAway={() => setIsOpen(false)}>
        <S.ContentContainer
          optionSelected={!!optionSelected}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!!startIcon && startIcon}
          <span>{placeholder}</span>
          {optionSelected && <p>{optionSelected}</p>}
          <FiChevronDown className="select-icon" size={20} />
        </S.ContentContainer>
      </ClickAwayListener>
      {!!error && <span className="error">{error.message}</span>}

      <S.MenuOptionsContainer
        isOpen={isOpen}
        isReverse={isReverse}
        ref={menuRef}
      >
        {options.map((item) => (
          <S.MenuItem
            key={item}
            isSelected={item === optionSelected}
            onClick={() => setOptionSelected(item)}
          >
            {item}
          </S.MenuItem>
        ))}
        {optionSelected && (
          <S.ClearMenuItemSelected onClick={() => setOptionSelected('')}>
            Limpar
          </S.ClearMenuItemSelected>
        )}
      </S.MenuOptionsContainer>
    </S.Container>
  );
};
