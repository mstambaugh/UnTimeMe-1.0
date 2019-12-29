import React, { useState } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

import Colors from '../constants/colors';
import Header from '../components/Header';

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <View>
        <Text style={styles.text}>Want to do a little bit of work?</Text>
        <View style={styles.buttonContainer}>
            <Button title="FINE" style={styles.button} onPress={() => {
              props.navigation.navigate({
                routeName: 'EmojiInput' 
              }); 
            }} /> 
            <Button title="view" style={styles.button} onPress={() => {
              props.navigation.navigate({
                routeName: 'EmojiGraph'
              });
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
    fontFamily: 'AmaticSC-Regular', 
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    paddingHorizontal: 15,
    fontFamily: 'AmaticSC-Regular',
    justifyContent: 'space-around',
    marginTop: 20,
    maxWidth: '80%'
  }
  // button: {
  //   backgroundColor: Colors.primary,
  //   fontFamily: 'AmaticSC-Regular',

  // },
  


});
