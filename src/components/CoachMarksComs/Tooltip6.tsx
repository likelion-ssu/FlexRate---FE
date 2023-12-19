import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import * as S from '@/styles/CoachMarkStyles';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ShowCoachMark, CoachMarkStage } from '@/state/CoachMarkStage';
import { userInfo } from '@/state/userInfo';

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
    borderColor: 'transparent transparent transparent black',
  },
  {
    top: '50%',
    right: '100%',
    marginTop: '-5px', // 화살표의 높이에 따라 조정 가능
    borderColor: 'transparent black transparent transparent',
  },
];

const Tooltip6 = () => {
  const nav = useNavigate();
  const [coachmarkState, setCoachMarkState] = useRecoilState(ShowCoachMark);
  const [coach, setcoach] = useRecoilState(CoachMarkStage);
  const { stage, totalStage } = coach;
  const [state, setState] = useState(0);
  const data = useRecoilValue(userInfo);

  return (
    <TooltipContainer $directionIndex={2}>
      {state === 0 ? (
        <>
          <S.TooltipText>
            <div>
              나의 <S.PointColorText>대출 정보를 요약</S.PointColorText>하고,
            </div>
            <div>
              <S.PointColorText>최근 대출 활동 내역</S.PointColorText>을
              제공해요.
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
                  setcoach((prev) => ({
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
                  setState(1);
                }}
              >
                다음
              </S.Btn>
            </span>
            <Xbtn
              onClick={(e) => {
                e.preventDefault();
                setcoach((prev) => ({
                  ...prev,
                  mode: false,
                }));
              }}
            >
              x
            </Xbtn>
          </S.TooltipFooter>
        </>
      ) : (
        <>
          <S.TooltipText>
            <div>지금까지 주요 기능을 설명드렸어요.</div>
            <div>
              유익한 금융활동,
              <S.PointColorText>Flex Rate</S.PointColorText>와 함께
              시작해봅시다!
            </div>
          </S.TooltipText>
          <S.TooltipFooter>
            <div></div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setCoachMarkState(() => ({
                  beginer: false,
                }));
                setcoach((prev) => ({
                  ...prev,
                  mode: false,
                }));

                if (
                  localStorage.getItem('accessToken') &&
                  data.loan_payment_count === 80
                ) {
                  nav('/LoanApplication');
                }
              }}
            >
              다음
            </button>
          </S.TooltipFooter>
        </>
      )}
    </TooltipContainer>
  );
};

const Xbtn = styled.div`
  position: absolute;
  top: 5px;
  right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const TooltipContainer = styled.span<TooltipProps>`
  /* 기본 스타일 */
  visibility: visible;
  box-sizing: border-box;
  width: 298px;
  height: 130px;
  background-color: black;
  color: white;
  border-radius: 13px;
  padding: 20px;
  position: absolute;
  z-index: 30;
  top: 5rem;
  left: -20rem;

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

export default Tooltip6;
