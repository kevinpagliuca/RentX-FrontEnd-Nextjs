import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { EnvelopeIcon } from '../../assets/Icons';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../Form/Button';
import { Input } from '../Form/Input';
import * as S from './styles';

type ForgotPasswordredentialsType = {
  email: string;
  password: string;
};

const loginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
});

export const ForgotPasswordForm = () => {
  const { signIn } = useAuth();
  const { formState, control, handleSubmit, watch } =
    useForm<ForgotPasswordredentialsType>({
      resolver: yupResolver(loginFormSchema),
    });
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const watchEmail = watch('email');

  const isLoginValid =
    watchEmail !== '' && !formState.errors.email && !formState.errors.password
      ? false
      : true;

  const onSubmit: SubmitHandler<ForgotPasswordredentialsType> = async (
    values
  ) => {
    // await signIn(values);
  };

  return (
    <S.FormContainer autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <h1>Recuperar senha</h1>
      <p>Insira seu e-mail para receber um link de recuperação</p>

      <div>
        <Controller
          control={control}
          name="email"
          render={({ field: { value = '', onChange, ref, name } }) => (
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              startIcon={<EnvelopeIcon />}
              value={value}
              name={name}
              onChange={onChange}
              ref={ref}
              filled={!formState.errors.email && value !== ''}
              error={formState.errors.email}
            />
          )}
        />

        <Button
          disabled={isLoginValid}
          containerClass="loginBtn"
          loading={formState.isSubmitting}
          loadingSize={25}
        >
          Enviar
        </Button>
      </div>
    </S.FormContainer>
  );
};

const IconActive = ({ isVisiblePass, ...rest }: any) => {
  return isVisiblePass ? <FiEye {...rest} /> : <FiEyeOff {...rest} />;
};
