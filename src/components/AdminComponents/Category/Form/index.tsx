import React from 'react';
import {
  Controller,
  Control,
  FieldValues,
  DeepMap,
  FieldErrors,
} from 'react-hook-form';

import { AdminInput } from 'components/AdminComponents/Input';

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
            if (item.type === 'text') {
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
                <AdminInput
                  id={item.name}
                  placeholder={item.placeholder}
                  value={value}
                  onChange={onChange}
                  filled={value !== ''}
                  error={errors[item.name]}
                />
              );
            }
          }}
        />
      ))}
    </React.Fragment>
  );
};
