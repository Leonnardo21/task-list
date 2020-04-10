import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Minhas Tarefas</Text>
    </View>
  );
}
