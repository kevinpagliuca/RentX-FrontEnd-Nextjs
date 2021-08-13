import { ReactNode } from "react";
import Head from "next/head";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

import { Container, Content, Wrapper } from "./styles";
export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <Container>
      <Head>
        <title>{title || "RentX"}</title>
      </Head>
      <Header />

      <Wrapper>
        <Sidebar />
        <Content>{children}</Content>
      </Wrapper>
      {/* <footer style={{ minHeight: "300px", width: "100%", background: "#000" }}></footer> */}
    </Container>
  );
};
