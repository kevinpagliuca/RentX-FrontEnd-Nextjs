import React from 'react';
import { Layout } from '../components/Layout';
import { ProfileData } from '../components/ProfileData';
import { Container } from '../styles/pages/profileStyles';
//  import { Container } from './styles';

export default function Profiles() {
  return (
    <Layout title="Profile | RentX">
      <Container>
        <ProfileData />
      </Container>
    </Layout>
  );
}
