import Image from "next/image";
// import { Layout } from "../components/Layout";
import { Layout } from "../components/Layout";
import { SignUpForm } from "../components/SignUpForm";

import { Container } from "../styles/pages/registerStyles";
export default function RegisterPage() {
  return (
    <Layout title="Cadastro | RentX">
      <Container>
        <SignUpForm />
        <div className="imgContainer">
          <Image src="/carroRegistro.png" width={650} height={650} />
        </div>
      </Container>
    </Layout>
  );
}
