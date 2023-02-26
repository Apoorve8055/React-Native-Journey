import React, {useState} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './AppStyleSheet';

const App = () => {
  const [randomColor, setRandomColor] = useState('#fff');

  const changeBackgroundColor = () => {
    setRandomColor('#' + Math.floor(Math.random() * 16777215).toString(16));
  };
  const restBackgroundColor = () => {
    setRandomColor('#fff');
  };

  return (
    <>
      <StatusBar backgroundColor={randomColor} />
      <View style={[styles.container, {backgroundColor: randomColor}]}>
        <TouchableOpacity onPress={changeBackgroundColor}>
          <Text style={styles.text}>Click me</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={restBackgroundColor}>
          <Text style={styles.text}>rest</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;
