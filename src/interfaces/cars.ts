export type CarCategory = {
  id: string;
  name: string;
  description: string;
  created_at: string;
};

export type ICreateCategoryDTO = {
  name: string;
  description: string;
};

export type IUpdateCategoryDTO = {
  name: string;
  description: string;
};

export enum FuelTypes {
  GASOLINE = 'Gasolina',
  ALCOHOL = 'Álcool',
  DIESEL = 'Diesel',
  ELECTRIC = 'Elétrico',
  HYBRID = 'Híbrido',
  FLEX = 'Flex',
}

export enum TransmissionsType {
  MANUAL = 'Manual',
  AUTOMATIC = 'Automático',
}

export interface ICars {
  id: string;
  available: boolean;
  name: string;
  description: string;
  brand: string;
  fine_amount: number;
  daily_rate: number;
  license_plate: string;
  category: CarCategory;
  seats: number;
  max_velocity?: number;
  // fuel_type: 'Gasolina' | 'Álcool' | 'Híbrido' | 'Flex' | 'Elétrico';
  fuel_type: FuelTypes;
  transmission_type: TransmissionsType;
  horse_power?: number;
  created_at: string;
}

export type ICreateCarsDTO = Omit<ICars, 'id'>;

export type RGetAllCars = {
  totalCount: number;
  cars: ICars[];
};
