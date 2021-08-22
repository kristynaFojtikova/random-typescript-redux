import {RandomNumbersActionType} from '../action-types';

export interface RandomNumbersSnapshot {
  randomDigitOne: number;
  randomDigitTwo: number;
  randomDigitThree: number;
}

interface UpdateRandomNumbersAction {
  type: RandomNumbersActionType.UPDATE;
  payload: RandomNumbersSnapshot;
}

export type RandomNumbersAction = UpdateRandomNumbersAction;
