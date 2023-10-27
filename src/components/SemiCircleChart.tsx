import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface propsType {
  num: number;
}

const SemiCircleChart = ({ num }: propsType) => {
  const [series, setSeries] = useState([num]); // 차트의 값을 설정합니다.

  const options: ApexOptions = {
    chart: {
      height: 100,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          size: '70%', // 중앙의 빈 영역의 크기를 설정합니다.
        },
        track: {
          background: '#d3d3d3',
          strokeWidth: '100%',
        },
        dataLabels: {
          value: {
            offsetY: -20,
            color: '#000',
            fontSize: '22px',
          },
          total: {
            show: true,
            label: '',
            color: '#000',
            fontSize: '16px',
            formatter: function (w: any) {
              return series[0] + ' %';
            },
          },
        },
      },
    },
    colors: ['#63C393'],
    labels: ['나의 대출 점수'], // 차트의 레이블을 설정합니다.
  };

  return (
    <ApexCharts
      options={options}
      series={series}
      type="radialBar"
      height={350}
      width={400}
    />
  );
};

export default SemiCircleChart;
