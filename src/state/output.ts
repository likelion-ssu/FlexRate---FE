import { atom } from 'recoil';

interface outputProps {
  Score: number;
  maxRate: number;
  minRate: number;
  loanLimit: number;
}

export const output = atom<outputProps>({
  key: 'output',
  default: {
    Score: 0,
    maxRate: 0,
    minRate: 0,
    loanLimit: 0,
  },
});
