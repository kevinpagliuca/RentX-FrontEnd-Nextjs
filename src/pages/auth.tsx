import Image from "next/image";

import { Container } from "../styles/pages/authStyles";
import { SignInForm } from "../components/SignInForm";

import { Layout } from "../components/Layout";
export default function Auth() {
  return (
    <Layout title="Login | RentX">
      <Container>
        <div className="imageContainer">
          <Image src="/carroLogin.png" width={650} height={650} quality={100} />
        </div>
        <SignInForm />
      </Container>
    </Layout>
  );
}
