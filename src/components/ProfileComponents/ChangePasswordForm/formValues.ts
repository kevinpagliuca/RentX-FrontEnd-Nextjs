type FormValues = {
  id: string;
  name: 'current_password' | 'new_password' | 'new_password_confirmation';
  type: 'select' | 'text' | 'password';
  placeholder?: string;
  withEndIcon?: boolean;
};

export const formValues: FormValues[] = [
  {
    id: '1',
    name: 'current_password',
    type: 'password',
    placeholder: 'Senha atual',
  },
  {
    id: '2',
    name: 'new_password',
    type: 'password',
    placeholder: 'Nova senha',
    withEndIcon: true,
  },
  {
    id: '3',
    name: 'new_password_confirmation',
    type: 'password',
    placeholder: 'Repetir senha',
    withEndIcon: true,
  },
];
