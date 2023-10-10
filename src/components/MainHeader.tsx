import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  padding: 13px 37px 14px 22px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;
const Logo = styled.button`
  background-color: #fff;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;

  width: 199px;
  margin-right: 30px;
`;
const Button = styled.button`
  background-color: white;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #595959;
  margin: 0px 30px;
`;
const SignupButton = styled(Button)`
  background-color: #63c393;
  border-radius: 5px;
  width: 100px;
  height: 32px;
  padding: 8px, 16px, 8px, 16px;
  color: white;
  font-size: 13px;
  font-weight: 600;
  margin-right: 0px;
`;
const LoginButton = styled(Button)`
  font-size: 14px;
  font-weight: 500;
  margin-right: 0px;
`;

const MainHeader = () => {
  const navigate = useNavigate();

  return (
    <Header>
      <div>
        <Logo>로고</Logo>
        <Button onClick={() => navigate('/main')}>메인</Button>
        <Button>금융 대시보드</Button>
      </div>
      <div>
        <LoginButton onClick={() => navigate('/login')}>로그인</LoginButton>
        <SignupButton onClick={() => navigate('/signup')}>
          회원가입하기
        </SignupButton>
      </div>
    </Header>
  );
};

export default MainHeader;
