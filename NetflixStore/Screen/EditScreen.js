import {useState, useEffect} from 'react';
import {Button, HStack, Input, ScrollView, VStack} from 'native-base';

import AsyncStorage from '@react-native-async-storage/async-storage';

const EditScreen = ({navigation, route}) => {
  const [webSeries, setWebSeries] = useState('');
  const [season, setSeason] = useState('');

  const getSeasonList = async key => {
    try {
      const getList = await AsyncStorage.getItem('@Season_list');
      const seasonData = await JSON.parse(getList).filter(
        list => list.key == key,
      );
      setWebSeries(seasonData[0].webSeries);
      setSeason(seasonData[0].season);
    } catch (r) {
      console.log(r);
    }
  };

  const updateDataInToStorage = async () => {
    try {
      const storedValue = await AsyncStorage.getItem('@Season_list');
      const prevList = await JSON.parse(storedValue);
      await prevList.map(list => {
        if (list.key === route.params.key) {
          list.webSeries = webSeries;
          list.season = season;
        }
        return list;
      });

      await AsyncStorage.setItem('@Season_list', JSON.stringify(prevList));
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSeasonList(route.params.key);
  }, []);

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
          <Button w={'100%'} onPress={updateDataInToStorage}>
            Update Season
          </Button>
        </HStack>
      </VStack>
    </ScrollView>
  );
};
export default EditScreen;
