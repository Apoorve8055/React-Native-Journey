import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import HomeScreen from './Screen/HomeScreen';
import AddScreen from './Screen/AddScreen';
import EditScreen from './Screen/EditScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Netflix Store',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#FFFFFF',
              },
              headerStyle: {
                backgroundColor: '#6750A4',
              },
            }}
          />
          <Stack.Screen
            name="Add"
            component={AddScreen}
            options={{
              title: 'Add Season',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#FFFFFF',
              },
              headerStyle: {
                backgroundColor: '#6750A4',
              },
            }}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
            options={{
              title: 'Edit Season',
              headerTitleAlign: 'center',
              headerTitleStyle: {
                color: '#FFFFFF',
              },
              headerStyle: {
                backgroundColor: '#6750A4',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
