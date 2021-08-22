import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Alert, SafeAreaView} from 'react-native';
import NumbersRow from '../components/NumbersRow';
import Spacer from '../components/Spacer';
import {useActions} from '../hooks/useActions';
import {useRootSelector} from '../hooks/useRootSelector';

import {RandomNumbersSnapshot} from '../redux';

interface Props {}

const RandomNumbersScreen: React.FC<Props> = props => {
  const {currentDigits} = useRootSelector(state => state.randomNumbers);
  const {updateRandomNumbers} = useActions();
  const [numbersLog, setNumbersLog] = useState<RandomNumbersSnapshot[]>([]);

  useEffect(() => {
    const updateLog = [...numbersLog, currentDigits];
    setNumbersLog(updateLog);
  }, [currentDigits]);

  const showLog = () => {
    let formattedLog: string = '';
    numbersLog.map((snapshot, index) => {
      const newLine = `${snapshot.randomDigitOne} ${snapshot.randomDigitTwo} ${snapshot.randomDigitThree}`;
      formattedLog =
        index === 0 ? newLine : (formattedLog = formattedLog + '\n' + newLine);
    });
    Alert.alert('Log:', formattedLog);
  };

  return (
    <SafeAreaView style={styles.container}>
      <NumbersRow snapshot={currentDigits} />
      <Button title={'Generate'} onPress={updateRandomNumbers} />
      <Spacer />
      <Button title={'Show Log'} onPress={showLog} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RandomNumbersScreen;
