interface FormValues {
  id: string;
  name: 'name' | 'description';
  placeholder?: string;
  type: 'text' | 'textarea';
}

export const formValues: FormValues[] = [
  {
    id: '1',
    name: 'name',
    placeholder: 'Nome da categoria',
    type: 'text',
  },
  {
    id: '2',
    name: 'description',
    placeholder: 'Descrição',
    type: 'textarea',
  },
];
