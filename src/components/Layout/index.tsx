import { ReactNode } from 'react';

import Head from 'next/head';

import { Loader } from 'components/Loader';
import { useLoader } from 'contexts/LoaderContext';
import { ICars } from 'interfaces/cars';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import * as S from './styles';

interface LayoutProps {
  title?: string;
  headerTitle?: string;
  children: ReactNode;
  noHeader?: boolean;
  whiteBackground?: boolean;
  customHeader?: ICars;
}

export const Layout = ({
  title,
  headerTitle,
  children,
  noHeader,
  whiteBackground,
  customHeader,
}: LayoutProps) => {
  const { customLoader } = useLoader();
  return (
    <>
      <S.Container whiteBackground={whiteBackground}>
        <Head>
          <title>{title || 'RentX'}</title>
        </Head>
        <Sidebar />

        <S.Wrapper>
          {!noHeader && !customHeader && <Header headerTitle={headerTitle} />}
          {!!customHeader && <Header customHeader={customHeader} />}
          <S.Content>
            <Loader open={customLoader} />
            {children}
          </S.Content>
        </S.Wrapper>
      </S.Container>
      {/* <footer
        style={{ minHeight: '100vh', width: '100%', background: '#000' }}
      /> */}
    </>
  );
};
