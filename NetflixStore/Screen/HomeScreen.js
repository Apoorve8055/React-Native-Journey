import {ScrollView} from 'react-native';
import {Fab, HStack, IconButton, VStack, Text, Checkbox} from 'native-base';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';

const HomeScreen = ({navigation, route}) => {
  const [list, setList] = useState([]);
  const isFocused = useIsFocused();
  const getSeasonList = async () => {
    try {
      const getList = await AsyncStorage.getItem('@Season_list');
      if (!getList) {
        setList([]);
      }
      const seasonList = JSON.parse(getList);
      setList(seasonList);
    } catch (r) {
      console.log(r);
    }
  };

  const deleteSeason = async key => {
    const newList = await list.filter(data => data.key != key);
    await AsyncStorage.setItem('@Season_list', JSON.stringify(newList));
    setList(newList);
  };

  const completeSeason = async id => {
    const newArr = list.map(item => {
      if (item.key === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    await AsyncStorage.setItem('@season_list', JSON.stringify(newArr));
    setList(newArr);
  };

  useEffect(() => {
    getSeasonList();
  }, [isFocused]);

  return (
    <ScrollView>
      {list === null ? (
        <Text>Emtpy</Text>
      ) : (
        list.map((element, index) => (
          <VStack key={element.key}>
            <HStack
              style={{
                alignItems: 'center',
                borderBottomColor: 'black',
                borderWidth: 1,
                justifyContent: 'space-around',
              }}
              p={1}>
              <IconButton
                style={{
                  backgroundColor: '#ce4f4b',
                  borderRadius: 0,
                  width: 50,
                }}
                icon={<Icon name="delete" size={30} color="#fff" />}
                onPress={() => deleteSeason(element.key)}
              />
              <IconButton
                style={{
                  backgroundColor: '#56b6d3',
                  borderRadius: 0,
                  width: 50,
                }}
                icon={
                  <Icon
                    name="edit"
                    size={30}
                    color="#fff"
                    onPress={() =>
                      navigation.navigate('Edit', {key: element.key})
                    }
                  />
                }
              />
              <HStack
                style={{
                  width: 200,
                }}>
                <VStack p={4}>
                  <Text fontWeight={'bold'}>{element.webSeries}</Text>
                  <Text>{element.season}</Text>
                </VStack>
              </HStack>
              <Checkbox
                p={2}
                m={4}
                isChecked={element.isCompleted}
                onPress={() => completeSeason(element.key)}
              />
            </HStack>
          </VStack>
        ))
      )}

      <Fab
        icon={<Icon name="plus" size={24} color="#fff" />}
        bgColor={'#6750A4'}
        onPress={() => navigation.navigate('Add')}
      />
    </ScrollView>
  );
};
export default HomeScreen;
