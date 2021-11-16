import React from 'react';

import dynamic from 'next/dynamic';

import { AdminLayout } from 'components/AdminComponents/Layout';
import * as S from 'styles/pages/adminStyles';
import { withSSRAdmin } from 'utils/withSSRAdmin';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

// type TabActiveProps = 'cars' | 'categories' | undefined;
const options: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false,
      tools: {
        download: true,
      },
    },
  },
};

export default function Dashboard() {
  const series = [{ name: 'Rentals', data: [31, 120, 10, 28, 51, 61, 109] }];
  return (
    <AdminLayout title="Dashboard | RentX Adm.">
      <S.Container>
        <h1>Teste</h1>
        <Chart type="area" height={160} options={options} series={series} />
        <Chart type="area" height={160} options={options} series={series} />
        <Chart type="area" height={160} options={options} series={series} />
        <Chart type="area" height={160} options={options} series={series} />
        <Chart type="area" height={160} options={options} series={series} />
        <Chart type="area" height={160} options={options} series={series} />
      </S.Container>
    </AdminLayout>
  );
}

export const getServerSideProps = withSSRAdmin(async () => {
  return {
    props: {},
  };
});
