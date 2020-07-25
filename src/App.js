import React, { useState } from 'react';
import { Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

/* Component */
import Header from '../src/components/Header';
import TaskItem from '../src/components/TaskItem';
import AddTask from '../src/components/AddTask';
import styles from './style';

export default function App() {

  const [tasks, setTasks] = useState([]);

  const handlePress = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter(task => task.key != key);
    })
  }

  const handleSubmit = (text) => {
    if (text.length > 3) {
      setTasks((prevTasks) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTasks
        ]
      });
    } else {
      Alert.alert('OOPS!', 'As tarefas devem ter mais de 3 caracteres', [
        { text: 'Entendido', onPress: () => console.log('Alert closed') }
      ]);
    }
  }

  return (
    //<Sandbox />
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('Dismissed keyboard');
    }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTask handleSubmit={handleSubmit} />
          <View style={styles.list}>
            <FlatList
              data={tasks}
              renderItem={({ item }) => (
                <TaskItem item={item} handlePress={handlePress} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
