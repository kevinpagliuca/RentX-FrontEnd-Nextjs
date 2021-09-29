import React, { useState } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { FiEye, FiEyeOff, FiUser } from 'react-icons/fi';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { CarIcon, EnvelopeIcon, LockIcon } from '../../assets/Icons';

import { Button } from '../Form/Button';
import { Input } from '../Form/Input';

import { FormContainer } from './styles';
import { queryClient } from '../../services/queryClient';
import { api } from '../../services/api';
import { AccountCreateModal } from '../Modais/AccountCreate';
import { AxiosError } from 'axios';

type RegisterData = {
  name: string;
  email: string;
  CNH: string;
  password: string;
  password_confirmation: string;
};

const loginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  CNH: yup.number().required(),
  password: yup.string().required().min(6).max(14),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'Passwords must match'),
});

export const SignUpForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  const { formState, control, handleSubmit } = useForm<RegisterData>({
    resolver: yupResolver(loginFormSchema),
  });

  const isLoginValid = Object.keys(formState.errors).length !== 0;

  const userRegister = useMutation(
    async (user: RegisterData) => {
      try {
        await api.post('/register', user);
        toast.success('Registrado com sucesso!');
        setModalIsOpen(true);
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
    }
  );

  const onSubmit: SubmitHandler<RegisterData> = async (values) => {
    await userRegister.mutateAsync(values);
  };

  return (
    <FormContainer autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <h1>Estamos quase lá.</h1>
      <p>Faça seu login para começar uma experiência incrível.</p>
      <div>
        <button onClick={() => setModalIsOpen(true)}>abrir modal</button>
        <Controller
          control={control}
          name="name"
          render={({ field: { value = '', onChange, ref, name } }) => (
            <Input
              id="name"
              placeholder="Nome"
              startIcon={<FiUser size={24} />}
              value={value}
              name={name}
              onChange={onChange}
              ref={ref}
              filled={!formState.errors.name && value !== ''}
              error={formState.errors.name}
            />
          )}
        />

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

        <Controller
          control={control}
          name="CNH"
          render={({ field: { value = '', onChange, ref, name } }) => (
            <Input
              id="cnh"
              placeholder="CNH"
              startIcon={<CarIcon />}
              value={value}
              name={name}
              onChange={onChange}
              ref={ref}
              filled={!formState.errors.CNH && value !== ''}
              error={formState.errors.CNH}
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { value = '', onChange, ref, name } }) => (
            <Input
              id="password"
              placeholder="Senha"
              type={isVisiblePass ? 'text' : 'password'}
              required
              autoComplete="off"
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
              name={name}
              onChange={onChange}
              ref={ref}
              filled={!formState.errors.password && value !== ''}
              error={formState.errors.password}
            />
          )}
        />

        <Controller
          control={control}
          name="password_confirmation"
          render={({ field: { value = '', onChange, ref, name } }) => (
            <Input
              id="password"
              placeholder="Repetir senha"
              type={isVisiblePass ? 'text' : 'password'}
              required
              autoComplete="off"
              startIcon={<LockIcon />}
              value={value}
              name={name}
              onChange={onChange}
              ref={ref}
              filled={!formState.errors.password_confirmation && value !== ''}
              error={formState.errors.password_confirmation}
            />
          )}
        />

        <Button
          disabled={isLoginValid}
          containerClass="registerBtn"
          loading={formState.isSubmitting}
          loadingSize={25}
        >
          Cadastrar
        </Button>
      </div>
      <AccountCreateModal
        modalIsOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      />
    </FormContainer>
  );
};

const IconActive = ({ isVisiblePass, ...rest }: any) => {
  return isVisiblePass ? <FiEye {...rest} /> : <FiEyeOff {...rest} />;
};
