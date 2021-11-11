import { IconType } from 'react-icons';
import { AiOutlineAppstore, AiOutlinePieChart } from 'react-icons/ai';

import { CarIcon } from 'assets/Icons';

interface ILinksValues {
  id: string;
  name: 'Dashboard' | 'Carros' | 'Categorias';
  tab: undefined | 'cars' | 'categories';
  Icon?: IconType;
  iconSize?: number;
}

export const linksValues: ILinksValues[] = [
  {
    id: '1',
    name: 'Dashboard',
    tab: undefined,
    Icon: AiOutlinePieChart,
    iconSize: 32,
  },
  {
    id: '2',
    name: 'Carros',
    tab: 'cars',
    Icon: CarIcon,
    iconSize: 28,
  },
  {
    id: '3',
    name: 'Categorias',
    tab: 'categories',
    Icon: AiOutlineAppstore,
    iconSize: 32,
  },
];
