import { ReactElement, ReactNode } from 'react';

import Head from 'next/head';

import { Loader } from 'components/Loader';
import { useLoader } from 'contexts/LoaderContext';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import * as S from './styles';

interface LayoutProps {
  title?: string;
  headerTitle?: string;
  children: ReactNode;
  noHeader?: boolean;
  whiteBackground?: boolean;
  customHeader?: boolean;
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
          {customHeader && <Header custom />}
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
