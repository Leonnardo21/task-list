import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './style';

export default function TaskItem({ item, handlePress }) {
  return (
    <TouchableOpacity onPress={() => handlePress(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}