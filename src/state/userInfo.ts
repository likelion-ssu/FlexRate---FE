import { atom } from 'recoil';

interface userInfoProps {
  insert_time: string;
  loan_request: number;
  loan_repay_term: number;
  loan_payment_count: number;
  loan_initial: number;
  principal_month: number;
  interest_month: number;
  changes: Array<{
    change_loan_initial: number;
    change_insert_time: string;
  }>;
  creditScore: number;
  newCreditScore: number;
}

export const userInfo = atom<userInfoProps>({
  key: 'userInfo',
  default: {
    loan_request: 100000,
    insert_time: '',
    loan_repay_term: 1,
    loan_payment_count: 80,
    loan_initial: 16,
    principal_month: 0,
    interest_month: 0,
    changes: [
      { change_loan_initial: 16, change_insert_time: '' },
      { change_loan_initial: 15, change_insert_time: '' },
      { change_loan_initial: 17, change_insert_time: '' },
      { change_loan_initial: 15, change_insert_time: '' },
      { change_loan_initial: 14, change_insert_time: '' },
      { change_loan_initial: 18, change_insert_time: '' },
      { change_loan_initial: 15, change_insert_time: '' },
      { change_loan_initial: 16, change_insert_time: '' },
    ],
    creditScore: 600,
    newCreditScore: 800,
  },
});
