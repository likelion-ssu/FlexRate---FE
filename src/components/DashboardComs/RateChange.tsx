import React, { useEffect, useState } from 'react';
import ApexCharts from 'apexcharts';
import styled from 'styled-components';
import '../../styles/CustomTooltip.css';
import up from '../../assets/imgs/up.png';
import down from '../../assets/imgs/down.png';

const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
const Wrapper = styled.div`
  padding: 1.5em 2em 0 2em;
  & > p {
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 0em;
    color: #595959;
    padding-bottom: 0.75em;
  }
`;
const Num = styled.span`
  font-family: SUIT;
  font-size: 28px;
  font-weight: 700;
  line-height: 35px;
  margin-right: 0.2em;
`;
const Per = styled.span`
  font-family: SUIT;
  font-size: 13px;
  font-weight: 600;
  line-height: 16px;
  margin-right: 0.4em;
`;
const Text = styled.span`
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  color: #8c8c8c;
  margin-right: 5em;
`;
const Chart = styled.div`
  width: 100%;
`;

const RateChange = () => {
  const lineData = [12, 14, 16, 14, 16, 13, 11, 14, 12, 12, 13, 15];
  const blockData = lineData.map((item) => item * 1.25);
  const duration = [
    '2023.01',
    '2023.02',
    '2023.03',
    '2023.04',
    '2023.05',
    '2023.06',
    '2023.07',
    '2023.08',
    '2023.09',
    '2023.10',
    '2023.11',
    '2023.12',
  ];

  const options = {
    colors: ['#FBEAB2', '#80D2D0'],
    series: [
      {
        name: '',
        type: 'column',
        data: blockData,
      },
      {
        name: '',
        type: 'line',
        data: lineData,
      },
    ],
    chart: {
      height: 170,
      type: 'line',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '65%',
      },
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        const idx = w.globals.labels[dataPointIndex] - 1;
        const rate = series[seriesIndex][dataPointIndex]; // 해당 월의 금리
        const previousRate = series[seriesIndex][dataPointIndex - 1] || 0; // 전달의 금리
        const rateChange = rate - previousRate; // 금리 변동폭

        const startDate = duration[idx] + '.01';
        const endDate = duration[idx] + '.31';

        // 양수 또는 음수에 따른 아이콘 결정
        const changeIcon =
          rateChange >= 0
            ? `<img src=${up} alt="upIcon" />` // 양수일 때의 아이콘
            : `<img src=${down} alt="downIcon" />`; // 음수일 때의 아이콘

        //사용자 정의 툴팁 내용
        return `
        <div class="custom-tooltip">
            <div class="inner-box">
              <span class="num">${rate}</span>
              <span class="per">%</span>
              <div class="date">${startDate} - ${endDate}</div>
              <span class="text">이전 달 대비</span>
              <span class="change">${changeIcon} ${rateChange}%</span>
            </div>
            </div>
        `;
      },
    },
    stroke: {
      width: [0, 2.5],
    },
    dataLabels: {
      enabled: false,
    },
    labels: duration,
    xaxis: {
      tooltip: {
        enabled: false, // X축 툴팁 비활성화
      },
      type: 'category',
      categories: duration,
      labels: {
        show: false, // X축 라벨을 숨깁니다.
      },
    },
    yaxis: [
      {
        labels: {
          show: false, // Y축 라벨을 숨깁니다.
        },
        min: 0, // 선 그래프의 Y축 최소값
        max: 20, // 선 그래프의 Y축 최대값
      },
      {
        labels: {
          show: false, // Y축 라벨을 숨깁니다.
        },
        min: 0, // 선 그래프의 Y축 최소값
        max: 20, // 선 그래프의 Y축 최대값
      },
    ],

    legend: {
      show: false, // 범례를 숨깁니다.
    },
    grid: {
      show: false, // 그리드 자체는 보임
      padding: {
        left: 0, // 왼쪽 패딩을 0으로 설정
        right: 25, // 오른쪽 패딩을 0으로 설정 (필요한 경우)
      },
    },
  };

  useEffect(() => {
    const chart = new ApexCharts(document.querySelector('#chart'), options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <Container>
      <Wrapper>
        <p>나의 대출 금리 변화</p>
        <div>
          <Num>7</Num>
          <Per>%</Per>
          <Text>역대 최저 금리</Text>
          <Num>14</Num>
          <Per>%</Per>
          <Text>역대 최고 금리</Text>
        </div>
      </Wrapper>
      <Chart id="chart"></Chart>
    </Container>
  );
};

export default RateChange;
