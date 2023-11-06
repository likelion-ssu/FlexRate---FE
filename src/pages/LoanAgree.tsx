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
  gap: 15px;

  ul,
  li {
    list-style: none;
    padding: 0px;
  }
`;

const PrimaryColor = styled.span`
  color: #63c393;
`;

const DetailSec = styled.section`
  //상세 내용 부분
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-top: 2rem;

  & > ul[id='detailbox'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1.5px solid #595959;
    border-bottom: 1.5px solid #595959;
    margin: 1rem 0;

    li:not(.detailFooter) {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 4rem;
      height: 62px;
      border-bottom: 1px solid #f4f4f4;

      & > span:nth-child(1) {
        flex: 1;
        color: var(--Gray7, #737373);
        font-family: Pretendard;
        font-size: 17px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding-left: 0.5rem;
      }

      & > span:nth-child(2) {
        flex: 3;
        color: var(--Black, #262626);
        font-family: Pretendard;
        font-size: 17px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }

    li[class='detailFooter'] {
      height: 5rem;
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;

      color: var(--Gray8, #595959);
      font-family: Pretendard;
      font-size: 13px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

const ApplicationSec = styled.section`
  //대출신청 접수 부분
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 120px;

  p {
    margin: 0px;
  }

  & > .subtitle {
    color: #000;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    margin-bottom: 15px;
  }
  & > .explanation {
    color: var(--Gray8, #595959);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  & ul[class='applicationbox'] {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    width: 100%;

    li {
      width: 100%;

      & > BUtton {
        margin-top: 35px;
      }
    }

    & > label {
      color: var(--Black, #262626);
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    .loanpricebox {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 10px;
      margin-top: 50px;
      width: 100%;

      & > .inputbottom {
        color: var(--Gray6, #8c8c8c);
        font-family: Pretendard;
        font-size: 15px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
    }

    .periodBox {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }
  }
`;

const LoanAgree = () => {
  const nav = useNavigate();

  return (
    <Article>
      <h2>대출 신청이 완료되었습니다</h2>
      <p>대출 실행 3일 전에 대출 실행에 동의해주세요.</p>
      <DetailSec>
        {/*신청내역*/}
        <h3>신청 내역</h3>
        <ul id="detailbox">
          <li>
            <span>대출 신청 금액</span>
            <span>
              <PrimaryColor>3,000,000</PrimaryColor>원
            </span>
          </li>
          <li>
            <span>대출 금리</span>
            <span>
              연 <PrimaryColor>14.5%</PrimaryColor>
            </span>
          </li>
          <li>
            <span>대출 실행일</span>
            <span>2023.10.07</span>
          </li>
          <li>
            <span>대출 기간</span>
            <span>2023.10.07~2026.10.07</span>
          </li>
          <li className="detailFooter">
            <span>
              · 위 대출금리는 현재 약정 시 조건이며, 대출 실행일의 기준금리에
              따라 변동될 수 있습니다.
            </span>
          </li>
        </ul>
      </DetailSec>

      <Button height="55px" onClick={() => nav('/dashboard')}>
        대시보드로 이동
      </Button>
    </Article>
  );
};

export default LoanAgree;
