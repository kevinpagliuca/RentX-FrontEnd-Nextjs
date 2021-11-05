import React, { useState } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';

import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { IUserRegisterFormData } from 'interfaces/forms';
import { api } from 'services/client';
import { queryClient } from 'services/reactQuery/queryClient';
import { registerFormSchema } from 'shared/validators';
import { ToastifyCustomMessage } from 'styles/ToastifyCustomMessage';

import { Button } from '../Form/Button';
import { Input } from '../Form/Input';
import { AccountCreateModal } from '../Modais/AccountCreate';
import { formValues } from './formValues';
import { FormContainer } from './styles';

export const SignUpForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isVisiblePass, setIsVisiblePass] = useState(false);

  const {
    formState: { errors, isSubmitting },
    control,
    handleSubmit,
  } = useForm<IUserRegisterFormData>({
    resolver: yupResolver(registerFormSchema),
  });

  const isLoginValid = Object.keys(errors).length !== 0;

  const userRegister = useMutation(
    async (user: IUserRegisterFormData) => {
      try {
        await api.post('/users', user);
        toast.success(
          ToastifyCustomMessage({ message: 'Registrado com sucesso!' })
        );
        setModalIsOpen(true);
      } catch (error) {
        toast.error(
          ToastifyCustomMessage({ message: error.response.data.message }),
          {
            className: 'customToast_dark',
          }
        );
      }
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
      },
    }
  );

  const onSubmit: SubmitHandler<IUserRegisterFormData> = async (values) => {
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
                onChange={(e) =>
                  onChange(item.regex ? item.regex(e) : e.target.value)
                }
                onBlur={() => onChange(value.trim())}
                maxLength={item.maxLength}
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconActive = ({ isVisiblePass, ...rest }: any) => {
  return isVisiblePass ? <FiEye {...rest} /> : <FiEyeOff {...rest} />;
};
