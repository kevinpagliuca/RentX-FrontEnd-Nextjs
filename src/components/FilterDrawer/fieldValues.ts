import { IconType } from 'react-icons';

import { LeafIcon, LightningIcon, WaterIcon } from 'assets/Icons';

type FuelValues = {
  id: string;
  name: 'gasoline' | 'eletric' | 'alcohol';
  placeholder: 'Gasolina' | 'Elétrico' | 'Álcool';
  Icon: IconType;
};

type TransmissionValues = {
  id: string;
  name: 'automatic' | 'manual';
  placeholder: 'Automático' | 'Manual';
};

export const FuelValues: FuelValues[] = [
  {
    id: '1',
    name: 'gasoline',
    placeholder: 'Gasolina',
    Icon: WaterIcon,
  },
  {
    id: '2',
    name: 'eletric',
    placeholder: 'Elétrico',
    Icon: LightningIcon,
  },
  {
    id: '3',
    name: 'alcohol',
    placeholder: 'Álcool',
    Icon: LeafIcon,
  },
];

export const TransmissionValues: TransmissionValues[] = [
  {
    id: '1',
    name: 'automatic',
    placeholder: 'Automático',
  },
  {
    id: '2',
    name: 'manual',
    placeholder: 'Manual',
  },
];
