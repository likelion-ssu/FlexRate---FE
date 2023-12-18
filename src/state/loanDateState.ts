import { atom } from 'recoil';

interface loanDateStateProps {
  startYear: number;
  endYear: number;
  month: number;
  day: number;
}

export const loanDateState = atom<loanDateStateProps>({
  key: 'loanDateState',
  default: {
    startYear: 0,
    endYear: 0,
    month: 0,
    day: 0,
  },
});
