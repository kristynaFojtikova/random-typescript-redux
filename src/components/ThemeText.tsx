import React from 'react';
import {Text, useColorScheme} from 'react-native';

interface Props {
  inverse?: boolean;
}

const ThemeText: React.FC<Props> = ({children, inverse = false}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const color = isDarkMode ? 'white' : 'black';
  const inverseColor = isDarkMode ? 'black' : 'white';

  const textStyle = {color: inverse ? inverseColor : color};

  return <Text style={textStyle}>{children}</Text>;
};

export default ThemeText;
