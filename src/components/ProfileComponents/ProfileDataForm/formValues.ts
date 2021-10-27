import { CarIcon, EnvelopeIcon } from 'assets/Icons';
import { IconType } from 'react-icons';
import { FiUser } from 'react-icons/fi';

type FormValues = {
  id: string;
  name: 'name' | 'email' | 'CNH';
  type: 'text' | 'email';
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
    type: 'text',
    iconSize: 24,
  },
  {
    id: '2',
    name: 'email',
    placeholder: 'Email',
    StartIcon: EnvelopeIcon as IconType,
    type: 'email',
  },
  {
    id: '3',
    name: 'CNH',
    placeholder: 'CNH',
    type: 'text',
    StartIcon: CarIcon as IconType,
  },
];
