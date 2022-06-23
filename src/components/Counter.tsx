import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useAppSelector} from '../app/hooks';

export default function Counter() {
  const counter = useAppSelector(state => state.counter.value);

  return (
    <View style={styles.container}>
      <Text style={styles.topic}>Counter</Text>
      <Text style={styles.counter}>{counter}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  topic: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  counter: {
    fontSize: 62,
    color: 'green',
    fontWeight: 'bold',
  },
});
