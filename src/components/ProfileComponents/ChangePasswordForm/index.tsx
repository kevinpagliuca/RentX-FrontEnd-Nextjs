import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { LockIcon } from 'assets/Icons';
import { Button } from 'components/Form/Button';
import { Input } from 'components/Form/Input';
import { useAuth } from 'contexts/AuthContext';
import { IUserChangePasswordFormData } from 'interfaces/forms';
import { changePasswordFormSchema } from 'shared/validators';

import { formValues } from './formValues';
import * as S from './styles';

export const ChangePasswordForm = () => {
  const { changePassword } = useAuth();
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const {
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<IUserChangePasswordFormData>({
    resolver: yupResolver(changePasswordFormSchema),
  });

  const handleChangePassword: SubmitHandler<IUserChangePasswordFormData> =
    async (values) => {
      try {
        await changePassword(values);
        reset();
      } catch {}
    };

  return (
    <S.FormContainer onSubmit={handleSubmit(handleChangePassword)}>
      {formValues.map((item) => (
        <Controller
          key={item.id}
          control={control}
          name={item.name}
          render={({ field: { value = '', onChange } }) => (
            <Input
              id={item.name}
              placeholder={item.placeholder}
              type={item.withEndIcon && isVisiblePass ? 'text' : item.type}
              required
              autoComplete="off"
              startIcon={<LockIcon />}
              endIcon={
                item.withEndIcon ? (
                  <IconActive
                    size={24}
                    id="passwordIcon"
                    onClick={() => setIsVisiblePass(!isVisiblePass)}
                    isVisiblePass={isVisiblePass}
                    style={{ cursor: 'pointer' }}
                  />
                ) : undefined
              }
              value={value}
              onChange={onChange}
              filled={!errors[item.name] && value !== ''}
              error={errors[item.name]}
            />
          )}
        />
      ))}
      <Button type="submit" loading={isSubmitting}>
        Salvar alterações
      </Button>
    </S.FormContainer>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconActive = ({ isVisiblePass, ...rest }: any) => {
  return isVisiblePass ? <FiEye {...rest} /> : <FiEyeOff {...rest} />;
};
