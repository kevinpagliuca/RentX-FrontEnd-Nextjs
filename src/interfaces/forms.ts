export interface IFilterCarsFormData {
  carName: string;
  priceRange: number[];
  type?: {
    eletric?: boolean;
    gasoline?: boolean;
    alcohol?: boolean;
  };
  transmission?: {
    automatic?: boolean;
    manual?: boolean;
  };
}
