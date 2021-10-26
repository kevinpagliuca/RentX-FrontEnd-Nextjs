import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'components/Form/Button';
import { Input } from 'components/Form/Input';
import { useAuth } from 'contexts/AuthContext';
import { Controller, useForm } from 'react-hook-form';
import { UpdateProfileSchema } from 'shared/validators';
import { formValues } from './formValues';

export const ProfileDataForm = () => {
  const { user } = useAuth();
  const {
    control,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(UpdateProfileSchema),
  });

  useEffect(() => {
    reset({
      name: user?.name,
      CNH: user?.CNH,
      email: user?.email,
    });
  }, [user]);

  return (
    <React.Fragment>
      {formValues.map(({ StartIcon, ...item }) => (
        <Controller
          name={item.name}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              id={item.name}
              placeholder={item.placeholder}
              type={item.type}
              startIcon={<StartIcon size={item?.iconSize} />}
              value={value}
              onChange={onChange}
              filled={!errors[item.name] && value !== ''}
              error={errors[item.name]}
            />
          )}
        />
      ))}
      <Button>Salvar alterações</Button>
    </React.Fragment>
  );
};
