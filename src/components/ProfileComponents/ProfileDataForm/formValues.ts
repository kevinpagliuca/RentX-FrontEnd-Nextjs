import { CarIcon, EnvelopeIcon } from 'assets/Icons';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { FiUser } from 'react-icons/fi';

type FormValues = {
  id: string;
  name: 'name' | 'email' | 'CNH';
  placeholder?: string;
  StartIcon: IconType;
  iconSize?: number;
};

export const formValues: FormValues[] = [
  {
    id: '1',
    name: 'name',
    placeholder: 'Nome completo',
    StartIcon: FiUser,
    iconSize: 24,
  },
  {
    id: '2',
    name: 'email',
    placeholder: 'Email',
    StartIcon: EnvelopeIcon as IconType,
  },
  {
    id: '3',
    name: 'CNH',
    placeholder: 'CNH',
    StartIcon: CarIcon as IconType,
  },
];
