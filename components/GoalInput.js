import React, { useState } from 'react'
import {
  View, 
  TextInput, 
  Button,
  StyleSheet
} from 'react-native'

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInutHandler = (enteredText) => {
    setEnteredGoal(enteredText)
    console.log(enteredText)
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course goal"
        style={styles.input}
        onChangeText={goalInutHandler}
        value={enteredGoal}
      />
      <Button title="Add" onPress={props.onAddGoal.bind(this, enteredGoal)} />
    </View>
  );
};


const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%', borderColor: 'black', borderWidth: 1
  }
});


export default GoalInput
