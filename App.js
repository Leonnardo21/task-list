import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

/* Component */
import Header from './components/Header';

export default function App() {

  const [tasks, setTasks] = useState([
    { text: "Comprar café", key: '1' },
    { text: "Criar um app", key: '2' },
    { text: "Jogar CS:GO", key: '3' }
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* To form */}
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <Text>{item.text}</Text>
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
