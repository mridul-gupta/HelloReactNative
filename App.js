import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, View } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Starting text');
  return (
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextInput placeholder="Course goal" style={{ width: '80%', borderColor: 'black', borderWidth: 1 }} />
        <Button title="Add" />

      </View>
      <View>

      </View>

    <View style={{padding: 50}}>
      <View 
        style={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>1</Text>
      </View>
      <View 
        style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>2</Text>
      </View>
      <View 
        style={{
          backgroundColor: 'green',
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Text>3</Text>
      </View>
    </View>

    </View>
  );
}
