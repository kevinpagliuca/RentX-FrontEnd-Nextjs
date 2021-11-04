import { ChangeEvent } from 'react';
import { IconType } from 'react-icons';
import { FiAtSign, FiUser } from 'react-icons/fi';

import { CarIcon, EnvelopeIcon, LockIcon } from 'assets/Icons';
import { TextMask } from 'shared/RegEx';

type FormValues = {
  id: string;
  type: 'text' | 'email' | 'password';
  name:
    | 'name'
    | 'email'
    | 'username'
    | 'driver_license'
    | 'password'
    | 'password_confirmation';
  mask?: string;
  placeholder?: string;
  StartIcon: IconType;
  iconSize?: number;
  maxLength?: number;
  regex?: (event: ChangeEvent<HTMLInputElement>) => string;
};

export const formValues: FormValues[] = [
  {
    id: '1',
    name: 'name',
    type: 'text',
    StartIcon: FiUser,
    placeholder: 'Nome',
    iconSize: 24,
  },
  {
    id: '2',
    name: 'username',
    type: 'text',
    StartIcon: FiAtSign,
    placeholder: 'Nome de usuário',
    iconSize: 24,
    regex: TextMask.usernameReplacer,
    maxLength: 20,
  },
  {
    id: '3',
    name: 'email',
    type: 'email',
    StartIcon: EnvelopeIcon as IconType,
    placeholder: 'E-mail',
    regex: TextMask.emailReplacer,
  },
  {
    id: '4',
    name: 'driver_license',
    type: 'text',
    mask: '99999999999',
    StartIcon: CarIcon as IconType,
    placeholder: 'CNH',
  },
  {
    id: '5',
    name: 'password',
    type: 'password',
    StartIcon: LockIcon as IconType,
    placeholder: 'Senha',
  },
  {
    id: '6',
    name: 'password_confirmation',
    type: 'password',
    StartIcon: LockIcon as IconType,
    placeholder: 'Repetir senha',
  },
];
