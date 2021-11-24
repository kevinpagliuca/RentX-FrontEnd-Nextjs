interface FormValues {
  id: string;
  name:
    | 'name'
    | 'email'
    | 'driver_license'
    | 'username'
    | 'is_admin'
    | 'password'
    | 'password_confirmation';
  placeholder?: string;
  type?: 'text' | 'password';
  maxLenght?: number;
}

export const formValuesToCreate: FormValues[] = [
  {
    id: '1',
    name: 'name',
    placeholder: 'Nome completo',
    type: 'text',
  },
  {
    id: '2',
    name: 'username',
    placeholder: 'Nome de usuário',
    type: 'text',
    maxLenght: 20,
  },
  {
    id: '3',
    name: 'email',
    placeholder: 'E-mail',
    type: 'text',
  },
  {
    id: '4',
    name: 'driver_license',
    placeholder: 'CNH',
    type: 'text',
    maxLenght: 11,
  },
  {
    id: '5',
    name: 'password',
    placeholder: 'Senha',
    type: 'password',
  },
  {
    id: '6',
    name: 'password_confirmation',
    placeholder: 'Confirmar senha',
    type: 'password',
  },
];

export const formValuesToEdit: FormValues[] = [
  {
    id: '1',
    name: 'name',
    placeholder: 'Nome completo',
    type: 'text',
  },
  {
    id: '2',
    name: 'username',
    placeholder: 'Nome de usuário',
    type: 'text',
    maxLenght: 20,
  },
  {
    id: '3',
    name: 'email',
    placeholder: 'E-mail',
    type: 'text',
  },
  {
    id: '4',
    name: 'driver_license',
    placeholder: 'CNH',
    type: 'text',
    maxLenght: 11,
  },
  {
    id: '5',
    name: 'is_admin',
  },
];
