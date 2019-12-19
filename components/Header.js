import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';


import Colors from '../constants/colors';


const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>UnTimeMe</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: Colors.primary,
    borderBottomColor: Colors.accentOne,
    borderBottomWidth: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },

  headerTitle: {
    color: Colors.accentOne,
    paddingVertical: 10,
    fontSize: 60,
    fontFamily: 'Mansalva-Regular', 
  }

});

export default Header;
