import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.length > 0) {
      setTasks([...tasks, { key: Math.random().toString(), value: task }]);
      setTask('');
    }
  };

  const removeTask = (taskKey) => {
    setTasks(tasks.filter(task => task.key !== taskKey));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Entrer une tâche"
          style={styles.input}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <Button title="Ajouter" onPress={addTask} />
      </View>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => removeTask(item.key)}>
            <View style={styles.listItem}>
              <Text>{item.value}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginBottom: 10,
    width: '100%',
  },
});
