import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './style';

export default function AddTask({ handleSubmit }) {
  const [text, setText] = useState('');

  const handleChange = (val) => {
    setText(val);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='Nova Tarefa'
        onChangeText={handleChange}
      />
      <Button
        style={styles.button}
        onPress={() => handleSubmit(text)}
        title='Adicionar Tarefa'
        color='#cf000f'
      />
    </View>
  );
};