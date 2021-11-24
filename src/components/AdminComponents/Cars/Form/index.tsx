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
import { useGetCategories } from 'hooks/useCategory';

import { formValues } from './formValues';

interface UserFormProps {
  control: Control<FieldValues>;
  errors: DeepMap<FieldValues, FieldErrors>;
}

export const CarsForm = ({ control, errors }: UserFormProps) => {
  const { categoriesOptions } = useGetCategories();

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
                  maxLength={item.maxLength}
                />
              );
            } else if (item.type === 'select' && item.name === 'category_id') {
              return (
                <AdminSelect
                  placeholder={item.placeholder}
                  id={item.name}
                  onChange={onChange}
                  value={value}
                  options={categoriesOptions || []}
                  error={errors[item.name]}
                />
              );
            } else if (item.type === 'select') {
              return (
                <AdminSelect
                  id={item.name}
                  placeholder={item.placeholder}
                  onChange={onChange}
                  value={value}
                  options={item.options}
                  error={errors[item.name]}
                />
              );
            } else if (item.type === 'boolean') {
              return (
                <Switcher
                  id={item.name}
                  label={item.placeholder}
                  onChange={onChange}
                  value={value}
                  placement="right"
                />
              );
            } else if (item.type === 'textarea') {
              return (
                <AdminInput
                  id={item.name}
                  placeholder={item.placeholder}
                  value={value}
                  onChange={onChange}
                  filled={value !== ''}
                  error={errors[item.name]}
                  maxLength={item.maxLength}
                />
              );
            }
          }}
        />
      ))}
    </React.Fragment>
  );
};
