import 'react-native';
import {RandomNumbersAction} from '../src/redux';
import {RandomNumbersActionType} from '../src/redux/action-types';
import randomNumbersReducer from '../src/redux/reducers/randomNumbersReducer';
import {generateRandomNumbersSnapshot} from '../src/util/generateRandomNumbersSnapshot';

describe('Random numbers - update state', () => {
  test('should update the state to the new snapshot', () => {
    const snapshot = generateRandomNumbersSnapshot();
    const action: RandomNumbersAction = {
      type: RandomNumbersActionType.UPDATE,
      payload: snapshot,
    };
    expect(randomNumbersReducer(undefined, action)).toEqual({
      currentDigits: snapshot,
    });
    const snapshot2 = generateRandomNumbersSnapshot();
    const action2: RandomNumbersAction = {
      type: RandomNumbersActionType.UPDATE,
      payload: snapshot2,
    };
    expect(randomNumbersReducer(undefined, action2)).toEqual({
      currentDigits: snapshot2,
    });
  });
});
