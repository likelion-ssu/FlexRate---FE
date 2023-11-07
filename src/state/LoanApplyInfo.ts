import { atom } from 'recoil';

//임시 값들
export const loanApplyInfo = atom({
  key: 'loanApplyInfo',
  default: {
    selectedJob: '회사원(정규직)',
    selectedEmployment: '정규직',
    academicName: '숭실대학교',
    selectedAcademicType: '학사',
    selectedPurpose: '투자',
    selectedDate: new Date(),
    personalRecovery: false,
    recoveryPayment: false,
    homeType: '',
    income: '6000',
    creditScore: '850',
  },
});
