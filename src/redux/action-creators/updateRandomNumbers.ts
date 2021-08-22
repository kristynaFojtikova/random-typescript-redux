import {generateRandomNumbersSnapshot} from '../../util/generateRandomNumbersSnapshot';
import {RandomNumbersActionType} from '../action-types';
import {RandomNumbersAction} from '../actions';

export const updateRandomNumbers = (): RandomNumbersAction => {
  const snapshot = generateRandomNumbersSnapshot();
  return {
    type: RandomNumbersActionType.UPDATE,
    payload: snapshot,
  };
};
