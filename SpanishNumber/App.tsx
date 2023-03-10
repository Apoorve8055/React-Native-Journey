import React, {useCallback} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import hola from './assets/image/hola.png';

import one from './assets/music/one.wav';
import two from './assets/music/two.wav';
import three from './assets/music/three.wav';
import four from './assets/music/four.wav';
import five from './assets/music/five.wav';
import six from './assets/music/six.wav';
import seven from './assets/music/seven.wav';
import eight from './assets/music/eight.wav';
import nine from './assets/music/nine.wav';
import ten from './assets/music/ten.wav';
import Sound from 'react-native-sound';
import {styles} from './AppStyleSheet';

const musicArr = [one, two, three, four, five, six, seven, eight, nine, ten];
const sounds = musicArr.map(music => new Sound(music, Sound.MAIN_BUNDLE));

const App = () => {
  const playMusic = useCallback(index => {
    const sound = sounds[index];
    sound.play();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={hola} />
        </View>
        <ScrollView>
          <View style={styles.row}>
            {musicArr.map((_, index) => (
              <TouchableOpacity
                style={styles.box}
                key={index}
                onPress={() => playMusic(index)}>
                <Text style={styles.text}>{index + 1}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default App;
