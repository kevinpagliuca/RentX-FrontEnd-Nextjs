import { NavigationHeader } from 'components/AdminComponents/NavigationHeader';
import { Layout } from 'components/Layout';
import * as S from 'styles/pages/adminStyles';
import { withSSRAdmin } from 'utils/withSSRAdmin';
export default function Dashboard() {
  return (
    <Layout title="Dashboard | RentX">
      <S.Container>
        <NavigationHeader />
      </S.Container>
    </Layout>
  );
}

export const getServerSideProps = withSSRAdmin(async () => {
  return {
    props: {},
  };
});
