import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import EmojiButton from '../components/EmojiButton';
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
      <Header />
      <View style={styles.whiteSpace}></View>
      <View style={styles.firstRowButtonContainer}>
        <View>
          <EmojiButton title= "ok" onPress={() => { 
            props.navigation.navigate({routeName: 'TimerScreen' });
          }} />
          </View>
          <View>
            <EmojiButton />
          </View>
        </View>
      </View>
      );
     };
     
const styles = StyleSheet.create({
    screen: {
    flex: 1,
    padding: 30,
    backgroundColor: '#1c1c1c'
  },
  whiteSpace: {
    flex: .4
  },

  firstRowButtonContainer: {
    flex: .2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  },
  button: {

      },
    
      
    });
    
    export default EmojiInput;
