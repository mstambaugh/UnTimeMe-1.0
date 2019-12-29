import React, { useState } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';


import Colors from '../constants/colors';

const Header = props => {
  return (
    <View style={styles.header}>
      <Image
          source={require('../assets/images/unTimeMeLogo.png')}
          style={styles.headerLogoStyle}
        />
      <Text style={styles.headerTitle}>UnTimeMe</Text>
      <Image
        source={require('../assets/images/unTimeMeLogo.png')}
        style={styles.headerLogoStyle}
      />
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
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerLogoStyle: {
    padding: 20,
    margin: 5,
    height: 50,
    width: 50,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: Colors.accentOne
  },
  headerTitle: {
    color: Colors.accentOne,
    paddingVertical: 10,
    fontSize: 50,
    fontFamily: 'Mansalva-Regular', 
    paddingLeft: 15,
    paddingRight: 15 
  }

});

export default Header;
