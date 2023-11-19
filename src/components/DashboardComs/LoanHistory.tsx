import React from 'react';
import { styled } from 'styled-components';

const LoanHistory = () => {
  return (
    <Dash.Wrapper>
      <Dash.Title>나의 대출 히스토리</Dash.Title>
      <Dash.Cate>
        <span>
          <Dash.Label>대출시작일</Dash.Label>
          <Dash.Content>2022년 12월 10일</Dash.Content>
        </span>
        <span>
          <Dash.Label>금리 변경 횟수</Dash.Label>
          <Dash.Content>0회</Dash.Content>
        </span>
        <span>
          <Dash.Label>상환 횟수</Dash.Label>
          <Dash.Content>0회</Dash.Content>
        </span>
        <span>
          <Dash.Label>연체 횟수</Dash.Label>
          <Dash.Content>0회</Dash.Content>
        </span>
      </Dash.Cate>
      <Dash.ScrollBoard>
        <BoardItem>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
          >
            <path
              d="M2.16675 10C2.16675 6.07166 2.16675 4.1075 3.38675 2.88666C4.60841 1.66666 6.57175 1.66666 10.5001 1.66666C14.4284 1.66666 16.3926 1.66666 17.6126 2.88666C18.8334 4.10833 18.8334 6.07166 18.8334 10C18.8334 13.9283 18.8334 15.8925 17.6126 17.1125C16.3934 18.3333 14.4284 18.3333 10.5001 18.3333C6.57175 18.3333 4.60758 18.3333 3.38675 17.1125C2.16675 15.8933 2.16675 13.9283 2.16675 10Z"
              stroke="#8C8C8C"
              stroke-width="1.5625"
            />
            <path
              d="M6.3335 11.6667L8.24433 9.75583C8.4006 9.59961 8.61253 9.51184 8.8335 9.51184C9.05447 9.51184 9.26639 9.59961 9.42266 9.75583L10.7443 11.0775C10.9006 11.2337 11.1125 11.3215 11.3335 11.3215C11.5545 11.3215 11.7664 11.2337 11.9227 11.0775L14.6668 8.33333M14.6668 8.33333V10.4167M14.6668 8.33333H12.5835"
              stroke="#8C8C8C"
              stroke-width="1.5625"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p>상환 기록이 없습니다</p>
        </BoardItem>
      </Dash.ScrollBoard>
    </Dash.Wrapper>
  );
};

const Dash = {
  Wrapper: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid var(--Gray3, #d9d9d9);
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    transition: 0.5s; /* 변화가 있을 때 시간차 주기*/

    &:hover {
      transform: translateY(-2px); /*위로 5px이동*/
      box-shadow: 5px 5px 5px 0 #d9d9d9;
    }
  `,
  Title: styled.p`
    margin: 22px 22px 0 22px;
    color: var(--Gray8, #595959);
    font-family: Pretendard;
    font-size: 0.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `,
  Cate: styled.div`
    margin: 0 22px 0 22px;
    display: flex;
    justify-content: space-between;
    & > span {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    & > span:not(:nth-child(1)) {
      border-left: 1px solid #bfbfbf;
      padding-left: 1rem;
    }
  `,
  Label: styled.p`
    color: var(--Gray6, #8c8c8c);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  Content: styled.p`
    color: #000;
    font-family: SUIT;
    font-size: 15px;
    font-weight: 800;
    overflow-wrap: break-word;
  `,
  ScrollBoard: styled.div`
    position: absolute;
    bottom: 0px;
    display: flex;
    width: calc(100% - 22px);
    gap: 0.5rem;
    padding: 0.5rem 0 1rem 22px;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    &::-webkit-scrollbar {
      height: 7px;
    }

    /*  막대기 */
    &::-webkit-scrollbar-thumb {
      border-radius: 20px;
      background-color: #a6a6a6;
      border: 5px solid transparent;
    }

    /* 백그라운드 */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
      background-size: cover;
    }

    /*스크롤바 커스텀 끝*/
  `,
};
const BoardItem = styled.div`
  min-width: 150px;
  height: 7rem;
  border-radius: 10px;
  border: 1px solid var(--Gray3, #d9d9d9);
  background: #f9fafb;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  & > p {
    color: var(--Gray9, #414141);
    font-family: Pretendard;
    font-size: 12px;
    font-weight: 600;
  }
`;

export default LoanHistory;
