import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

/* Component */
import Header from './components/Header';
import TaskItem from './components/TaskItem';
import AddTask from './components/AddTask';

export default function App() {

  const [tasks, setTasks] = useState([
    { text: "Comprar café", key: '1' },
    { text: "Criar um app", key: '2' },
    { text: "Jogar CS:GO", key: '3' }
  ])

  const handlePress = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter(task => task.key != key);
    })
  }

  const handleSubmit = (text) => {
    setTasks((prevTasks) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTasks
      ]
    });
  }

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});
