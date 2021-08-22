import {combineReducers} from 'redux';
import randomNumbersReducer from './randomNumbersReducer';

const reducers = combineReducers({
  randomNumbers: randomNumbersReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
