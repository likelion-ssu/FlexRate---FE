// TransverseGraph.tsx
import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { styled } from 'styled-components';

type BarChartProps = {
  value: number;
}; // 데이터 타입 정의

/** 가로막대차트 구현 */
const TransverseGraph: React.FC<BarChartProps> = ({ value }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (ref.current && value) {
      const svg = d3.select(ref.current);

      // 기존 내용을 지우고 새로운 그래프를 그릴 수 있도록 준비합니다.
      svg.selectAll('*').remove();

      // x축 스케일을 설정합니다. value의 최댓값으로 도메인을 설정합니다.
      const xScale = d3.scaleLinear().domain([0, 100]);
      const gradient = svg
        .append('defs')
        .append('linearGradient')
        .attr('id', 'gradient')
        .attr('x1', '0%')
        .attr('x2', '100%')
        .attr('y1', '0%')
        .attr('y2', '0%');

      // 그라데이션 색상 정의
      gradient
        .append('stop')
        .attr('offset', '0%')
        .attr('stop-color', '#59BFBE');

      gradient
        .append('stop')
        .attr('offset', '48.73%')
        .attr('stop-color', '#5BC569');

      gradient
        .append('stop')
        .attr('offset', '99.99%')
        .attr('stop-color', '#5DC93E');

      svg
        .append('rect')
        .attr('width', '100%') // 배경 막대의 전체 너비
        .attr('height', '12px') // 막대와 동일한 높이
        .attr('fill', '#EEF9F5') // 배경 막대의 색상
        .attr('rx', '8px') // 둥근 모서리를 위한 x축 반경
        .attr('ry', '8px'); // 둥근 모서리를 위한 y축 반경

      // SVG에 막대를 추가합니다.
      svg
        .append('rect')
        .attr('height', '12px') // 막대의 높이
        .attr('fill', 'url(#gradient)') // 막대의 색상
        .attr('rx', '8px') // 둥근 모서리를 위한 x축 반경
        .attr('ry', '8px') // 둥근 모서리를 위한 y축 반경
        .attr('width', 0) // 애니메이션 시작을 위해 초기 너비를 0으로 설정합니다.
        .transition()
        .duration(1500)
        .attr('width', `${value}%`); // 애니메이션을 통해 최종 너비로 변경합니다.

      // 막대에 텍스트를 추가합니다.
      svg
        .append('text')
        .attr('x', 0) // 텍스트의 x 위치
        .attr('y', 25) // 텍스트의 y 위치
        .text('0%')
        .attr('font-size', '8px')
        .attr('fill', '#BFBFBF');
      svg
        .append('text')
        .attr('x', '95%')
        .attr('y', 25) // 텍스트의 y 위치
        .text('100%')
        .attr('font-size', '8px')
        .attr('fill', '#BFBFBF');
    }
  }, [value]);

  return (
    <Wrapper>
      <div className="percent">{value}% </div>
      <Svg ref={ref} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > .percent {
    color: #000;
    font-family: SUIT;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    &::after {
      content: '/ 100%';
      color: var(--Gray3, #d9d9d9);
      font-family: SUIT;
      font-size: 10px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

const Svg = styled.svg`
  width: 100%;
  height: 2rem;
`;

export default TransverseGraph;
