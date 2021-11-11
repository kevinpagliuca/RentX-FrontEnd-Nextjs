import { useState } from 'react';

import { CardCategory } from 'components/AdminComponents/CardCategory';
import { NavigationHeader } from 'components/AdminComponents/NavigationHeader';
import { Layout } from 'components/Layout';
import * as S from 'styles/pages/adminStyles';
import { withSSRAdmin } from 'utils/withSSRAdmin';

type TabActiveProps = 'cars' | 'categories' | undefined;
export default function Dashboard() {
  const [tabActive, setTabActive] = useState<TabActiveProps>();
  return (
    <Layout title="Dashboard | RentX">
      <S.Container>
        <NavigationHeader tabActive={tabActive} setTabActive={setTabActive} />
        <S.ContentContainer>
          <CardCategory />
        </S.ContentContainer>
      </S.Container>
    </Layout>
  );
}

export const getServerSideProps = withSSRAdmin(async () => {
  return {
    props: {},
  };
});
