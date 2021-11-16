import { ReactNode } from 'react';

import Head from 'next/head';

import { AdminSidebar } from '../Sidebar';
import * as S from './styles';

interface AdminLayoutProps {
  title: string;
  children: ReactNode;
}

export const AdminLayout = ({ title, children }: AdminLayoutProps) => {
  return (
    <S.ContainerLayout>
      <Head>
        <title>{title || 'RentX Adm.'}</title>
      </Head>
      <AdminSidebar />
      <S.ContentContainerLayout>{children}</S.ContentContainerLayout>
    </S.ContainerLayout>
  );
};
