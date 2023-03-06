import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {View, StyleSheet, Alert} from 'react-native';
import {
  Box,
  Button,
  Pressable,
  Snackbar,
  Text,
} from '@react-native-material/core';
const newArray = new Array(9).fill('empty');

const Content = React.memo(() => {
  const [cross, setCross] = useState(false);
  const [win, setWin] = useState(false);
  const [tie, setTie] = useState(false);

  const changeItem = index => {
    if (newArray[index] === 'empty') {
      if (cross) {
        newArray[index] = 'cross';
      } else {
        newArray[index] = 'circle-o';
      }
      setCross(!cross);
    } else {
      Alert.alert('Box Already Filled!');
      return;
    }
    checkWinner(newArray);
  };

  const checkWinner = newArray => {
    if (
      (newArray[0] === newArray[1] &&
        newArray[1] === newArray[2] &&
        newArray[0] !== 'empty') ||
      (newArray[3] === newArray[4] &&
        newArray[4] === newArray[5] &&
        newArray[3] !== 'empty') ||
      (newArray[6] === newArray[7] &&
        newArray[7] === newArray[8] &&
        newArray[6] !== 'empty') ||
      (newArray[0] === newArray[3] &&
        newArray[3] === newArray[6] &&
        newArray[0] !== 'empty') ||
      (newArray[1] === newArray[4] &&
        newArray[4] === newArray[7] &&
        newArray[1] !== 'empty') ||
      (newArray[2] === newArray[5] &&
        newArray[5] === newArray[8] &&
        newArray[2] !== 'empty') ||
      (newArray[0] === newArray[4] &&
        newArray[4] === newArray[8] &&
        newArray[0] !== 'empty') ||
      (newArray[2] === newArray[4] &&
        newArray[4] === newArray[6] &&
        newArray[2] !== 'empty')
    ) {
      setWin(true);
      return newArray.includes('circle-o') ? 'circle-o' : 'cross';
    }

    if (!newArray.includes('empty')) {
      setTie(true);
    }

    return null;
  };

  const boxIcon = element => {
    if (element === 'empty') {
      return 'pencil';
    } else if (element === 'cross') {
      return 'close';
    } else {
      return 'circle-o';
    }
  };

  const resetGame = () => {
    setCross(false);
    setWin(false);
    setTie(false);
    newArray.fill('empty');
  };

  return (
    <View>
      <View style={styles.boxContainer}>
        {newArray.map((element, index) => {
          return (
            <Pressable
              key={index}
              style={styles.box}
              onPress={() => {
                changeItem(index);
              }}
              elevation={6}>
              <Icon name={boxIcon(element)} size={30} color="#242B2E" />
            </Pressable>
          );
        })}
      </View>

      <Text
        style={[styles.turnLabel, {color: win || tie ? '#900' : 'inherit'}]}>
        {win ? (
          'You Win'
        ) : tie ? (
          'Game Tie'
        ) : (
          <>
            <Icon name={cross ? 'close' : 'circle-o'} size={30} color="#900" />
            &nbsp; Turn
          </>
        )}
      </Text>

      {win || tie ? (
        <Pressable style={styles.turnLabel} onPress={resetGame}>
          <Text style={{fontSize: 24, textAlign: 'center', fontWeight: 'bold'}}>
            Play Again
          </Text>
        </Pressable>
      ) : (
        ''
      )}
    </View>
  );
});

export default Content;

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8,
  },

  box: {
    backgroundColor: '#CAD5E2',
    width: '30%',
    height: 133,
    margin: '1%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  turnLabel: {
    padding: 50,
    margin: '3%',
    backgroundColor: '#E5D68A',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
