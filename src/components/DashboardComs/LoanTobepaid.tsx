import React from 'react';
import { styled } from 'styled-components';
import payback from '../../assets/imgs/paybackTag.png';
import TransverseGraph from './TransverseGraph';
import AmountSection from './AmountSection';

const LoanTobepaid = () => {
  const value = 70; // 예시 데이터
  return (
    <Dash.Wrapper>
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
    </Dash.Wrapper>
  );
};

const Dash = {
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid var(--Gray3, #d9d9d9);
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

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
