import React from 'react';
import {View, StyleSheet} from 'react-native';
import RandomNumberBox from '../components/NumberBox';
import {RandomNumbersSnapshot} from '../redux';

interface Props {
  snapshot: RandomNumbersSnapshot;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
});

const NumbersRow: React.FC<Props> = ({snapshot}) => {
  return (
    <View style={styles.row}>
      <RandomNumberBox number={snapshot.randomDigitOne} />
      <RandomNumberBox number={snapshot.randomDigitTwo} />
      <RandomNumberBox number={snapshot.randomDigitThree} />
    </View>
  );
};

export default NumbersRow;
