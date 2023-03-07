import {useState} from 'react';
import {
  Button,
  Center,
  Container,
  Content,
  HStack,
  Input,
  ScrollView,
  VStack,
} from 'native-base';
import shortid from 'shortid';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AddScreen = ({navigation}) => {
  const [webSeries, setWebSeries] = useState('');
  const [season, setSeason] = useState('');
  console.log(season, webSeries);

  const AddDataInToStorage = async () => {
    const newData = {
      key: shortid.generate(),
      webSeries,
      season,
      isCompleted: false,
    };
    const storedValue = await AsyncStorage.getItem('@Season_list');
    const prevList = JSON.parse(storedValue);

    try {
      if (storedValue) {
        prevList.push(newData);
        await AsyncStorage.setItem('@Season_list', JSON.stringify(prevList));
      } else {
        await AsyncStorage.setItem('@Season_list', JSON.stringify([newData]));
      }

      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <VStack space={3} style={{margin: 12}}>
        <HStack justifyContent="center">
          <Input
            placeholder="Web Series Name"
            w="100%"
            value={webSeries}
            onChangeText={setWebSeries}
          />
        </HStack>
        <HStack justifyContent="center">
          <Input
            placeholder="Season"
            w="100%"
            value={season}
            onChangeText={setSeason}
          />
        </HStack>
        <HStack justifyContent="center">
          <Button w={'100%'} onPress={AddDataInToStorage}>
            Add Season
          </Button>
        </HStack>
      </VStack>
    </ScrollView>
  );
};
export default AddScreen;
