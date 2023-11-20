// CoachMarkStage.ts
import { atom } from 'recoil';

interface CoachMarkStageState {
  stage: number;
  totalStage: number;
  mode: boolean;
}

export const CoachMarkStage = atom<CoachMarkStageState>({
  key: 'coachMarkStage',
  default: {
    stage: 5,
    totalStage: 6,
    mode: false,
  },
});

interface ShowCoachMark {
  beginer: boolean;
}

export const ShowCoachMark = atom<ShowCoachMark>({
  key: 'ShowCoachMark',
  default: {
    beginer: true,
  },
});
