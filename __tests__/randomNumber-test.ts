/**
 * @format
 */

import 'react-native';

import {randomNumber} from '../src/util/randomNumber';

describe('Multiple - Random number upper cap', () => {
  test('less than or equal to 1000', () => {
    for (let index = 0; index < 20; index++) {
      expect(randomNumber()).toBeLessThanOrEqual(1000);
    }
  });
});

describe('Multiple - Random number lower cap', () => {
  test('bigger than 0', () => {
    for (let index = 0; index < 20; index++) {
      expect(randomNumber()).toBeGreaterThan(0);
    }
  });
});
