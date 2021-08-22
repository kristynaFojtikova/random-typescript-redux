/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux';

import RandomNumbersScreen from './src/screens/RandomNumberScreen';

const App = () => {
  return (
    <Provider store={store}>
      <RandomNumbersScreen />
    </Provider>
  );
};

export default App;
