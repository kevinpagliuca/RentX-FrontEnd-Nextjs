import React from 'react';
import { ProfileSchedules } from 'components/ProfileComponents/ProfileSchedules';
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
