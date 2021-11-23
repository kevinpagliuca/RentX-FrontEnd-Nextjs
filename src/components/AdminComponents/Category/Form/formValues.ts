interface FormValues {
  id: string;
  name: 'name' | 'description';
  placeholder?: string;
}

export const formValues: FormValues[] = [
  {
    id: '1',
    name: 'name',
    placeholder: 'Nome completo',
  },
  {
    id: '2',
    name: 'description',
    placeholder: 'Descrição',
  },
];
