import { styled } from 'styled-components';
import onBoardingImg from '@/assets/imgs/온보딩.png';
import toLoanImg from '../assets/imgs/toLoanBtn.png';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const nav = useNavigate();
  return (
    <OnBoarding>
      <Bg $onBoardingImg={onBoardingImg}>
        <IMG
          src={toLoanImg}
          alt="대출하러가기 버튼"
          onClick={() => {
            nav('/dashboard');
          }}
        />
      </Bg>
    </OnBoarding>
  );
};

const OnBoarding = styled.div`
  position: relative;
  width: 100%;
  height: 4500px;
`;

const IMG = styled.img`
  position: absolute;
  top: 300px;
  width: 15rem;
  z-index: 1;
  left: 50%; /* 화면 가로 중앙으로 이동 */
  transform: translateX(-50%); //left 값의 절반을 왼쪽으로 이동
  &:hover {
    cursor: pointer;
  }
`;

const Bg = styled.div<{ $onBoardingImg: string }>`
  position: absolute;
  top: 64px;
  width: 100%;
  height: 160%;
  background-image: url(${(props) => props.$onBoardingImg});
  background-size: contain; /* 이미지를 화면에 맞게 조정 */
  background-repeat: no-repeat;
`;

export default Main;
