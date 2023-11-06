import RadioThree from '@/components/RadioThree';
import { BasicInput, Button } from '@/styles/BasicStyles';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 567px;
  margin-top: 126px;
  gap: 1rem;

  & > h2 {
    line-height: 35px;
  }
  & > p {
    color: var(--Gray8, #595959);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  Button {
    margin-top: 2.5rem;
  }
`;

const LoanDisagree = () => {
  const nav = useNavigate();

  return (
    <Article>
      <h2>
        죄송합니다
        <br />
        대출 신청이 거부되었습니다
      </h2>

      <p>
        입력하신 적합성 정보 및 신용평가기관 정보에 따른 심사 결과로 대출 신청
        진행이 종료되었습니다.
      </p>
      <Button height="55px" onClick={() => nav('/dashboard')}>
        대시보드로 이동
      </Button>
    </Article>
  );
};

export default LoanDisagree;
