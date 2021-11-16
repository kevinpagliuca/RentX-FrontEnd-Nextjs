import React from 'react';

import dynamic from 'next/dynamic';

import { AdminLayout } from 'components/AdminComponents/Layout';
import * as S from 'styles/pages/adminStyles';
import { withSSRAdmin } from 'utils/withSSRAdmin';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
});

const options: ApexCharts.ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    fontFamily: 'Inter',
    background: 'transparent',
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: true,
  },
  theme: {
    mode: 'dark',
    monochrome: { enabled: true, color: '#DC1637' },
  },
  forecastDataPoints: {
    strokeWidth: 100,
    dashArray: 10,
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
export default function Dashboard() {
  const series = [
    {
      name: 'Rentals',
      data: [150, 300, 250, 200, 175, 300, 130, 200, 150, 340, 360],
    },
  ];
  return (
    <AdminLayout title="Dashboard | RentX Adm.">
      <S.Container>
        <h1>Dashboard</h1>
        <S.ContentContainer>
          <S.ChartContainer>
            <Chart type="area" height={500} options={options} series={series} />
          </S.ChartContainer>
          <S.CommingSoon />
        </S.ContentContainer>
      </S.Container>
    </AdminLayout>
  );
}

export const getServerSideProps = withSSRAdmin(async () => {
  return {
    props: {},
  };
});
