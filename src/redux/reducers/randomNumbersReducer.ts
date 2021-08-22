import {RandomNumbersAction, RandomNumbersSnapshot} from '../actions';
import {RandomNumbersActionType} from '../action-types';
import {generateRandomNumbersSnapshot} from '../../util/generateRandomNumbersSnapshot';

interface RandomNumbersState {
  currentDigits: RandomNumbersSnapshot;
}

const initialState: RandomNumbersState = {
  currentDigits: generateRandomNumbersSnapshot(),
};

const randomNumbersReducer = (
  state: RandomNumbersState = initialState,
  action: RandomNumbersAction,
): RandomNumbersState => {
  switch (action.type) {
    case RandomNumbersActionType.UPDATE:
      return {currentDigits: action.payload};
    default:
      return state;
  }
};

export default randomNumbersReducer;
