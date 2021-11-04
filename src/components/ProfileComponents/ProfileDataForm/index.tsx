import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Form/Button';
import { Input } from 'components/Form/Input';
import { useAuth } from 'contexts/AuthContext';
import { IUserUpdateRequestDTO } from 'interfaces/auth';
import { updateProfileFormSchema } from 'shared/validators';

import { formValues } from './formValues';
import * as S from './styles';

export const ProfileDataForm = () => {
  const { user, updateUser } = useAuth();
  const {
    control,
    formState: { errors, isSubmitting },
    reset,
    handleSubmit,
  } = useForm<IUserUpdateRequestDTO>({
    resolver: yupResolver(updateProfileFormSchema),
  });

  useEffect(() => {
    reset({
      name: user?.name,
      driver_license: user?.driver_license,
      email: user?.email,
      username: user?.username,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleUpdateUser: SubmitHandler<IUserUpdateRequestDTO> = async (
    values
  ) => {
    await updateUser(values);
  };

  return (
    <S.FormContainer onSubmit={handleSubmit(handleUpdateUser)}>
      {formValues.map(({ StartIcon, ...item }) => (
        <Controller
          key={item.id}
          name={item.name}
          control={control}
          render={({ field: { value = '', onChange } }) => (
            <Input
              id={item.name}
              placeholder={item.placeholder}
              type={item.type}
              startIcon={<StartIcon size={item?.iconSize} />}
              value={value}
              onChange={(e) =>
                onChange(item.regex ? item.regex(e) : e.target.value)
              }
              onBlur={(e) => onChange(e.target.value.trim())}
              maxLength={item.maxLength}
              mask={item.mask}
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
