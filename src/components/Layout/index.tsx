import { ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  title?: string;
  children: ReactNode;
  noHeader?: boolean;
}
import { Sidebar } from '../Sidebar';
import { Header } from '../Header';

import { Container, Content, Wrapper } from './styles';
export const Layout = ({ title, children, noHeader }: LayoutProps) => {
  return (
    <>
      <Container>
        <Head>
          <title>{title || 'RentX'}</title>
        </Head>
        <Sidebar />

        <Wrapper>
          {!noHeader && <Header />}
          <Content>{children}</Content>
        </Wrapper>
      </Container>
      {/* <footer style={{ minHeight: "100vh", width: "100%", background: "#000" }}></footer> */}
    </>
  );
};
