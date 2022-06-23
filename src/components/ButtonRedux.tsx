/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {useAppDispatch} from '../app/hooks';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../features/counter/counterSlice';

export default function ButtonRedux() {
  const dispatch = useAppDispatch();

  return (
    <>
      <TouchableOpacity
        style={[styles.btnContainer, {backgroundColor: '#14C38E'}]}
        onPress={() => dispatch(increment())}>
        <Text style={styles.btnText}>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btnContainer, {backgroundColor: '#D61C4E'}]}
        onPress={() => dispatch(decrement())}>
        <Text style={styles.btnText}>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.btnContainer, {backgroundColor: '#646FD4'}]}
        onPress={() => dispatch(incrementByAmount(7))}>
        <Text style={styles.btnText}>Add 7</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  btnText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
