import React from 'react';
import styled, { css } from 'styled-components';
import * as S from '@/styles/CoachMarkStyles';

interface TooltipProps {
  $directionIndex: number; // 화살표 방향을 나타내는 인덱스
}

const arrow = [
  {
    top: '100%',
    left: '50%',
    marginLeft: '-5px', // 화살표의 폭에 따라 조정 가능
    borderColor: 'black transparent transparent transparent',
  },
  {
    bottom: '100%',
    right: '50%',
    marginLeft: '-5px', // 화살표의 폭에 따라 조정 가능
    borderColor: 'transparent transparent black transparent',
  },
  {
    top: '50%',
    left: '100%',
    marginTop: '-5px', // 화살표의 높이에 따라 조정 가능
    borderColor: 'transparent black transparent transparent',
  },
  {
    top: '50%',
    right: '100%',
    marginTop: '-5px', // 화살표의 높이에 따라 조정 가능
    borderColor: 'transparent transparent transparent black',
  },
];

const Tooltip4 = () => {
  return (
    <TooltipContainer $directionIndex={1}>
      <S.TooltipText>
        <div>가장 핵심정보!</div>
        <div>
          <S.PointColorText>나의 이번 달 대출금</S.PointColorText>을 한 눈에
          확인해요.
        </div>
      </S.TooltipText>
      <S.TooltipFooter>
        <span className="stageStatus">stage/totalstage</span>
        <button>다음</button>
      </S.TooltipFooter>
    </TooltipContainer>
  );
};

const TooltipContainer = styled.span<TooltipProps>`
  /* 기본 스타일 */
  visibility: visible;
  box-sizing: border-box;
  width: 298px;
  height: 111px;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 13px;
  padding: 20px;
  position: absolute;
  z-index: 20;
  bottom: -10rem;
  left: 12rem;

  &::after {
    content: '';
    position: absolute;
    border-width: 5px;
    border-style: solid;

    /* 화살표 위치 스타일 조정 */
    ${({ $directionIndex }) => css`
      ${arrow[$directionIndex]}
    `}
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Tooltip4;
