import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderAddButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Add')}>
      <Icon name="plus" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default HeaderAddButton;
