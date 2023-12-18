import styled from 'styled-components';
import { BasicInput } from '@/styles/BasicStyles';
import visible from '../../assets/imgs/visible.png';

import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { registerInfo } from '../../state/register';
import { HiddenIcon } from '@/assets/svgs/0_index';

import { CheckIcon } from '@/assets/svgs/0_index';
//비밀번호

const Password = () => {
  const [registerValue, setRegisterValue] = useRecoilState(registerInfo);
  const [pwisvisible, setPwisvisible] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    isLongEnough: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });

  // 비밀번호 검증 함수
  const validatePassword = (password: string) => {
    setPasswordValidations({
      isLongEnough: password.length >= 8,
      hasUpperCase: /[A-Z]/.test(password),
      hasLowerCase: /[a-z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[^A-Za-z0-9]/.test(password),
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterValue({
      ...registerValue,
      password: event.target.value,
    });
    validatePassword(event.target.value);
  };

  const showPwd = () => {
    setPwisvisible(!pwisvisible);
  };

  return (
    <Wrappeer>
      <BasicInput
        type={pwisvisible ? 'text' : 'password'}
        onChange={handleChange}
        value={registerValue.password}
      ></BasicInput>
      <HiddenIcon className="invisible" onClick={showPwd} />
      <ValidationText
        className="pwCheck"
        $isValid={passwordValidations.isLongEnough}
      >
        <CheckIcon />
        최소 8글자 이상
      </ValidationText>
      <ValidationText
        className="pwCheck"
        $isValid={
          [
            passwordValidations.hasUpperCase,
            passwordValidations.hasLowerCase,
            passwordValidations.hasNumber,
            passwordValidations.hasSpecialChar,
          ].filter(Boolean).length >= 3
        }
      >
        <CheckIcon />
        대문자, 소문자, 숫자, 특수문자 중 3종류 이상
      </ValidationText>
    </Wrappeer>
  );
};

const Wrappeer = styled.div`
  .pwCheck {
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: 15px;
    margin-top: 5px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

const ValidationText = styled.div<{ $isValid: boolean }>`
  color: ${(props) => (props.$isValid ? '#63c393' : '#909090')};
  stroke: ${(props) => (props.$isValid ? '#63c393' : '#909090')};
`;

export default Password;
