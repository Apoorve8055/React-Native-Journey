import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Home from './Screen/Home';

const App = () => {
  return (
    <Provider store={store}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Home />
      </View>
    </Provider>
  );
};
export default App;
