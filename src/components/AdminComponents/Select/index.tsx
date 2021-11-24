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
  onChange: (value: string) => void;
  value: string;
  id: string;
  options: { value: string; label: string }[];
  defaultValue?: string;
}

type IOptionSelected = {
  value: string;
  label: string;
};

export const AdminSelect = ({
  placeholder,
  startIcon,
  error,
  options,
  onChange,
  value,
}: SelectProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [optionSelected, setOptionSelected] = useState<IOptionSelected>();

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
    onChange(optionSelected?.value);
  }, [optionSelected, onChange]);

  useEffect(() => {
    if (value) {
      const option = options.find((option) => option.value === value);
      setOptionSelected(option);
    }
  }, [value, options]);

  return (
    <S.Container ref={containerRef}>
      <ClickAwayListener onClickAway={() => setIsOpen(false)}>
        <S.ContentContainer
          optionSelected={!!optionSelected?.value}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!!startIcon && startIcon}
          <span>{placeholder}</span>
          {!!optionSelected?.value && <p>{optionSelected?.label}</p>}
          <FiChevronDown className="select-icon" size={20} />
        </S.ContentContainer>
      </ClickAwayListener>
      {!!error && <span className="error">{error.message}</span>}

      <S.MenuOptionsContainer
        isOpen={isOpen}
        isReverse={isReverse}
        ref={menuRef}
      >
        {options.length > 0 &&
          options.map((item) => (
            <S.MenuItem
              key={item.value}
              isSelected={item.value === optionSelected?.value}
              onClick={() => setOptionSelected(item)}
            >
              {item.label}
            </S.MenuItem>
          ))}
        {optionSelected && (
          <S.ClearMenuItemSelected onClick={() => setOptionSelected(undefined)}>
            Limpar
          </S.ClearMenuItemSelected>
        )}
      </S.MenuOptionsContainer>
    </S.Container>
  );
};
