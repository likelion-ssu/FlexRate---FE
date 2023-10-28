import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import visible from '../assets/imgs/visible.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 90px;
  width: 568px;
`;
const LoginBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 568px;
`;
const Logo = styled.div`
  width: 222px;
  height: 64px;
  font-size: 40px;
  margin-right: 300px;
`;
const LoginText = styled.div`
  width: 100%;
  font-size: 28px;
  font-weight: 800;
  line-height: 33px;
  text-align: left;
  margin-top: 40px;
`;
const Content = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  text-align: left;
  margin: 40px 0px 9px 0px;
`;
const Input = styled.input`
  width: 95%;
  height: 55px;
  border-radius: 7px;
  border: 1.5px solid #d9d9d9;
  ${({ invalid }) => invalid && 'border-color: red;'}
  padding-left: 25px;
`;
const PasswordBox = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  border-radius: 7px;
  border: 1.5px solid #d9d9d9;
  ${({ invalid }) => invalid && 'border-color: red;'}

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
const PasswordInput = styled.input`
  border: none;
  width: 90%;
  height: 90%;
  padding-left: 25px;
`;
const ImgButton = styled.button`
  border: none;
  background-color: white;
  margin-right: 10px;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const LeftButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;
const Button = styled.button`
  border: none;
  background-color: white;
  padding-top: 5px;
`;
const LoginButton = styled.button`
  color: white;
  border: none;
  background-color: #63c393;
  width: 90px;
  height: 43px;
  padding: 11px, 23px;
  border-radius: 7px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  padding-top: 5px;
`;

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleUsernameChange = (e: any) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    //로그인 api 호출

    setLoginFailed(true); //로그인 실패시
  };

  return (
    <Container>
      <LoginBox onSubmit={handleSubmit}>
        <Logo>로고</Logo>
        <LoginText>로그인</LoginText>
        <Content>아이디</Content>
        <Input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          invalid={loginFailed}
        ></Input>
        <Content>비밀번호</Content>

        <PasswordBox>
          <PasswordInput
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            invalid={loginFailed}
          ></PasswordInput>
          <ImgButton type="button" onClick={handleTogglePasswordVisibility}>
            <img src={visible} alt="" />
          </ImgButton>
        </PasswordBox>

        <Wrapper>
          <LeftButtonWrapper>
            <Button onClick={() => navigate('/signup')}>회원가입</Button>
            <div>|</div>
            <Button>비밀번호 찾기</Button>
          </LeftButtonWrapper>
          <LoginButton type="submit">로그인</LoginButton>
        </Wrapper>
      </LoginBox>
    </Container>
  );
};

export default Login;
