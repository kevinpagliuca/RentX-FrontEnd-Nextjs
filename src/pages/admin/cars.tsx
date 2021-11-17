import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { RiSearchLine } from 'react-icons/ri';
import { toast } from 'react-toastify';

import { AdminCardCar } from 'components/AdminComponents/CardCar';
import { ModalCarCreate } from 'components/AdminComponents/Cars/ModalCarCreate';
import { ModalCarEdit } from 'components/AdminComponents/Cars/ModalCarEdit';
import { AdminInput } from 'components/AdminComponents/Input';
import { AdminLayout } from 'components/AdminComponents/Layout';
import { ICars } from 'interfaces/cars';
import CarsService from 'services/CarsService';
import * as S from 'styles/pages/adminCarsStyles';
import { ToastifyCustomMessage } from 'styles/ToastifyCustomMessage';

export default function AdminCars() {
  const [cars, setCars] = useState<ICars[]>([]);
  const [carSelected, setCarSelected] = useState<ICars>();
  const [editCarModalOpen, setEditCarModalOpen] = useState(false);
  const [createCarModalOpen, setCreateCarModalOpen] = useState(false);
  const { control } = useForm();

  useEffect(() => {
    (async () => {
      try {
        const data = await CarsService.getAllByAdmin();
        setCars(data.cars);
      } catch (error) {
        toast.error(
          ToastifyCustomMessage({ message: 'Erro ao buscar os carros.' })
        );
      }
    })();
  }, []);

  const handleOpenEditCarModal = useCallback((car: ICars) => {
    setCarSelected(car);
    setEditCarModalOpen(true);
  }, []);

  const handleCloseEditCarModal = useCallback(() => {
    setCarSelected(undefined);
    setEditCarModalOpen(false);
  }, []);

  return (
    <AdminLayout title="Carros | RentX Adm.">
      <S.Container>
        <h1>Carros</h1>
        <S.ContentHeader>
          <S.SearchContainer>
            <Controller
              control={control}
              name="search"
              render={({ field: { value = '', onChange } }) => (
                <AdminInput
                  id="search"
                  value={value}
                  onChange={onChange}
                  placeholder="Buscar carros"
                  startIcon={<RiSearchLine size={24} />}
                  filled={value !== ''}
                />
              )}
            />
          </S.SearchContainer>

          <button onClick={() => setCreateCarModalOpen(true)}>
            <FiPlus size={26} />
          </button>
        </S.ContentHeader>
        <S.ContentContainer>
          {cars.map((car) => (
            <AdminCardCar key={car.id} car={car} />
          ))}
        </S.ContentContainer>

        <ModalCarCreate
          modalIsOpen={createCarModalOpen}
          onRequestClose={() => setCreateCarModalOpen(false)}
        />

        <ModalCarEdit
          modalIsOpen={editCarModalOpen}
          onRequestClose={handleCloseEditCarModal}
          carDetails={carSelected}
        />
      </S.Container>
    </AdminLayout>
  );
}
