import { ChangeEvent } from 'react';
import { IconType } from 'react-icons';
import { FiUser } from 'react-icons/fi';

import { CarIcon, EnvelopeIcon } from 'assets/Icons';
import { TextMask } from 'shared/RegEx';

type FormValues = {
  id: string;
  name: 'name' | 'username' | 'email' | 'driver_license';
  type: 'text' | 'email';
  placeholder?: string;
  StartIcon: IconType;
  iconSize?: number;
  maxLength?: number;
  regex?: (event: ChangeEvent<HTMLInputElement>) => string;
  mask?: string;
};

export const formValues: FormValues[] = [
  {
    id: '1',
    name: 'name',
    placeholder: 'Nome completo',
    StartIcon: FiUser,
    type: 'text',
    iconSize: 24,
  },
  {
    id: '2',
    name: 'username',
    placeholder: 'Nome de usuário',
    StartIcon: FiUser,
    type: 'text',
    iconSize: 24,
    regex: TextMask.usernameReplacer,
    maxLength: 20,
  },
  {
    id: '3',
    name: 'email',
    placeholder: 'Email',
    StartIcon: EnvelopeIcon as IconType,
    type: 'email',
  },
  {
    id: '4',
    name: 'driver_license',
    placeholder: 'CNH',
    type: 'text',
    StartIcon: CarIcon as IconType,
    mask: '99999999999',
  },
];
