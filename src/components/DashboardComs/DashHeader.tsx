import React from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LoanInfo } from '@/state/LoanInfo';
import { CoachMarkStage } from '@/state/CoachMarkStage';
import Tooltip2 from '../CoachMarksComs/Tooltip2';
import { userInfo } from '@/state/userInfo';

const DashHeaderWrapper = styled.div<{ $isVisible: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  /* border: 1px solid #d9d9d9; */
  outline: 1px solid var(--Gray3, #d9d9d9);
  outline-offset: -1px;
  border-radius: 8px;
  padding: 17px 29px;
  gap: 1.5em;
  position: relative;

  z-index: ${({ $isVisible }) => ($isVisible ? '10' : '1')};
  //코치마크

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
    bottom: -5px;
    left: -5px; /* 테두리 바깥쪽 영역 */
    z-index: ${({ $isVisible }) =>
      $isVisible ? '-1' : '0'}; /* div 뒤에 배치 */
    background-color: #fff;
    border-radius: 10px;
    display: ${({ $isVisible }) => ($isVisible ? 'block' : 'none')};
  }
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
  const [coachMark, setCoachMark] = useRecoilState(CoachMarkStage);
  const data = useRecoilValue(userInfo);

  // stage 값에 접근
  const { stage, mode } = coachMark;

  // stage 값을 업데이트하는 함수
  const updateStage = (newStage: number) => {
    setCoachMark({ ...coachMark, stage: newStage });
  };

  let isVisible = mode && stage === 1;

  //loanInfo
  const info = useRecoilValue(LoanInfo);

  return (
    <DashHeaderWrapper $isVisible={isVisible}>
      <Container>
        <div>
          <Title $borderColor="#EB9475">나의 대출 상품</Title>
        </div>
        <div>
          <BoldGreen>Flexrate</BoldGreen>
          <Bold>신용대출</Bold>
          <Box color="#682A1A" $backgroundColor="#f6e5df">
            {`${data.loan_request / 10000}만원`}
          </Box>
          <Box color="#682A1A" $backgroundColor="#f6e5df">
            {`${data.loan_repay_term * 12}개월`}
          </Box>
        </div>
      </Container>
      <Container>
        <div>
          <Title $borderColor="#60C5C5">다음 달 대출금 상환 날짜</Title>
        </div>
        <div>
          <Bold>2024년 1월 19일</Bold>
          <Box color="#406969" $backgroundColor="#E0F2F3">
            D-31일 남았어요
          </Box>
        </div>
      </Container>
      <LastContainer>
        <div>
          <Title $borderColor="#4D81BF">금리 갱신 회차</Title>
        </div>
        <div>
          <Bold>{data.changes.length}회차</Bold>
        </div>
      </LastContainer>
      {isVisible && <Tooltip2 />}
    </DashHeaderWrapper>
  );
};

export default DashHeader;
