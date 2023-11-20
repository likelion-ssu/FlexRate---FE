import React from 'react';
import styled from 'styled-components';

import { useRecoilState } from 'recoil';
import { CoachMarkStage } from '@/state/CoachMarkStage';

const MainSidebar = () => {
  const [coachMark, setCoachMark] = useRecoilState(CoachMarkStage);

  // stage 값에 접근
  const { stage, mode } = coachMark;

  // stage 값을 업데이트하는 함수
  const updateStage = (newStage: number) => {
    setCoachMark({ ...coachMark, stage: newStage });
  };

  let isVisible = mode && stage === 1;
  return (
    <Sidebar>
      <div id="profile">
        <span id="profile-img">
          {/* <img src="" alt="프로필이미지"></img> */}
        </span>
        <span id="profile-right">
          <p className="profile-intro">
            <span className="color">숭멋사</span> 님, 반가워요!
          </p>
          <p id="profile-id">likelion2023</p>
        </span>
      </div>
      <List>
        <div className="title">대시보드</div>
        <ul className="list">
          <li className="bold-text">
            <ClickPage />내 대출 관리하기
          </li>
          <li>내 소비 관리하기</li>
        </ul>
      </List>
      <List>
        <div className="title">분석</div>
        <ul className="list">
          <li>내 신용점수 분석</li>
        </ul>
      </List>
      <List>
        <div className="title">설정</div>
        <ul className="list">
          <li>마이페이지</li>
        </ul>
      </List>
      <List>
        <div className="title">이번주 미션</div>
        <ul className="list">
          <li>행운퀴즈</li>
        </ul>
      </List>
    </Sidebar>
  );
};

const Sidebar = styled.aside`
  padding: 1.5rem;
  position: fixed;
  top: 64px;
  left: 0px;
  border-right: 1px solid var(--Gray3, #d9d9d9);
  background: #f9fafc;
  width: 11.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  & > #profile {
    width: 100%;
    display: flex;
    gap: 15px;
    align-items: center;
    padding-bottom: 18px;
    border-bottom: 1px solid #d9d9d9;

    #profile-img {
      width: 41px;
      height: 41px;
      border-radius: 50px;
      overflow: hidden;
      background-color: #f1f1f1;
    }

    #profile-right {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .profile-intro {
      color: var(--Black, #262626);
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .color {
      color: var(--Primary_Pressed_1, #4d9a75);
    }

    #profile-id {
      color: var(--Gray4, #bfbfbf);
      font-family: Pretendard;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  .list {
    padding: 0;
    list-style: none;

    & > li {
      height: 32px;
      color: var(--Gray9, #414141);
      font-family: Pretendard;
      font-size: 16px;
      font-weight: 400;
      line-height: 32px;

      &:hover {
        cursor: pointer;
        color: #63c393;
      }
    }

    & > .bold-text {
      color: #262626;
      font-weight: 700;
    }
  }

  .title {
    color: var(--Gray5, #a6a6a6);
    font-family: Pretendard;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const ClickPage = styled.span`
  position: absolute;
  left: 0px;
  width: 7px;
  height: 32px;
  border-radius: 0px 5px 5px 0px;
  background: var(--Primary, #63c393);
`;

export default MainSidebar;
