import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  title?: string;
  children: ReactNode;
  noHeader?: boolean;
}
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';

import * as S from './styles';
export const Layout = ({ title, children, noHeader }: LayoutProps) => {
  return (
    <>
      <S.Container>
        <Head>
          <title>{title || 'RentX'}</title>
        </Head>
        <Sidebar />

        <S.Wrapper>
          {!noHeader && <Header />}
          <S.Content>{children}</S.Content>
        </S.Wrapper>
      </S.Container>
      {/* <footer style={{ minHeight: "100vh", width: "100%", background: "#000" }}></footer> */}
    </>
  );
};
