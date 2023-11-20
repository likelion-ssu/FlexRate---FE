import React from 'react';
import styled, { css } from 'styled-components';

// interface TooltipProps {
//   width: string;
//   height: string;
//   top: number;
//   left: number;
//   text: string;
//   stage: number;
// }

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

const Tooltip = () => {
  return (
    <TooltipContainer $directionIndex={1}>
      <TooltipText>
        <div>가장 핵심정보!</div>
        <div>
          <PointColorText>나의 이번 달 대출금</PointColorText>을 한 눈에
          확인해요.
        </div>
      </TooltipText>
      <TooltipFooter>
        <span className="stageStatus">stage/totalstage</span>
        <button>다음</button>
      </TooltipFooter>
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

const TooltipText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  color: var(--White, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 700;
`;

const PointColorText = styled.span`
  background: linear-gradient(
    90deg,
    #05f6a7 0%,
    #35a9ea 25.01%,
    #40a0ff 48.39%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const TooltipFooter = styled.div`
  display: flex;
  justify-content: space-between;

  & > .stageStatus {
    color: var(--Gray5, #a6a6a6);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  & > button {
    width: 40px;
    height: 20px;
    border-radius: 5px;
    background-color: #529ef7;
    border: none;
    color: #fff;
    font-family: Pretendard;
    font-size: 10px;
    font-weight: 700;

    &:hover {
      cursor: pointer;
      opacity: 90%;
    }
  }
`;

export default Tooltip;
