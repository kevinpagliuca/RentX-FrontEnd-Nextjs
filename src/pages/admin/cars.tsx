import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { AdminCardCar } from 'components/AdminComponents/CardCar';
import { AdminLayout } from 'components/AdminComponents/Layout';
import { ICars } from 'interfaces/cars';
import CarsService from 'services/CarsService';
import * as S from 'styles/pages/adminCarsStyles';
import { ToastifyCustomMessage } from 'styles/ToastifyCustomMessage';

export default function AdminCars() {
  const [cars, setCars] = useState<ICars[]>([]);

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

  return (
    <AdminLayout title="Carros | RentX Adm.">
      <S.Container>
        <h1>Carros</h1>
        <S.ContentContainer>
          {cars.map((car) => (
            <AdminCardCar key={car.id} car={car} />
          ))}
        </S.ContentContainer>
      </S.Container>
    </AdminLayout>
  );
}
