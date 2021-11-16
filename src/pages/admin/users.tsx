import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiUserPlus } from 'react-icons/fi';
import { RiSearchLine } from 'react-icons/ri';

import { CardUser } from 'components/AdminComponents/CardUser';
import { AdminInput } from 'components/AdminComponents/Input';
import { AdminLayout } from 'components/AdminComponents/Layout';
import { ModalUserEdit } from 'components/AdminComponents/Users/ModalUserEdit';
import { IUser } from 'interfaces/auth';
import { usersService } from 'services/UsersService';
import * as S from 'styles/pages/adminUsersStyles';

export default function AdminUsers() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [userSelected, setUserSelected] = useState<IUser>();
  const [editUserModalOpen, setEditUserModalOpen] = useState(false);
  const { control } = useForm();

  useEffect(() => {
    (async () => {
      try {
        const data = await usersService.getAll();
        setUsers(data);
      } catch (error) {}
    })();
  }, []);

  const handleOpenEditUserModal = useCallback((user: IUser) => {
    setUserSelected(user);
    setEditUserModalOpen(true);
  }, []);

  const handleCloseEditUserModal = useCallback(() => {
    setUserSelected(undefined);
    setEditUserModalOpen(false);
  }, []);

  return (
    <AdminLayout title="Usuários | RentX Adm.">
      <S.Container>
        <S.ContentContainer>
          <h1>Usuários</h1>

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
                    placeholder="Buscar usuário"
                    startIcon={<RiSearchLine size={24} />}
                    filled={value !== ''}
                  />
                )}
              />
            </S.SearchContainer>

            <button>
              <FiUserPlus size={32} />
            </button>
          </S.ContentHeader>

          {users?.map((user) => (
            <CardUser
              key={user.id}
              userData={user}
              toggleModal={handleOpenEditUserModal}
            />
          ))}

          <ModalUserEdit
            modalIsOpen={editUserModalOpen}
            onRequestClose={handleCloseEditUserModal}
            userDetails={userSelected}
          />
        </S.ContentContainer>
      </S.Container>
    </AdminLayout>
  );
}
