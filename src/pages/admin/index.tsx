import { Layout } from 'components/Layout';
import { withSSRAdmin } from 'utils/withSSRAdmin';

export default function Dashboard() {
  return (
    <Layout title="Dashboard | RentX">
      <h1>Dashboard</h1>
    </Layout>
  );
}

export const getServerSideProps = withSSRAdmin(async () => {
  return {
    props: {},
  };
});
