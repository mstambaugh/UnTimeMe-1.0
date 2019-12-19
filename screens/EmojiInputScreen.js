import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';

import EmojiButton1 from '../components/EmojiButton1';
import EmojiButton2 from '../components/EmojiButton2';
import EmojiButton3 from '../components/EmojiButton3';
import EmojiButton4 from '../components/EmojiButton4';
import EmojiButton5 from '../components/EmojiButton5';
import EmojiButton6 from '../components/EmojiButton6';
import EmojiButton7 from '../components/EmojiButton7';
import EmojiButton8 from '../components/EmojiButton8';
import EmojiButton9 from '../components/EmojiButton9';
import EmojiButton10 from '../components/EmojiButton10';
import EmojiButton11 from '../components/EmojiButton11';
import EmojiButton12 from '../components/EmojiButton12';
import EmojiButton13 from '../components/EmojiButton13';
import EmojiButton14 from '../components/EmojiButton14';
import Header from '../components/Header';
const EmojiInput = props => {

  const [enteredEmoji, setEnteredEmoji] = useState('');

  const emojiInputHandler = () => {
    setEnteredEmoji();
  };

  const addEmojiHandler = () => {
    props.onInputEmoji(enteredEmoji);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.whiteSpace}></View>

      <View style={styles.firstRowButtonContainer}>
        <View>
          <EmojiButton1 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
        <View>
          <EmojiButton2 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
        <View>
          <EmojiButton3 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
        <View>
          <EmojiButton4 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
        <View>
          <EmojiButton5 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
        <View>
          <EmojiButton6 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
        <View>
          <EmojiButton7 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
      </View>
      <View style={styles.secondRowButtonContainer}>
        <View>
          <EmojiButton8 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
        <View>
          <EmojiButton9 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
        <View>
          <EmojiButton10 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
        <View>
          <EmojiButton11 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
        <View>
          <EmojiButton12 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
        <View>
          <EmojiButton13 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
        <View>
          <EmojiButton14 title="ok" onPress={() => {
            props.navigation.navigate({ routeName: 'TimerScreen' });
          }} />
        </View>
      </View>

      <View style={styles.button}>
        <Button title="start timer" onPress={() => {
          props.navigation.navigate({
            routeName: 'TimerScreen'
          });
        }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: '100%',
    padding: 30,
    backgroundColor: '#1c1c1c'
  },
  whiteSpace: {
    flex: .4
  },
  // fakeKeyboard: {
  //   backgroundColor: '#E0E0E0',
  //   borderColor: '#E0E0E0',
  //   padding: 5, 
  //   borderRadius: 10 
  // },
  firstRowButtonContainer: {
    flex: .3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderColor: '#E0E0E0',
    padding: 5,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 10,
  },
  secondRowButtonContainer: {
    flex: .3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#E0E0E0',
    borderColor: '#E0E0E0',
    padding: 5,
  },

  button: {
    flex: .1,
    width: '20%',
    alignSelf: 'center',
    flexDirection: 'row',
    fontFamily: ''

  },


});

export default EmojiInput;
