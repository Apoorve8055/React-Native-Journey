import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './AppStyleSheet';

import Dice1 from './assets/images/png/Dice_1.png';
import Dice2 from './assets/images/png/Dice_2.png';
import Dice3 from './assets/images/png/Dice_3.png';
import Dice4 from './assets/images/png/Dice_4.png';
import Dice5 from './assets/images/png/Dice_5.png';
import Dice6 from './assets/images/png/Dice_6.png';

const App = () => {
  const [dice, setDice] = useState(Dice1);

  const rollTheDice = () => {
    const diceURIs = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
    const roll = Math.floor(Math.random() * 6 + 1);
    let uri = diceURIs[roll - 1];
    setDice(uri);
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={rollTheDice}>
          <Image source={dice} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default App;
