import { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { RiSearchLine } from 'react-icons/ri';

import { AdminCardCar } from 'components/AdminComponents/CardCar';
import { ModalCarCreate } from 'components/AdminComponents/Cars/ModalCarCreate';
import { ModalCarDelete } from 'components/AdminComponents/Cars/ModalCarDelete';
import { ModalCarEdit } from 'components/AdminComponents/Cars/ModalCarEdit';
import { AdminInput } from 'components/AdminComponents/Input';
import { AdminLayout } from 'components/AdminComponents/Layout';
import { useGetCarsByAdmin } from 'hooks/useCars';
import { ICars } from 'interfaces/cars';
import * as S from 'styles/pages/adminCarsStyles';
import { withSSRAdmin } from 'utils/withSSRAdmin';

export default function AdminCars() {
  const { data } = useGetCarsByAdmin();

  const [carSelected, setCarSelected] = useState<ICars>();
  const [editCarModalOpen, setEditCarModalOpen] = useState(false);
  const [createCarModalOpen, setCreateCarModalOpen] = useState(false);
  const [deleteCarModalOpen, setDeleteCarModalOpen] = useState(false);
  const { control } = useForm();

  const handleOpenEditCarModal = useCallback((car: ICars) => {
    setCarSelected(car);
    setEditCarModalOpen(true);
  }, []);

  const handleCloseEditCarModal = useCallback(() => {
    setCarSelected(undefined);
    setEditCarModalOpen(false);
  }, []);

  const handleOpenDeleteCarModal = useCallback((car: ICars) => {
    setCarSelected(car);
    setDeleteCarModalOpen(true);
  }, []);

  const handleCloseDeleteCarModal = useCallback(() => {
    setCarSelected(undefined);
    setDeleteCarModalOpen(false);
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
          {data?.cars?.map((car) => (
            <AdminCardCar
              key={car.id}
              car={car}
              toggleEdit={handleOpenEditCarModal}
              toggleDelete={handleOpenDeleteCarModal}
            />
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

        <ModalCarDelete
          modalIsOpen={deleteCarModalOpen}
          onRequestClose={handleCloseDeleteCarModal}
          carDetails={carSelected}
        />
      </S.Container>
    </AdminLayout>
  );
}

export const getServerSideProps = withSSRAdmin(async () => {
  return {
    props: {},
  };
});
