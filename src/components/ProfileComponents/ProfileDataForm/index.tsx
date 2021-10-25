import { Button } from 'components/Form/Button';
import { Input } from 'components/Form/Input';
import { Controller, useForm } from 'react-hook-form';
import { formValues } from './formValues';

export const ProfileDataForm = () => {
  const {
    control,
    formState: { errors },
  } = useForm();
  return (
    <>
      {formValues.map(({ StartIcon, ...item }) => (
        <Controller
          name={item.name}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              id={item.name}
              placeholder={item.placeholder}
              type="text"
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
    </>
  );
};
