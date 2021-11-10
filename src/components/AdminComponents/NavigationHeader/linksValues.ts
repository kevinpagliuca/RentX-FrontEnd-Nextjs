import { IconType } from 'react-icons';
import { AiOutlineAppstore, AiOutlinePieChart } from 'react-icons/ai';

import { CarIcon } from 'assets/Icons';

interface ILinksValues {
  id: string;
  name: 'Dashboard' | 'Carros' | 'Categorias';
  link: '/admin' | '/admin/cars' | '/admin/categories';
  activeClassName: 'active';
  Icon?: IconType;
  iconSize?: number;
  shouldMatchExactHref?: boolean;
}

export const linksValues: ILinksValues[] = [
  {
    id: '1',
    name: 'Dashboard',
    link: '/admin',
    activeClassName: 'active',
    Icon: AiOutlinePieChart,
    iconSize: 32,
    shouldMatchExactHref: true,
  },
  {
    id: '2',
    name: 'Carros',
    link: '/admin/cars',
    activeClassName: 'active',
    Icon: CarIcon,
    iconSize: 28,
  },
  {
    id: '3',
    name: 'Categorias',
    link: '/admin/categories',
    activeClassName: 'active',
    Icon: AiOutlineAppstore,
    iconSize: 32,
  },
];
