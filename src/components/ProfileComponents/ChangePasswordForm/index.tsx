import { LockIcon } from 'assets/Icons';
import { Button } from 'components/Form/Button';
import { Input } from 'components/Form/Input';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { formValues } from './formValues';

export const ChangePasswordForm = () => {
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const {
    control,
    formState: { errors },
  } = useForm();

  return (
    <>
      {formValues.map((item) => (
        <Controller
          key={item.id}
          control={control}
          name={item.name}
          render={({ field: { value, onChange } }) => (
            <Input
              id={item.name}
              placeholder={item.placeholder}
              type={item.withEndIcon && isVisiblePass ? 'text' : item.type}
              required
              autoComplete="off"
              startIcon={<LockIcon />}
              endIcon={
                item.withEndIcon ? (
                  <IconActive
                    size={24}
                    id="passwordIcon"
                    onClick={() => setIsVisiblePass(!isVisiblePass)}
                    isVisiblePass={isVisiblePass}
                    style={{ cursor: 'pointer' }}
                  />
                ) : undefined
              }
              value={value}
              onChange={onChange}
              filled={!errors[item.name] && value !== ''}
              error={errors[item.name]}
            />
          )}
        />
      ))}
      <Button>Salvar alterações</Button>
    </>
  );
};

const IconActive = ({ isVisiblePass, ...rest }: any) => {
  return isVisiblePass ? <FiEye {...rest} /> : <FiEyeOff {...rest} />;
};
