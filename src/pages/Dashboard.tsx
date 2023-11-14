import MainSidebar from '@/components/MainSidebar';
import { styled } from 'styled-components';
import React, { useState, useEffect } from 'react';
import DashHeader from '@/components/DashboardComs/dashHeader';
const useNarrowScreen = () => {
  // 초기 상태 설정
  const [isNarrowScreen, setIsNarrowScreen] = useState(window.innerWidth > 600);

  useEffect(() => {
    // 화면 크기 변경 시 호출될 함수
    const handleResize = () => {
      setIsNarrowScreen(window.innerWidth > 1000);
    };
    window.addEventListener('resize', handleResize); // 이벤트 리스너 추가
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isNarrowScreen;
};
/**대시보드 페이지 */
const Dashboard = () => {
  const isNarrowScreen = useNarrowScreen();

  return (
    <Wrapper $isNarrowScreen={isNarrowScreen}>
      {isNarrowScreen ? <MainSidebar /> : <></>}
      <MainDashBoard $isNarrowScreen={isNarrowScreen}>
        <div id="Date"></div>
        <GridContainer>
          <div className="item1">
            <DashHeader />
          </div>{' '}
          {/*대출상품, 상환날짜, 납부 회차*/}
          <div className="item2">2</div>
          {/*알림*/}
          <div className="item3">3</div>
          {/*대출금리,신용평가 점수*/}
          <div className="item4">4</div>
          {/*이번달 대출금*/}
          <div className="item5">5</div>
          {/*금리변화*/}
          <div className="item6">6</div>
          {/*대출 히스토리*/}
        </GridContainer>
      </MainDashBoard>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ $isNarrowScreen: boolean }>`
  margin-left: ${(props) => (props.$isNarrowScreen ? '265px' : '0')};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const MainDashBoard = styled.span<{ $isNarrowScreen: boolean }>`
  position: fixed;
  width: ${(props) => (props.$isNarrowScreen ? 'calc(100% - 300px)' : '100%')};
  height: calc(100% - 150px);
  background-color: beige;
  margin: 30px 15px;
`;

const GridContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(4, 1fr); /* 4개의 열, 각각 동일한 크기 */
  grid-template-rows: repeat(5, 1fr); /* 5개의 행, 각각 동일한 크기 */
  gap: 18px; /* 그리드 사이의 간격 */
  .item1 {
    grid-area: 1 / 1 / 2 / 4;
  } /* 나의 대출 상품,이번달 대출금 상환 날짜, 대출금 납부 회차 */
  .item2 {
    grid-area: 1 / 4 / 4 / 5;
    background-color: black;
  } /* 첫 번째 행, 3~4열 */
  .item3 {
    grid-area: 2 / 1 / 4 / 2;
    background-color: black;
  } /* 2~3행, 첫 번째 열 */
  .item4 {
    grid-area: 2 / 2 / 4 / 4;
    background-color: black;
  } /* 2~3행, 2~3열 */
  .item5 {
    grid-area: 4 / 1 / 6 / 3;
    background-color: black;
  } /* 4~5행, 1~2열 */
  .item6 {
    grid-area: 4 / 3 / 6 / 5;
    background-color: black;
  } /* 4~5행, 3~4열 */
`;

export default Dashboard;
