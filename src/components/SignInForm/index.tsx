import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { SubmitHandler } from 'react-hook-form';
import { IconBaseProps } from 'react-icons';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import Link from 'next/link';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { EnvelopeIcon, LockIcon } from '../../assets/Icons';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../Form/Button';
import { Input } from '../Form/Input';
import * as S from './styles';

type LoginCredentialsType = {
  email: string;
  password: string;
};

const loginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(6).max(14),
});

export const SignInForm = () => {
  const { signIn } = useAuth();
  const {
    formState: { errors, isSubmitting },
    control,
    handleSubmit,
  } = useForm<LoginCredentialsType>({
    resolver: yupResolver(loginFormSchema),
  });
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  const isLoginValid = !Object.keys(errors).length ? false : true;

  const onSubmit: SubmitHandler<LoginCredentialsType> = async (values) => {
    await signIn(values);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h1>Estamos quase lá.</h1>
      <p>Faça seu login para começar uma experiência incrível.</p>

      <div>
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange } }) => (
            <Input
              id="email"
              type="email"
              placeholder="E-mail"
              startIcon={<EnvelopeIcon />}
              value={value}
              onChange={onChange}
              filled={!errors['email'] && value !== ''}
              error={errors['email']}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange } }) => (
            <Input
              id="password"
              placeholder="Senha"
              type={isVisiblePass ? 'text' : 'password'}
              required
              startIcon={<LockIcon />}
              endIcon={
                <IconActive
                  size={24}
                  id="passwordIcon"
                  onClick={() => setIsVisiblePass(!isVisiblePass)}
                  isVisiblePass={isVisiblePass}
                />
              }
              value={value}
              onChange={onChange}
              filled={!errors['password'] && value !== ''}
              error={errors['password']}
            />
          )}
        />

        <Link href="/forgotPassword">
          <a className="forgetPassTxt">Esqueci minha senha</a>
        </Link>

        <Button
          disabled={isLoginValid}
          containerClass="sendBtn"
          loading={isSubmitting}
          loadingSize={25}
        >
          Login
        </Button>
        <Link href="/register" passHref>
          <a>
            <Button variant="transparent">Criar conta gratuita</Button>
          </a>
        </Link>
      </div>
    </S.FormContainer>
  );
};

interface IconActiveProps extends IconBaseProps {
  isVisiblePass: boolean;
}

const IconActive = ({ isVisiblePass, ...rest }: IconActiveProps) => {
  return isVisiblePass ? <FiEye {...rest} /> : <FiEyeOff {...rest} />;
};
