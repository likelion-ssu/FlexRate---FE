import React from 'react';
import styled from 'styled-components';

interface AmountSectionProps {
  title: string;
  amount: string;
  totalAmount: string;
  period: string;
}

const AmountSection = ({
  title,
  amount,
  totalAmount,
  period,
}: AmountSectionProps) => {
  return (
    <Wrapper title={title}>
      <span className="title">{title}</span>
      <span className="amount">{amount}</span>
      <span className="tag">
        {totalAmount} / {period}
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7px;

  .title {
    color: var(--Gray6, #8c8c8c);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .amount {
    color: #000;
    font-family: SUIT;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  .amount::after {
    content: '원';
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  .tag {
    max-width: 135px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f4f4;
    color: var(--Gray6, #8c8c8c);
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 4px;
  }

  &:nth-child(2) {
    /* 두 번째 AmountSection에만 border-left를 추가합니다. */
    border-left: 2px solid #bfbfbf;
    padding-left: 5%;
  }
`;

export default AmountSection;
