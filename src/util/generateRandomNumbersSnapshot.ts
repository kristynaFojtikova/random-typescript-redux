import {RandomNumbersSnapshot} from '../redux';
import {randomNumber} from './randomNumber';

export const generateRandomNumbersSnapshot = (): RandomNumbersSnapshot => {
  return {
    randomDigitOne: randomNumber(),
    randomDigitTwo: randomNumber(),
    randomDigitThree: randomNumber(),
  };
};
