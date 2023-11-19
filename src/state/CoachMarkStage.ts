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
    stage: 0,
    totalStage: 6,
    mode: false,
  },
});
