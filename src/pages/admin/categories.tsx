import { useCallback, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { RiSearchLine } from 'react-icons/ri';

import { CardCategory } from 'components/AdminComponents/CardCategory';
import { ModalCategoryCreate } from 'components/AdminComponents/Category/ModalCategoryCreate';
import { ModalCategoryDelete } from 'components/AdminComponents/Category/ModalCategoryDelete';
import { ModalCategoryEdit } from 'components/AdminComponents/Category/ModalCategoryEdit';
import { AdminInput } from 'components/AdminComponents/Input';
import { AdminLayout } from 'components/AdminComponents/Layout';
import { useGetCategories } from 'hooks/useCategory';
import { ICarCategory } from 'interfaces/cars';
import { setupAPI } from 'services/client';
import * as S from 'styles/pages/adminCategoryStyles';
import { withSSRAdmin } from 'utils/withSSRAdmin';

export default function AdminCategories({ categories }) {
  const [categorySelected, setCategorySelected] = useState<ICarCategory>();
  const [editCategoryModalOpen, setEditCategoryModalOpen] = useState(false);
  const [createCategoryModalOpen, setCreateCategoryModalOpen] = useState(false);

  const [deleteCategoryModalOpen, setDeleteCategoryModalOpen] = useState(false);

  const { control } = useForm();
  const { data } = useGetCategories({
    initialData: categories,
  });

  const handleOpenEditCategoryModal = useCallback((data: ICarCategory) => {
    setCategorySelected(data);
    setEditCategoryModalOpen(true);
  }, []);

  const handleCloseEditCategoryModal = useCallback(() => {
    setCategorySelected(undefined);
    setEditCategoryModalOpen(false);
  }, []);

  const handleOpenDeleteCategoryModal = useCallback((data: ICarCategory) => {
    setCategorySelected(data);
    setDeleteCategoryModalOpen(true);
  }, []);

  const handleCloseDeleteCategoryModal = useCallback(() => {
    setCategorySelected(undefined);
    setDeleteCategoryModalOpen(false);
  }, []);

  return (
    <AdminLayout title="Usuários | RentX Adm.">
      <S.Container>
        <S.ContentContainer>
          <h1>Categorias</h1>
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
                    placeholder="Buscar categoria"
                    startIcon={<RiSearchLine size={24} />}
                    filled={value !== ''}
                  />
                )}
              />
            </S.SearchContainer>

            <button onClick={() => setCreateCategoryModalOpen(true)}>
              <FiPlus size={26} />
            </button>
          </S.ContentHeader>

          <div className="containerCard">
            {data?.map((category) => (
              <CardCategory
                key={category.id}
                categoryData={category}
                toggleEdit={handleOpenEditCategoryModal}
                toggleDelete={handleOpenDeleteCategoryModal}
              />
            ))}
          </div>

          <ModalCategoryCreate
            modalIsOpen={createCategoryModalOpen}
            onRequestClose={() => setCreateCategoryModalOpen(false)}
          />

          <ModalCategoryEdit
            modalIsOpen={editCategoryModalOpen}
            onRequestClose={handleCloseEditCategoryModal}
            categoryDetails={categorySelected}
          />

          <ModalCategoryDelete
            modalIsOpen={deleteCategoryModalOpen}
            onRequestClose={handleCloseDeleteCategoryModal}
            categoryDetails={categorySelected}
          />
        </S.ContentContainer>
      </S.Container>
    </AdminLayout>
  );
}

export const getServerSideProps = withSSRAdmin(async (ctx) => {
  const api = setupAPI(ctx);

  const { data: categories } = await api.get('categories');

  return {
    props: {
      categories,
    },
  };
});
