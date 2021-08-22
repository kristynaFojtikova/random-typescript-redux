import React from 'react';
import {View} from 'react-native';

interface Props {
  height?: number;
}

const Spacer: React.FC<Props> = ({height = 15}) => {
  return <View style={{height: height}} />;
};

export default Spacer;
