import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  const [randomColor, setRandomColor] = useState('fff');
  const changeBackgroundColor = () => {
    setRandomColor(Math.floor(Math.random() * 16777215).toString(16));
  };

  return (
    <>
      <View style={[styles.container, {backgroundColor: '#' + randomColor}]}>
        <TouchableOpacity onPress={changeBackgroundColor}>
          <Text style={styles.text}>Click me</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: '#BB2CD9',
    color: '#fff',
    fontSize: 24,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 15,
    textTransform: 'uppercase',
  },
});
