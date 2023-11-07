import { atom } from 'recoil';

//임시 값들
export const loanApplyInfo = atom({
  key: 'loanApplyInfo',
  default: {
    myJob: '회사원(정규직)',
    myEmployment: '정규직',
    myAcademicName: '숭실대학교',
    myAcademicType: '학사',
    myPurpose: '투자',
    myDate: new Date(),
    myPersonalRecovery: 'false',
    myRecoveryPayment: '',
    myHomeType: '',
    myIncome: '6000',
    myCreditScore: '850',
  },
});
