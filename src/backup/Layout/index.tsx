import { ReactNode } from "react";
import Head from "next/head";
import { Header, WithOutHeader } from "../Header";
import { Sidebar } from "../Sidebar";

interface LayoutProps {
  title?: string;
  children: ReactNode;
  headerCarInfo?: boolean;
}

import { Container, Content, Wrapper } from "./styles";
export const Layout = ({ title, children, headerCarInfo }: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{title || "RentX"}</title>
      </Head>
      {!headerCarInfo ? <Header /> : <WithOutHeader />}

      <Wrapper>
        <Sidebar />
        <Content>{children}</Content>
      </Wrapper>

      {/* <footer style={{ minHeight: "10000px", width: "100%", background: "#000" }}></footer> */}
    </Container>
  );
};
