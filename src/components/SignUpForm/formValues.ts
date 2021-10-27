import { IconType } from 'react-icons';
import { FiUser } from 'react-icons/fi';

import { CarIcon, EnvelopeIcon, LockIcon } from 'assets/Icons';

type FormValues = {
  id: string;
  type: 'text' | 'email' | 'password';
  name:
    | 'name'
    | 'email'
    | 'driver_license'
    | 'password'
    | 'password_confirmation';
  mask?: string;
  placeholder?: string;
  StartIcon: IconType;
  iconSize?: number;
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
    name: 'email',
    type: 'email',
    StartIcon: EnvelopeIcon as IconType,
    placeholder: 'E-mail',
  },
  {
    id: '3',
    name: 'driver_license',
    type: 'text',
    mask: '99999999999',
    StartIcon: CarIcon as IconType,
    placeholder: 'CNH',
  },
  {
    id: '4',
    name: 'password',
    type: 'password',
    StartIcon: LockIcon as IconType,
    placeholder: 'Senha',
  },
  {
    id: '5',
    name: 'password_confirmation',
    type: 'password',
    StartIcon: LockIcon as IconType,
    placeholder: 'Repetir senha',
  },
];
