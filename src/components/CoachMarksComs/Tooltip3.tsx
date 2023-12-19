import React from 'react';
import styled, { css } from 'styled-components';
import * as S from '@/styles/CoachMarkStyles';
import { useRecoilState } from 'recoil';
import { CoachMarkStage } from '@/state/CoachMarkStage';

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
    borderColor: 'transparent black transparent transparent',
  },
];

const Tooltip5 = () => {
  const [state, setState] = useRecoilState(CoachMarkStage);
  const { stage, totalStage } = state;
  return (
    <TooltipContainer $directionIndex={3}>
      <S.TooltipText>
        <div>나의 대출 금리와 함께 Flex Rate </div>
        <div>
          <S.PointColorText>자체 신용 평가 점수</S.PointColorText>를 볼 수
          있어요!
        </div>
        <div className="small">
          <S.PointColorText>신용평가모델</S.PointColorText>에 대해 알고싶다면
          블럭을 <S.PointColorText>클릭</S.PointColorText>해보세요!
        </div>
      </S.TooltipText>
      <S.TooltipFooter>
        <span className="stageStatus">
          {stage}/{totalStage}
        </span>
        <span>
          <S.Btn
            onClick={(e) => {
              e.preventDefault();
              setState((prev) => ({
                ...prev,
                stage: stage - 1,
              }));
            }}
          >
            이전
          </S.Btn>
          <S.Btn
            onClick={(e) => {
              e.preventDefault();
              setState((prev) => ({
                ...prev,
                stage: stage + 1,
              }));
            }}
          >
            다음
          </S.Btn>
        </span>
      </S.TooltipFooter>
    </TooltipContainer>
  );
};

const TooltipContainer = styled.span<TooltipProps>`
  /* 기본 스타일 */
  visibility: visible;
  box-sizing: border-box;
  width: 320px;
  height: 160px;
  background-color: black;
  color: white;
  border-radius: 13px;
  padding: 20px;
  position: absolute;
  z-index: 20;
  top: 4rem;
  right: -22rem;

  &::after {
    content: '';
    position: absolute;
    border-width: 10px;
    border-style: solid;

    /* 화살표 위치 스타일 조정 */
    ${({ $directionIndex }) => css`
      ${arrow[$directionIndex]}
    `}
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & .small {
    margin-top: 5px;
    font-size: 13px;
  }
`;

export default Tooltip5;
