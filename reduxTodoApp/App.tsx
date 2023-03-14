import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import HeaderAddButton from './Componets/HeaderAddButton';
import {Home, Add} from './Screen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator id="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerTitle: 'Todo List',
                headerRight: () => <HeaderAddButton />,
                headerStyle: {
                  backgroundColor: '#5a228b',
                },
                headerTitleStyle: {
                  color: '#fff',
                },
              }}
            />
            <Stack.Screen
              name="Add"
              component={Add}
              options={{
                headerTitle: 'Add Task',
                headerTitleStyle: {
                  color: '#FFFFFF',
                },
                headerStyle: {
                  backgroundColor: '#5a228b',
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};
export default App;
