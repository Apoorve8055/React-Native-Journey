import {
  AspectRatio,
  Avatar,
  Box,
  HStack,
  Image,
  Text,
  View,
  VStack,
} from 'native-base';
import {ImageBackground, StyleSheet} from 'react-native';
export const User = ({imgURL, name, location, email}) => {
  return (
    <Box style={styles.box} elevation={6} rounded="sm">
      <VStack>
        <AspectRatio w="60%" ratio={1.8 / 1.8}>
          <ImageBackground
            resizeMode="cover"
            source={{
              uri: imgURL,
            }}
            alt="image">
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
              }}
            />
            <Text style={styles.text}>
              {name.title + ' ' + name.first + ' ' + name.last}
            </Text>
          </ImageBackground>
        </AspectRatio>

        <HStack>
          <Text style={styles.subtext}>{location.country}</Text>
        </HStack>
        <HStack>
          <Text style={styles.subtext}>{email}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  Firstbox: {},
  image: {
    flex: 1,
    justifyContent: 'center',
    width: 200,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f4f4f4b3',
    marginTop: 'auto',
    marginRight: 'auto',
    padding: 8,
  },
  subtext: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#596368',
    paddingLeft: 8,
  },
});
