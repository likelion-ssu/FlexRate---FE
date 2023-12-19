import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/Logos/flexrateLogo.png';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  border-bottom: 1px solid #d9d9d9;
  height: 64px;
  padding: 0 3rem;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 100%;
  }
`;
const Logo = styled.button`
  background-color: #fff;
  border: none;
  font-size: 1.5rem;
  font-weight: 700;
  width: 150px;
  margin-right: 30px;

  & > img {
    height: 2rem;
  }
`;

const Button = styled.button<{ $active?: boolean }>`
  background-color: white;
  border: none;
  border-bottom: ${(props) => (props.$active ? '3px solid #63c393' : 'none')};
  height: 100%;
  font-size: 16px;
  font-weight: 500;
  color: #595959;

  &:hover {
    border-bottom: 3px solid #63c393;
  }
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
  //main인지, dashboard인지
  let location = useLocation();
  const pathSegments = location.pathname.split('/'); //경로는 /로 구분
  const nowpath = pathSegments[1];

  //로그인 되어있는지
  let isLogin = localStorage.getItem('accessToken');
  return (
    <Header>
      <div>
        <Logo>
          <img src={logo} alt="로고" onClick={() => navigate('/dashboard')} />
        </Logo>
        <Button onClick={() => navigate('/main')} $active={nowpath === 'main'}>
          메인
        </Button>
        <Button
          onClick={() => navigate('/dashboard')}
          $active={nowpath === 'dashboard'}
        >
          한 눈에 보는 대시보드
        </Button>
      </div>
      {isLogin ? (
        <div></div>
      ) : (
        <div>
          <LoginButton onClick={() => navigate('/login')}>로그인</LoginButton>
          <SignupButton onClick={() => navigate('/signup')}>
            회원가입하기
          </SignupButton>
        </div>
      )}
    </Header>
  );
};

export default MainHeader;
