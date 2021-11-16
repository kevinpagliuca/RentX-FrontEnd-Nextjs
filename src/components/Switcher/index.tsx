import React from 'react';
import ReactSwitch from 'react-switch';

import * as S from './styles';

interface SwitcherProps {
  label: string;
  placement?: 'left' | 'right';
  onChange: () => void;
  id: string;
  value: boolean;
}

export const Switcher = ({
  label,
  placement = 'left',
  id,
  onChange,
  value,
}: SwitcherProps) => {
  return (
    <S.Container>
      {label && placement === 'left' && <label htmlFor={id}>{label}</label>}
      <ReactSwitch
        id={id}
        onChange={onChange}
        checked={value}
        checkedIcon={false}
        uncheckedIcon={false}
        width={50}
        handleDiameter={25}
        offColor="#7A7A80"
        onColor="#DC1637"
      />
      {label && placement === 'right' && <label htmlFor={id}>{label}</label>}
    </S.Container>
  );
};
