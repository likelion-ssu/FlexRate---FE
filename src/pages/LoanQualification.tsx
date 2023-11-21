import RadioThree from '@/components/RadioThree';
import { BasicInput, Button } from '@/styles/BasicStyles';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { output } from '@/state/output';
import { LoanInfo } from '@/state/LoanInfo';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 567px;
  margin-top: 126px;
  gap: 0.5rem;

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

  & > ul[id='detailbox'] {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1.5px solid #595959;
    border-bottom: 1.5px solid #595959;

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
      height: 97px;
      display: flex;
      flex-direction: column;
      justify-content: center;
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

const LoanQualification = () => {
  const nav = useNavigate();
  const outputvalue = useRecoilValue(output);
  const ave = (outputvalue.minRate + outputvalue.maxRate) / 2;

  const [payment, setPayment] = useState('');
  const [period, setPeriod] = useState('');
  const [loaninfo, setloaninfo] = useRecoilState(LoanInfo);
  const { payment_date } = loaninfo;

  //radio값 변경
  const onRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPeriod(e.target.value);
  };

  //제출
  const submitLoan = () => {
    const _period = parseInt(period);
    const _payment = parseInt(payment);

    setloaninfo((prev) => ({
      ...prev,
      loan_maturity_date: payment_date + _period,
      payment: _payment,
      interest: ave,
      limit: 3000000,
      period: _period,
    }));

    nav('/agree');
  };
  return (
    <Article>
      <h2>
        <PrimaryColor>숭멋사</PrimaryColor>님의 대출 심사 결과
      </h2>
      <DetailSec>
        {/*상세내용*/}
        <h3>상세 내용</h3>
        <ul id="detailbox">
          <li>
            <span>성명</span>
            <span>숭멋사</span>
          </li>
          <li>
            <span>대출 심사 일자</span>
            <span>2023.11.21</span>
          </li>
          <li>
            <span>대출 가능 한도</span>
            <span>
              <PrimaryColor>
                {outputvalue.loanLimit.toLocaleString()}
              </PrimaryColor>
              원
            </span>
          </li>
          <li>
            <span>초기 대출 금리</span>
            <span>
              연 <PrimaryColor>{outputvalue.maxRate}%</PrimaryColor>
            </span>
          </li>
          <li>
            <span>금리 범위</span>
            <span>
              연{' '}
              <PrimaryColor>
                {outputvalue.minRate}% ~ {outputvalue.maxRate}%
              </PrimaryColor>
            </span>
          </li>
          <li className="detailFooter">
            <span>· 기준금리 4.25% + 가산금리 10.35% - 우대금리 0.1%</span>
            <span>
              · 위 대출금리는 현재 약정 시 조건이며, 대출 실행일의 기준금리에
              따라 변동될 수 있습니다.
            </span>
          </li>
        </ul>
      </DetailSec>
      <ApplicationSec>
        {' '}
        {/*대출신청 접수*/}
        <p className="subtitle">대출 신청 접수</p>
        <p className="explanation">
          대출 가능 한도 내에서 대출 신청 금액을 조정해 기입해주세요.
        </p>
        <ul className="applicationbox">
          <li className="loanpricebox">
            <label>대출 금액</label>
            <BasicInput
              placeholder="숫자만 입력하세요"
              name="payment"
              value={payment}
              onChange={(e) => {
                e.preventDefault();
                setPayment(e.target.value);
              }}
            ></BasicInput>
            <p className="inputbottom">
              대출 금액은 <PrimaryColor>최대 한도 금액</PrimaryColor>까지
              가능합니다.
            </p>
          </li>
          <li className="periodBox">
            <label>대출 상환 기간</label>
            <RadioThree
              prop1="1년"
              prop2="2년"
              prop3="3년"
              commonname="period"
              onRadioChange={onRadioChange}
            />
          </li>
          <li>
            <Button height="55px" onClick={submitLoan}>
              대출 신청하기
            </Button>
          </li>
        </ul>
      </ApplicationSec>
    </Article>
  );
};

export default LoanQualification;
