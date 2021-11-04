import { Layout } from 'components/Layout';
import { ProfileSchedules } from 'components/ProfileComponents/ProfileSchedules';
import { ProfileUserData } from 'components/ProfileComponents/ProfileUserData';
import { parseCookies } from 'nookies';
import * as S from 'styles/pages/profileStyles';
import { withSSRAuth } from 'utils/withSSRAuth';

export default function Profiles() {
  return (
    <Layout title="Profile | RentX">
      <S.Container>
        <ProfileUserData />
        <ProfileSchedules />
      </S.Container>
    </Layout>
  );
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const { '@rentX:token': token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
});
