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

import { formValuesToCreate, formValuesToEdit } from './formValues';

interface UserFormProps {
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldErrors>;
  update?: boolean;
}

export const UsersForm = ({ control, errors, update }: UserFormProps) => {
  const formValues = !update ? formValuesToCreate : formValuesToEdit;
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
                  type={item.type}
                  placeholder={item.placeholder}
                  value={value}
                  onChange={onChange}
                  maxLength={item?.maxLenght}
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
