import React, { useState } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { Button } from '../Form/Button';
import { Input } from '../Form/Input';

import { queryClient } from 'services/reactQuery/queryClient';
import { AccountCreateModal } from '../Modais/AccountCreate';
import { formValues } from './formValues';
import { api } from 'services/client';

import { FormContainer } from './styles';
import { ToastifyCustomMessage } from 'styles/ToastifyCustomMessage';
type RegisterData = {
  name: string;
  email: string;
  driver_license: string;
  password: string;
  password_confirmation: string;
};

const loginFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  driver_license: yup.string().required(),
  password: yup.string().required().min(6).max(14),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'Passwords must match'),
});

export const SignUpForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  const {
    formState: { errors, isSubmitting },
    control,
    handleSubmit,
  } = useForm<RegisterData>({
    resolver: yupResolver(loginFormSchema),
  });

  const isLoginValid = Object.keys(errors).length !== 0;

  const userRegister = useMutation(
    async (user: RegisterData) => {
      try {
        await api.post('/register', user);
        toast.success(
          <ToastifyCustomMessage message="Registrado com sucesso!" />
        );
        setModalIsOpen(true);
      } catch (error: any) {
        toast.error(<ToastifyCustomMessage message={error.message} />);
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
        {formValues.map(({ StartIcon, ...item }) => (
          <Controller
            key={item.id}
            control={control}
            name={item.name}
            render={({ field: { value = '', onChange } }) => (
              <Input
                id={item.name}
                placeholder={item.placeholder}
                startIcon={<StartIcon size={item.iconSize} />}
                type={
                  item.name.includes('password') && isVisiblePass
                    ? 'text'
                    : item.name.includes('password') && !isVisiblePass
                    ? 'password'
                    : item.type
                }
                mask={item.mask}
                endIcon={
                  item.name === 'password' && (
                    <IconActive
                      size={24}
                      id="passwordIcon"
                      onClick={() => setIsVisiblePass(!isVisiblePass)}
                      isVisiblePass={isVisiblePass}
                    />
                  )
                }
                value={value}
                onChange={onChange}
                filled={!errors[item.name] && value !== ''}
                error={errors[item.name]}
              />
            )}
          />
        ))}
        <Button
          disabled={isLoginValid}
          containerClass="registerBtn"
          loading={isSubmitting}
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
