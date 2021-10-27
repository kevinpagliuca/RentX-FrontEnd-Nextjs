import { Controller, useForm } from 'react-hook-form';
import { FiX } from 'react-icons/fi';

import { ButtonBase } from '@material-ui/core';
import { CarIcon } from 'assets/Icons';
import { Button } from 'components/Form/Button';
import { Input } from 'components/Form/Input';
import { IFilterCarsFormData } from 'interfaces/forms';
import { TextMask } from 'shared/RegEx';

import { FuelValues, TransmissionValues } from './fieldValues';
import * as S from './styles';

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const FilterDrawer = ({ open, onClose, onOpen }: FilterDrawerProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm<IFilterCarsFormData>({
    defaultValues: {
      priceRange: [500, 2500],
    },
  });

  const priceRangeValue = watch('priceRange');

  const handleResetForm = () => {
    reset({
      priceRange: [0, 5000],
    });
  };

  return (
    <S.Container onOpen={onOpen} open={open} onClose={onClose} anchor="right">
      <S.ContentContainer>
        <S.TitleContainer>
          <h1>Filtro</h1>
          <FiX size={32} onClick={onClose} />
        </S.TitleContainer>

        <S.FormContainer onSubmit={handleSubmit((data) => console.log(data))}>
          <Controller
            name="carName"
            control={control}
            render={({ field: { value = '', onChange } }) => (
              <Input
                id="carName"
                value={value}
                onChange={(e) => onChange(TextMask.textWithAccentAndNumbers(e))}
                placeholder="Nome do carro"
                startIcon={<CarIcon />}
                error={errors['carName']}
                filled={!errors['carName'] && value !== ''}
              />
            )}
          />

          <S.PriceRangeContainer>
            <header>
              <S.SectionTitle>Preço ao dia</S.SectionTitle>
              <strong>
                R$ {priceRangeValue[0]} - R$ {priceRangeValue[1]}
              </strong>
            </header>
            <Controller
              name="priceRange"
              control={control}
              render={({ field }) => (
                <S.SliderStyled
                  {...field}
                  onChange={(_, value) => {
                    field.onChange(value);
                  }}
                  max={5000}
                  valueLabelDisplay="off"
                />
              )}
            />
          </S.PriceRangeContainer>

          <S.SectionContainer>
            <S.SectionTitle>Combustível</S.SectionTitle>
            <div className="buttonsContainer">
              {FuelValues.map(({ Icon, ...fuel }) => (
                <Controller
                  key={fuel.id}
                  name={`type.${fuel.name}`}
                  control={control}
                  render={({ field: { value = false, onChange } }) => (
                    <ButtonBase
                      className={value ? 'active' : undefined}
                      type="button"
                    >
                      <label htmlFor={fuel.name}>
                        <input
                          type="checkbox"
                          id={fuel.name}
                          hidden
                          onChange={() => onChange(!value)}
                        />
                        {<Icon />}
                        {fuel.placeholder}
                      </label>
                    </ButtonBase>
                  )}
                />
              ))}
            </div>
          </S.SectionContainer>

          <S.SectionContainer>
            <S.SectionTitle>Transmissão</S.SectionTitle>
            <div className="buttonsContainer">
              {TransmissionValues.map((transmission) => (
                <Controller
                  key={transmission.id}
                  name={`transmission.${transmission.name}`}
                  control={control}
                  render={({ field: { value = false, onChange } }) => (
                    <ButtonBase
                      className={value ? 'active' : undefined}
                      type="button"
                    >
                      <label htmlFor={transmission.name}>
                        <input
                          type="checkbox"
                          id={transmission.name}
                          hidden
                          onChange={() => onChange(!value)}
                        />
                        {transmission.placeholder}
                      </label>
                    </ButtonBase>
                  )}
                />
              ))}
            </div>
          </S.SectionContainer>

          <Button type="submit">Filtrar resultados</Button>
          <Button variant="transparent" onClick={handleResetForm}>
            Limpar dados
          </Button>
        </S.FormContainer>
      </S.ContentContainer>
    </S.Container>
  );
};
