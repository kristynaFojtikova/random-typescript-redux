import React from 'react';
import {View, StyleSheet, useColorScheme} from 'react-native';

import ThemeText from './ThemeText';

interface Props {
  number: number;
}

const styles = StyleSheet.create({
  constainer: {
    margin: 5,
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const RandomNumberBox: React.FC<Props> = ({number}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View
      style={{
        ...styles.constainer,
        backgroundColor: isDarkMode ? 'white' : 'black',
      }}>
      <ThemeText inverse>{number}</ThemeText>
    </View>
  );
};

export default RandomNumberBox;
