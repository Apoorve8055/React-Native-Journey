import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity>
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
    backgroundColor: 'rgb(32,0,126)',
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
