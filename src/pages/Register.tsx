import RadioTwo from '@/components/RadioTwo';
import SearchAddress from '@/components/SearchAddress';
import {
  Wrapper,
  SignupBox,
  SignupInfobox,
  SignupBottombox,
} from '@/styles/SignupStyle';
import { BasicInput, Button } from '@/styles/BasicStyles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { styled } from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import flexrateLogo from '../assets/Logos/flexrateLogo.png';
import visible from '../assets/imgs/visible.png';
import Password from '@/components/RegisterComs/Password';

import { useRecoilState } from 'recoil';
import { registerInfo } from '../state/register';

interface RegisterValue {
  user_id: string;
  pwd: string;
  nickname: string;
  birth_year: Date;
  gender: boolean;
  phone_num: string;
  email: string;
  address: string;
}

const Register = () => {
  const [registerValue, setRegisterValue] = useRecoilState(registerInfo);

  return (
    <Wrapper>
      <SignupBox>
        {/* <div className="logo">로고</div> */}
        <Logo src={flexrateLogo} alt="flexrateLogo" />
        <p>회원가입</p>
        <SignupInfobox>
          <ul>
            <li>
              <label>아이디</label>
              <BasicInput
                type="text"
                placeholder="아이디를 입력하세요"
              ></BasicInput>
            </li>
            <li>
              <label>비밀번호</label>
              <Password />
            </li>
            <li>
              <label>비밀번호 확인</label>
              <BasicInput />
              <img className="invisible" src={visible} alt="" />
            </li>
            <li>
              <label>이름</label>
              <BasicInput></BasicInput>
            </li>
            <li>
              <label>생년월일</label>
              {/* <SelectDate /> */}
              <SelectDate
                selected={registerValue.birth_year}
                onChange={(date: Date) => {
                  setRegisterValue((prevState) => ({
                    ...prevState,
                    birth_year: date,
                  }));
                }}
                dateFormat="yyyy-MM-dd"
                popperPlacement="bottom"
                showPopperArrow={false}
              />
            </li>
            <li className="genderAndnationBox">
              <span>
                <label>성별</label>
                <RadioTwo prop1="남" prop2="여" commonname="gender" />
              </span>
              <span>
                <label>국적</label>
                <RadioTwo prop1="내국인" prop2="외국인" commonname="nation" />
              </span>
            </li>
            <li>
              <label>휴대폰번호</label>
              <BasicInput type="text"></BasicInput>
            </li>
            <li>
              <label>이메일</label>
              <BasicInput type="mail"></BasicInput>
            </li>
            <li>
              <label>주소</label>
              <SearchAddress />
            </li>
          </ul>
        </SignupInfobox>
        <SignupBottombox>
          <ul>
            <li>
              <span>
                {false ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <circle cx="11" cy="11" r="11" fill="#63C393" />
                    <path
                      d="M9.49375 13.6125L6.8875 11.0063L6 11.8875L9.49375 15.3813L16.9937 7.88125L16.1125 7L9.49375 13.6125Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="10.25"
                      stroke="#D9D9D9"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9.49375 13.6125L6.8875 11.0063L6 11.8875L9.49375 15.3813L16.9937 7.88125L16.1125 7L9.49375 13.6125Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                )}
              </span>
              <span>[필수] 개인정보 수집 및 이용 동의</span>
            </li>
            <li>
              <span>
                {false ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <circle cx="11" cy="11" r="11" fill="#63C393" />
                    <path
                      d="M9.49375 13.6125L6.8875 11.0063L6 11.8875L9.49375 15.3813L16.9937 7.88125L16.1125 7L9.49375 13.6125Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="10.25"
                      stroke="#D9D9D9"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M9.49375 13.6125L6.8875 11.0063L6 11.8875L9.49375 15.3813L16.9937 7.88125L16.1125 7L9.49375 13.6125Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                )}
              </span>
              <span>[필수] 개인정보 수집 및 이용 동의</span>
            </li>
          </ul>
          <div>
            <span>
              <p>이미 계정이 있다면?</p>
              <h4>로그인</h4>
            </span>
            <span className="btn">
              <Button>회원가입</Button>
            </span>
          </div>
        </SignupBottombox>
      </SignupBox>
    </Wrapper>
  );
};

const SelectDate = styled(DatePicker)`
  width: 620px;
  height: 55px;
  border-radius: 7px;
  border: 1.5px solid var(--Gray3, #d9d9d9);
  text-align: center;

  &:focus {
    outline: 1.5px solid var(--Primary, #63c393);
    border: none;
  }
`;

const Logo = styled.img`
  width: 222px;
  height: 64px;
  font-size: 40px;
  margin-right: 350px;
  margin-bottom: 40px;
`;

export default Register;
