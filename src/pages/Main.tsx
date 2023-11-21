import { styled } from 'styled-components';
import onBoardingImg from '@/assets/imgs/onBoarding.png';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const nav = useNavigate();
  return (
    <OnBoarding>
      <Bg
        $onBoardingImg={onBoardingImg}
        onClick={() => {
          nav('/dashboard');
        }}
      ></Bg>
    </OnBoarding>
  );
};

const OnBoarding = styled.div`
  position: relative;
  width: 100%;
  height: 4000px;
`;

const Bg = styled.div<{ $onBoardingImg: string }>`
  position: absolute;
  top: -64px;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$onBoardingImg});
  background-size: cover;
`;

export default Main;
