import { Layout } from "../components/Layout";
import Image from "next/image";

import { Container } from "../styles/pages/authStyles";
import { SignInForm } from "../components/SignInForm";
export default function Auth() {
  return (
    <Layout title="Login | RentX">
      <Container>
        <Image src="/carroLogin.png" width={650} height={650} quality={100} />

        <SignInForm />
      </Container>
    </Layout>
  );
}
