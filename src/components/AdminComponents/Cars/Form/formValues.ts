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
  options?: { value: string; label: string }[];
  maxLength?: number;
}

export const formValues: FormValues[] = [
  {
    id: '1',
    name: 'name',
    placeholder: 'Nome do carro',
    type: 'text',
    maxLength: 200,
  },
  {
    id: '2',
    name: 'brand',
    placeholder: 'Marca',
    type: 'text',
    maxLength: 200,
  },
  {
    id: '39',
    name: 'license_plate',
    placeholder: 'Placa',
    type: 'text',
    maxLength: 8,
  },
  {
    id: '3',
    name: 'daily_rate',
    placeholder: 'Preço ao dia',
    type: 'text',
    maxLength: 6,
  },
  {
    id: '4',
    name: 'fine_amount',
    placeholder: 'Valor da multa ao dia',
    type: 'text',
    maxLength: 5,
  },
  {
    id: '5',
    name: 'seats',
    placeholder: 'Assentos',
    type: 'text',
    maxLength: 3,
  },
  {
    id: '6',
    name: 'fuel_type',
    placeholder: 'Tipo de combustível',
    type: 'select',
    options: [
      { value: 'Flex', label: 'Flex' },
      { value: 'Gasolina', label: 'Gasolina' },
      { value: 'Alcool', label: 'Alcool' },
      { value: 'Elétrico', label: 'Elétrico' },
      { value: 'Híbrido', label: 'Híbrido' },
    ],
  },
  {
    id: '7',
    name: 'transmission_type',
    placeholder: 'Transmissão',
    type: 'select',
    options: [
      { value: 'Manual', label: 'Manual' },
      { value: 'Automática', label: 'Automática' },
    ],
  },
  {
    id: '8',
    name: 'category_id',
    placeholder: 'Categoria',
    type: 'select',
  },
  {
    id: '9',
    name: 'description',
    placeholder: 'Descrição',
    type: 'textarea',
    maxLength: 400,
  },
  {
    id: '10',
    name: 'available',
    type: 'boolean',
    placeholder: 'Disponibilidade',
  },
];
