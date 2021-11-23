import React from 'react';
import {
  Controller,
  Control,
  FieldValues,
  DeepMap,
  FieldErrors,
} from 'react-hook-form';

import { AdminInput } from 'components/AdminComponents/Input';
import { Switcher } from 'components/Switcher';

import { formValues } from './formValues';

interface UserFormProps {
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldErrors>;
}

export const CategoryForm = ({ control, errors }: UserFormProps) => {
  return (
    <React.Fragment>
      {formValues.map((item) => (
        <Controller
          key={item.id}
          name={item.name}
          control={control}
          render={({ field: { value, onChange } }) => {
            if (item.name !== 'is_admin') {
              return (
                <AdminInput
                  id={item.name}
                  placeholder={item.placeholder}
                  value={value}
                  onChange={onChange}
                  filled={value !== ''}
                  error={errors[item.name]}
                />
              );
            } else {
              return (
                <Switcher
                  label="Administrador"
                  id="is_admin"
                  onChange={onChange}
                  value={value}
                  placement="right"
                />
              );
            }
          }}
        />
      ))}
    </React.Fragment>
  );
};
