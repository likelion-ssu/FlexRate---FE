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
}

export const LoanInfo = atom<LoanInfoProps>({
  key: 'loaninfo',
  default: {
    payment: 0,
    payment_date: 2023,
    quarterly_date: 0,
    loan_maturity_date: 0,
    remain_loan: 0,
    paidback_loan: 0,
    interest: 0,
    limit: 0,
  },
});
