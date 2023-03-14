import {Box, Text, HStack, VStack, Checkbox} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {removeTask, CompleteTask} from '../redux/todoSlice';

const TodoListCard = ({task, id, isComplete}) => {
  const dispatch = useDispatch();

  return (
    <Box
      style={{
        margin: 5,
        backgroundColor: '#ede7e1',
        padding: 10,
        borderRadius: 5,
        borderColor: '#825e5c',
        borderWidth: 1,
      }}>
      <HStack
        style={{
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <VStack>
          <TouchableOpacity onPress={() => dispatch(removeTask(id))}>
            <Icon name="delete" size={30} color="#900" />
          </TouchableOpacity>
        </VStack>
        <VStack w={300} paddingLeft={5}>
          <Text>{task}</Text>
        </VStack>
        <VStack>
          <Checkbox
            isChecked={isComplete}
            colorScheme="green"
            onPress={() => dispatch(CompleteTask(id))}
          />
        </VStack>
      </HStack>
    </Box>
  );
};

export default TodoListCard;
