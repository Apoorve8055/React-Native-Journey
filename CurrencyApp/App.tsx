import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './AppStyleSheet';

const CURRENCY_PER_INDIAN_RUPEE = [
  {name: 'US Dollar', rate: 0.012, icon: '$'},
  {name: 'Euro', rate: 0.011, icon: '€'},
  {name: 'Japanese Yen', rate: 1.65, icon: '¥'},
  {name: 'Russian Ruble', rate: 0.91, icon: '₽'},
  {name: 'British Pound', rate: 0.01, icon: '£'},
];

const App = () => {
  const [inputText, setInputText] = useState(null);
  const [currencyValue, setCurrencyValue] = useState('0');

  const convertCurrency = (rate, icon) =>
    setCurrencyValue(`${inputText * rate} ${icon}`);

  const resetCurrency = () => {
    setCurrencyValue('0');
    setInputText(null);
  };
  return (
    <>
      <LinearGradient
        colors={['#31373c', 'black']}
        style={styles.linearGradient}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Currency App</Text>
        </View>
        <View style={styles.output}>
          <Text style={styles.outputText}>{currencyValue}</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputText}
            onChangeText={setInputText}
            value={inputText}
            placeholder="0"
            placeholderTextColor="#8d9194"
            keyboardType="numeric"
          />
          <Text style={styles.inputText}>₹</Text>
        </View>
        <View style={styles.buttonArea}>
          {CURRENCY_PER_INDIAN_RUPEE.map(({name, rate, icon}, i) => {
            return (
              <TouchableOpacity
                key={i}
                style={styles.box}
                onPress={() => convertCurrency(rate, icon)}>
                <Text style={styles.text}>{name}</Text>
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity style={styles.box} onPress={resetCurrency}>
            <Text style={styles.text}>rest</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};

export default App;
