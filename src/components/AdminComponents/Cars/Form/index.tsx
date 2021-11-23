import React from 'react';
import {
  Controller,
  Control,
  FieldValues,
  DeepMap,
  FieldErrors,
} from 'react-hook-form';

import { AdminInput } from 'components/AdminComponents/Input';
import { AdminSelect } from 'components/AdminComponents/Select';
import { Switcher } from 'components/Switcher';

import { formValues } from './formValues';

interface UserFormProps {
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldErrors>;
}

export const CarsForm = ({ control, errors }: UserFormProps) => {
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
            } else if (item.type === 'select') {
              return (
                <AdminSelect
                  placeholder={item.placeholder}
                  id={item.name}
                  onChange={onChange}
                  value={value}
                  options={item.options}
                  error={errors[item.name]}
                />
              );
            } else if (item.type === 'boolean') {
              return (
                <Switcher
                  label={item.placeholder}
                  id={item.name}
                  onChange={onChange}
                  value={value}
                  placement="right"
                />
              );
            } else {
              return (
                <Switcher
                  label={item.placeholder}
                  id={item.name}
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
