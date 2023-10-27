import React from 'react';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const AreaChart: React.FC = () => {
  const series = [
    {
      name: 'area-series',
      data: [10, 20, 15, 40, 25],
      type: 'area',
    },
    {
      name: 'line-series',
      data: [30, 10, 25, 20, 15],
      type: 'line',
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      categories: ['2023-01', '2023-02', '2023-03', '2023-04', '2023-05'],
    },
    colors: ['#63C393', '#679CE1'],
  };

  return (
    <ApexCharts
      options={options}
      series={series}
      type="area"
      height={350}
      width={850}
    />
  );
};

export default AreaChart;
