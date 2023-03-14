import {useState} from 'react';
import {Text, Box, TextArea} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {addTask} from '../redux/todoSlice';
import {Alert} from 'react-native';

const Add = ({navigation}) => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!task.trim()) {
      Alert.alert('Please Add Something!');
      return;
    }
    dispatch(addTask(task));
    navigation.navigate('Home');
  };

  return (
    <Box alignItems="center" w="100%" h="100%" justifyContent="center">
      <TextArea
        h={'80%'}
        placeholder="Add Task Details"
        w="75%"
        maxW="300"
        value={task}
        onChangeText={setTask}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#5a228b',
          padding: 10,
          margin: 10,
          width: '75%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleSubmit}>
        <Text style={{color: '#fff'}}>Add Task</Text>
      </TouchableOpacity>
    </Box>
  );
};

export default Add;
