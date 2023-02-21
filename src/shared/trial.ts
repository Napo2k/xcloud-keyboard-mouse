export const trialDays = 3000;

export type TrialStatus = 'active' | 'expired' | 'inactive';
export interface TrialState {
  status: TrialStatus;
  remainingDays: number;
}

export const computeTrialState = (): TrialState => {
  return { status: 'active', remainingDays: 3000 };
};
