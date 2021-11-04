type CarCategory = {
  id: string;
  name: string;
  description: string;
  created_at: string;
};

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
  fuel_type: 'Gasolina' | 'Álcool' | 'Híbrido' | 'Flex' | 'Elétrico';
  transmission_type: 'Manual' | 'Automático';
  horse_power?: number;
  created_at: string;
}

export type ICreateCarsDTO = Omit<ICars, 'id'>;

export type RGetAllCars = {
  totalCount: number;
  cars: ICars[];
};
