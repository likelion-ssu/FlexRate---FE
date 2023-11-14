import React from 'react';
import { styled } from 'styled-components';

const DashHeader = () => {
  return (
    <DashHeaderWrapper>
      <Container>
        <div>나의 대출 상품</div>
        <div>
          <span>Flexrate 신용대출</span>
          <span>500만원</span>
          <span>12개월</span>
        </div>
      </Container>
      <Container></Container>
      <Container></Container>
    </DashHeaderWrapper>
  );
};

const DashHeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 17px;
`;

const Container = styled.div`
  flex: 1;
  border-right: 1px solid #bfbfbf;
`;

export default DashHeader;
