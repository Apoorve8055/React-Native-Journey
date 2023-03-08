import React, {useState, useEffect} from 'react';
import {
  Button,
  Container,
  NativeBaseProvider,
  ScrollView,
  Text,
  View,
} from 'native-base';
import {User} from './Components/User';
import {StyleSheet, TouchableOpacity} from 'react-native';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState(null);
  const getUserData = async () => {
    const data = await axios.get('https://randomuser.me/api/');
    setUser(data.data.results[0]);
    console.log(user.email);
  };
  useEffect(() => {
    getUserData();
  }, []);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {user === null ? (
          ''
        ) : (
          <>
            <User
              imgURL={user.picture.large}
              name={user.name}
              location={user.location}
              email={user.email}
            />

            <TouchableOpacity style={styles.btn} onPress={getUserData}>
              <Text style={{color: '#fff', fontWeight: 'bold'}}>Next User</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </NativeBaseProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212023',
  },
  btn: {
    marginTop: 50,
    backgroundColor: '#c53701',
    padding: 10,
    borderRadius: 8,
  },
});
