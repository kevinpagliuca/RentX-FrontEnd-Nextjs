import Image from 'next/image';

import { ForgotPasswordForm } from '../components/ForgotPasswordForm';
import { Layout } from '../components/Layout';
import { Container } from '../styles/pages/authStyles';

export default function ResetPassword() {
  return (
    <Layout title="Login | RentX">
      <Container>
        <div className="imageContainer">
          <Image src="/carroLogin.png" width={650} height={650} quality={100} />
        </div>
        <ForgotPasswordForm />
      </Container>
    </Layout>
  );
}
