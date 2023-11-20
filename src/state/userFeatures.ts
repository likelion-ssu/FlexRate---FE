import { atom } from 'recoil';

export const userFeatures = atom({
  key: 'userFeatures',
  default: {
    credit_score: 750, // 신용점수
    yearly_income: 500000, // 연수익
    company_enter_month: 1.5, // 근무년수
    existing_loan_cnt: 1, // 기대출수
    existing_loan_amt: 500000, // 기대출금
    debt_rate: 1, // 대출 비율 (기대출금 / 연수익)
    income_type_EARNEDINCOME2: 0, // 수익 유형 근로소득2 (4대보험 미가입)
    income_type_FREELANCER: 1, // 수익 유형 프리랜서
    income_type_OTHERINCOME: 0, // 수익 유형 기타 소득
    income_type_PRACTITIONER: 0, // 수익 유형 전문직
    income_type_PRIVATEBUSINESS: 0, // 수익 유형 개인 사업
    employment_type_기타: 0, // 근로형태 기타
    employment_type_일용직: 0, // 근로형태 일용직
    employment_type_정규직: 1, // 근로형태 정규직
    houseown_type_배우자: 0, // 거주지소유형태 배우자
    houseown_type_자가: 1, // 거주지소유형태 자가
    houseown_type_전월세: 0, // 거주지소유형태 전월세
  },
});
