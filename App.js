import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  const addGoalHandler = goalTitle => {
    setCourseGoals(courseGoals => [...courseGoals,
    { id: Math.random().toString(), value: goalTitle }]);
    console.log(courseGoals)
  }

  return (
    <View style={styles.screen}>
      
      <GoalInput onAddGoal={addGoalHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} /> }
      />
    </View >
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
