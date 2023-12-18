import React, { useEffect } from 'react';
import * as S from '../styles/MypageStyle';
import axiosInstance from '@/apis/axiosinstance';

const Mypage = () => {
  let memberId: string | null;

  useEffect(() => {
    memberId = localStorage.getItem('memberid');
    getLoanInfo();
  }, []);
  //정보 api 받아오기

  //신용정보 api 받아오기
  const getLoanInfo = () => {
    //서버통신
    axiosInstance
      .get(`/mypage/${memberId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <S.Wrapper>
      <S.계정정보>
        <h3>계정 정보</h3>
        <S.ColumnBox>
          <S.Column>
            <p>이름</p>
            <p>숭멋사</p>
          </S.Column>
        </S.ColumnBox>
      </S.계정정보>
      <S.신용평가정보></S.신용평가정보>
    </S.Wrapper>
  );
};

export default Mypage;
