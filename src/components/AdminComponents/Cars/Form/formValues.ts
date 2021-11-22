interface FormValues {
  id: string;
  name:
    | 'name'
    | 'brand'
    | 'daily_rate'
    | 'fine_amount'
    | 'fuel_type'
    | 'license_plate'
    | 'seats'
    | 'transmission_type'
    | 'category_id'
    | 'available'
    | 'description';
  placeholder?: string;
  type: 'text' | 'select' | 'boolean' | 'textarea';
  options?: string[];
}

export const formValues: FormValues[] = [
  {
    id: '1',
    name: 'name',
    placeholder: 'Nome do carro',
    type: 'text',
  },
  {
    id: '2',
    name: 'brand',
    placeholder: 'Marca',
    type: 'text',
  },
  {
    id: '3',
    name: 'daily_rate',
    placeholder: 'Preço ao dia',
    type: 'text',
  },
  {
    id: '4',
    name: 'fine_amount',
    placeholder: 'Valor da multa ao dia',
    type: 'text',
  },
  {
    id: '5',
    name: 'seats',
    placeholder: 'Assentos',
    type: 'text',
  },
  {
    id: '6',
    name: 'fuel_type',
    placeholder: 'Tipo de combustível',
    type: 'select',
    options: ['Flex', 'Gasolina', 'Alcool', 'Elétrico', 'Híbrido'],
  },
  {
    id: '7',
    name: 'transmission_type',
    placeholder: 'Transmissão',
    type: 'select',
    options: ['Manual', 'Automática'],
  },
  {
    id: '8',
    name: 'category_id',
    placeholder: 'Categoria',
    type: 'select',
    options: ['Hatch', 'Sedan', 'SUV'],
  },
  {
    id: '9',
    name: 'description',
    placeholder: 'Descrição',
    type: 'textarea',
  },
  {
    id: '10',
    name: 'available',
    type: 'boolean',
    placeholder: 'Disponibilidade',
  },
];
