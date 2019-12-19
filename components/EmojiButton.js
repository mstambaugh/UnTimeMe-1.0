import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

import Colors from '../constants/colors';

const EmojiButton = props => {
  return (
    <View>
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
    height: 40,
    width: 40,
    resizeMode: 'stretch',
  },

});

export default EmojiButton;