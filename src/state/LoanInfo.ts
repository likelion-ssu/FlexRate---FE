import { atom } from 'recoil';

interface LoanInfoProps {
  payment: number;
  payment_date: number; //년도만 받고 나중엔 date로 수정
  quarterly_date: number;
  loan_maturity_date: number;
  remain_loan: number;
  paidback_loan: number;
  interest: number;
  limit: number;
  period: number;
}

export const LoanInfo = atom<LoanInfoProps>({
  key: 'loaninfo',
  default: {
    payment: 5000000,
    payment_date: 2023,
    quarterly_date: 2023,
    loan_maturity_date: 2024,
    remain_loan: 0,
    paidback_loan: 0,
    interest: 17.5,
    limit: 30000000,
    period: 2, //개월 수/12
  },
});
