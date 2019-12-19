import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

import Colors from '../constants/colors';
import Header from '../components/Header';

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <Header />
      <View>
        <Text style={styles.text}>Will you do a little bit of work?</Text>
        <View style={styles.buttonContainer}>
          <Button title="i guess" style={styles.button} onPress={() => {
            props.navigation.navigate({routeName: 'EmojiInput' }); 
          }} /> 
        </View>
      </View>
    </View>
  )
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 30,
    backgroundColor: '#1c1c1c'
  },
  text: {
    color: Colors.accentOne,
    paddingVertical: 10,
    fontSize: 40,
    fontFamily: 'AmaticSC-Regular'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    fontFamily: 'AmaticSC-Regular'
  },
  button: {
    width: 100
  },
  


});
