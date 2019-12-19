import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import { EmojiStaticData } from '../data/emojistaticdata';
import Colors from '../constants/colors';


const EmojiButton5 = props => {
  return (
    <View style={styles.button}>
      <TouchableOpacity activeOpacity={1}>
        <Image
          source={require('../assets/images/hearteyes.png')}
          style={styles.ImageIconStyle}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 40,
    width: 40,
    resizeMode: 'stretch',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10
  }
});

export default EmojiButton5;