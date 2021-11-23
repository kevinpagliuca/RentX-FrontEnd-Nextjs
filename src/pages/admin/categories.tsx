import { useCallback, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { RiSearchLine } from 'react-icons/ri';

import { CardCategory } from 'components/AdminComponents/CardCategory';
import { ModalCategoryCreate } from 'components/AdminComponents/Category/ModalCategoryCreate';
import { ModalCategoryEdit } from 'components/AdminComponents/Category/ModalCategoryEdit';
import { AdminInput } from 'components/AdminComponents/Input';
import { AdminLayout } from 'components/AdminComponents/Layout';
import { CarCategory } from 'interfaces/cars';
import CategoryService from 'services/CategoryService';
import * as S from 'styles/pages/adminCategoryStyles';

export default function AdminCategories() {
  const [category, setCategory] = useState<CarCategory[]>([]);
  const [categorySelected, setCategorySelected] = useState<CarCategory>();
  const [editCategoryModalOpen, setEditCategoryModalOpen] = useState(false);
  const [createCategoryModalOpen, setCreateCategoryModalOpen] = useState(false);
  const { control } = useForm();

  useEffect(() => {
    (async () => {
      try {
        const data = await CategoryService.getAll();
        setCategory(data);
      } catch (error) {}
    })();
  }, []);

  const handleOpenEditCategoryModal = useCallback((category: CarCategory) => {
    setCategorySelected(category);
    setEditCategoryModalOpen(true);
  }, []);

  const handleCloseEditCategoryModal = useCallback(() => {
    setCategorySelected(undefined);
    setEditCategoryModalOpen(false);
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
            {category?.map((category) => (
              <CardCategory
                key={category.id}
                categoryData={category}
                toggleModal={handleOpenEditCategoryModal}
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
        </S.ContentContainer>
      </S.Container>
    </AdminLayout>
  );
}
