interface FormValues {
  id: string;
  name: 'name' | 'email' | 'driver_license' | 'username' | 'is_admin';
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
    name: 'username',
    placeholder: 'Nome de usuário',
  },
  {
    id: '3',
    name: 'email',
    placeholder: 'E-mail',
  },
  {
    id: '4',
    name: 'driver_license',
    placeholder: 'CNH',
  },
  {
    id: '5',
    name: 'is_admin',
  },
];
