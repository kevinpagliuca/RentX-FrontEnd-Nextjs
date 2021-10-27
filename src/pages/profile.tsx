import React from 'react';

import { ProfileSchedules } from 'components/ProfileComponents/ProfileSchedules';
import { parseCookies } from 'nookies';
import { withSSRAuth } from 'utils/withSSRAuth';

import { Layout } from '../components/Layout';
import { ProfileUserData } from '../components/ProfileComponents/ProfileUserData';
import * as S from '../styles/pages/profileStyles';

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
