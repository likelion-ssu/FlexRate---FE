import React from 'react';
import { styled } from 'styled-components';
import payback from '../../assets/imgs/paybackTag.png';
import TransverseGraph from './TransverseGraph';
import AmountSection from './AmountSection';

import { useRecoilState } from 'recoil';
import { CoachMarkStage } from '@/state/CoachMarkStage';
import Tooltip4 from '../CoachMarksComs/Tooltip4';

const LoanTobepaid = () => {
  const [coachMark, setCoachMark] = useRecoilState(CoachMarkStage);

  // stage 값에 접근
  const { stage, mode } = coachMark;

  // stage 값을 업데이트하는 함수
  const updateStage = (newStage: number) => {
    setCoachMark({ ...coachMark, stage: newStage });
  };

  let isVisible = mode && stage === 4;

  const value = 70; // 예시 데이터
  return (
    <>
      <Dash.Wrapper $isVisible={isVisible}>
        <Dash.Title>나의 이번 달 대출금</Dash.Title>
        <Dash.LoanPrice>
          <span>
            <Big>280,000 </Big>
          </span>
          <img src={payback} />
        </Dash.LoanPrice>
        <Dash.Grape>
          <TransverseGraph value={value} />
        </Dash.Grape>
        <div className="amount-section">
          <AmountSection
            title="원리금"
            amount="250,000"
            totalAmount="3,000,000원"
            period="12개월"
          />
          <AmountSection
            title="이자"
            amount="30,000"
            totalAmount="3,000,000원"
            period="12개월"
          />
        </div>
        {isVisible && <Tooltip4 />}
      </Dash.Wrapper>
    </>
  );
};

const Dash = {
  Wrapper: styled.div<{ $isVisible: boolean }>`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 8px;
    /* border: 1px solid var(--Gray3, #d9d9d9); */
    outline: 1px solid var(--Gray3, #d9d9d9);
    outline-offset: -1px; /* 내부로 2px 만큼 옮김 */
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: ${({ $isVisible }) => ($isVisible ? '10' : '1')};
    //코치마크

    &::before {
      content: '';
      position: absolute;
      top: -10px;
      right: -10px;
      bottom: -10px;
      left: -10px; /* 테두리 바깥쪽 영역 */
      z-index: ${({ $isVisible }) =>
        $isVisible ? '-1' : 'none'}; /* div 뒤에 배치 */
      background-color: #fff;
      border-radius: 10px;
      display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
    }

    .amount-section {
      display: flex;
    }
  `,
  Title: styled.p`
    color: var(--Gray8, #595959);
    font-family: Pretendard;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  LoanPrice: styled.div`
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    & > img {
      width: 90px;
      margin-bottom: 0.25rem;
    }
  `,

  Grape: styled.div``,
};

const Big = styled.span`
  color: var(--Black, #262626);
  font-family: SUIT;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &::after {
    content: '원';
    color: var(--Black, #262626);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export default LoanTobepaid;
