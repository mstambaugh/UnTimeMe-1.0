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
    paddingTop: 20,
    backgroundColor: Colors.primary,
    borderBottomColor: Colors.accentOne,
    borderBottomWidth: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'white',
    paddingVertical: 10,
    fontSize: 60,
    fontFamily: 'AmaticSC-Bold', 
  }

});

export default Header;
