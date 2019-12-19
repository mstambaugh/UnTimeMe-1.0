import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const EmojiButton = props => {
  return (
    <View style={styles.button}>
      <TouchableOpacity activeOpacity={1}>
        <Image
          source={require('../assets/images/hole.png')}
          style={styles.ImageIconStyle}
          /> 
      </TouchableOpacity>
    </View> 
  );
};

const styles = StyleSheet.create({
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode: 'stretch',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10
  }
});

export default EmojiButton;