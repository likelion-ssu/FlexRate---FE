import React from 'react';
import styled from 'styled-components';

const DashHeaderWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 17px 29px;
  gap: 1.5em;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 17px 0px;
  flex: 1;
  border-right: 1px solid #bfbfbf;
  & > div {
    margin: 8px 0;
    display: flex;
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    color: #595959;
    gap: 0.5em;
    align-items: center;
  }
`;
const LastContainer = styled(Container)`
  border-right: none;
`;
const Title = styled.div<{ $borderColor: string }>`
  //prop으로 border color
  border-left: 2px solid ${(props) => props.$borderColor};
  padding-left: 8px;
`;
const Bold = styled.span`
  color: black;
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`;
const BoldGreen = styled(Bold)`
  color: #63c393;
`;
const Box = styled.span<{ $backgroundColor: string }>`
  //color background color prop으로
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  border-radius: 5px;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.color};
  padding: 3px 5px;
`;

const DashHeader = () => {
  return (
    <DashHeaderWrapper>
      <Container>
        <div>
          <Title $borderColor="#EB9475">나의 대출 상품</Title>
        </div>
        <div>
          <BoldGreen>Flexrate</BoldGreen>
          <Bold>신용대출</Bold>
          <Box color="#682A1A" $backgroundColor="#f6e5df">
            300만원
          </Box>
          <Box color="#682A1A" $backgroundColor="#f6e5df">
            12개월
          </Box>
        </div>
      </Container>
      <Container>
        <div>
          <Title $borderColor="#60C5C5">이번 달 대출금 상환 날짜</Title>
        </div>
        <div>
          <Bold>2023년 11월 7일</Bold>
          <Box color="#406969" $backgroundColor="#E0F2F3">
            D-8일 남았어요
          </Box>
        </div>
      </Container>
      <LastContainer>
        <div>
          <Title $borderColor="#4D81BF">대출금 납부 회차</Title>
        </div>
        <div>
          <Bold>5회차</Bold>
        </div>
      </LastContainer>
    </DashHeaderWrapper>
  );
};

export default DashHeader;
