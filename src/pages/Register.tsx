import RadioTwo from '@/components/RadioTwo';
import SearchAddress from '@/components/SearchAddress';
import {
  Wrapper,
  BasicInput,
  SignupBox,
  SignupInfobox,
  SignupBottombox,
} from '@/styles/SignupStyle';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { styled } from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SelectDate = styled(DatePicker)`
  width: 568px;
  height: 55px;
  border-radius: 7px;
  border: 1.5px solid var(--Gray3, #d9d9d9);
  text-align: center;

  &:focus {
    outline: 1.5px solid var(--Primary, #63c393);
    border: none;
  }
`;

const Register = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <Wrapper>
      <SignupBox>
        <div className="logo">로고</div>
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
              <BasicInput type="password"></BasicInput>
              <svg //눈동자 표시
                className="invisible"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.4374 16.8793C13.8115 17.9312 11.925 18.4882 9.99954 18.4849C5.01548 18.4849 0.868882 14.8268 0 9.99953C0.397179 7.80402 1.47946 5.79825 3.08546 4.28134L0.195961 1.33314L1.50298 0L19.804 18.6659L18.497 20L15.4374 16.8793ZM4.39432 5.61542C3.13781 6.78023 2.26241 8.31062 1.88658 9.99953C2.17525 11.2878 2.75478 12.4896 3.57906 13.5093C4.40333 14.5289 5.44958 15.3381 6.63452 15.8726C7.81946 16.4071 9.11036 16.6521 10.4045 16.5881C11.6986 16.524 12.9602 16.1527 14.0888 15.5037L12.2143 13.5917C11.4163 14.1044 10.4711 14.3253 9.53389 14.2181C8.59664 14.1109 7.72292 13.6821 7.05603 13.0019C6.38915 12.3217 5.96869 11.4305 5.86362 10.4745C5.75856 9.5185 5.97512 8.55448 6.47779 7.74054L4.39432 5.61542ZM10.8444 12.1944L7.84767 9.13873C7.68319 9.56577 7.64449 10.0325 7.73629 10.4816C7.82809 10.9308 8.04642 11.3428 8.36448 11.6673C8.68255 11.9917 9.08653 12.2144 9.52688 12.308C9.96723 12.4017 10.4257 12.3622 10.8444 12.1944ZM18.1402 14.3299L16.8175 12.9807C17.4357 12.0826 17.8759 11.0699 18.1134 9.99953C17.8622 8.87721 17.3899 7.81872 16.7251 6.88841C16.0603 5.9581 15.217 5.17541 14.2464 4.5879C13.2758 4.0004 12.1983 3.62037 11.0792 3.4709C9.9601 3.32144 8.82291 3.40567 7.73675 3.71847L6.27813 2.23071C7.43079 1.76873 8.68697 1.51417 9.99954 1.51417C14.9836 1.51417 19.1302 5.1723 20 9.99953C19.7169 11.5703 19.0803 13.0526 18.1402 14.3299ZM9.74349 5.76533C10.3318 5.72825 10.9212 5.81914 11.4725 6.03198C12.0238 6.24482 12.5245 6.57475 12.9413 6.99991C13.3581 7.42506 13.6816 7.93572 13.8903 8.49805C14.0989 9.06038 14.188 9.66152 14.1517 10.2616L9.74257 5.76439L9.74349 5.76533Z"
                  fill="#D9D9D9"
                />
              </svg>
              <div className="pwCheck">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M12.75 4.9585L6.67857 12.0418L4.25 9.2085"
                    stroke="#919191"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                최소 8글자 이상
              </div>
              <div className="pwCheck">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M12.75 4.9585L6.67857 12.0418L4.25 9.2085"
                    stroke="#919191"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                대문자, 소문자, 숫자, 특수문자 중 3종류 이상
              </div>
            </li>
            <li>
              <label>비밀번호 확인</label>
              <BasicInput type="password" />
              <svg
                className="invisible"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M15.4374 16.8793C13.8115 17.9312 11.925 18.4882 9.99954 18.4849C5.01548 18.4849 0.868882 14.8268 0 9.99953C0.397179 7.80402 1.47946 5.79825 3.08546 4.28134L0.195961 1.33314L1.50298 0L19.804 18.6659L18.497 20L15.4374 16.8793ZM4.39432 5.61542C3.13781 6.78023 2.26241 8.31062 1.88658 9.99953C2.17525 11.2878 2.75478 12.4896 3.57906 13.5093C4.40333 14.5289 5.44958 15.3381 6.63452 15.8726C7.81946 16.4071 9.11036 16.6521 10.4045 16.5881C11.6986 16.524 12.9602 16.1527 14.0888 15.5037L12.2143 13.5917C11.4163 14.1044 10.4711 14.3253 9.53389 14.2181C8.59664 14.1109 7.72292 13.6821 7.05603 13.0019C6.38915 12.3217 5.96869 11.4305 5.86362 10.4745C5.75856 9.5185 5.97512 8.55448 6.47779 7.74054L4.39432 5.61542ZM10.8444 12.1944L7.84767 9.13873C7.68319 9.56577 7.64449 10.0325 7.73629 10.4816C7.82809 10.9308 8.04642 11.3428 8.36448 11.6673C8.68255 11.9917 9.08653 12.2144 9.52688 12.308C9.96723 12.4017 10.4257 12.3622 10.8444 12.1944ZM18.1402 14.3299L16.8175 12.9807C17.4357 12.0826 17.8759 11.0699 18.1134 9.99953C17.8622 8.87721 17.3899 7.81872 16.7251 6.88841C16.0603 5.9581 15.217 5.17541 14.2464 4.5879C13.2758 4.0004 12.1983 3.62037 11.0792 3.4709C9.9601 3.32144 8.82291 3.40567 7.73675 3.71847L6.27813 2.23071C7.43079 1.76873 8.68697 1.51417 9.99954 1.51417C14.9836 1.51417 19.1302 5.1723 20 9.99953C19.7169 11.5703 19.0803 13.0526 18.1402 14.3299ZM9.74349 5.76533C10.3318 5.72825 10.9212 5.81914 11.4725 6.03198C12.0238 6.24482 12.5245 6.57475 12.9413 6.99991C13.3581 7.42506 13.6816 7.93572 13.8903 8.49805C14.0989 9.06038 14.188 9.66152 14.1517 10.2616L9.74257 5.76439L9.74349 5.76533Z"
                  fill="#D9D9D9"
                />
              </svg>
            </li>
            <li>
              <label>이름</label>
              <BasicInput></BasicInput>
            </li>
            <li>
              <label>생년월일</label>
              {/* <SelectDate /> */}
              <SelectDate
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
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
                      stroke-width="1.5"
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
                      stroke-width="1.5"
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
            <span>
              <button>회원가입</button>
            </span>
          </div>
        </SignupBottombox>
      </SignupBox>
    </Wrapper>
  );
};

export default Register;
