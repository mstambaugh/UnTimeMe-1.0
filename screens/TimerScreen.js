import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const TimerScreen = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>
      <Button title='End Session' onPress={() => {
        props.navigation.navigate({
          routeName: 'HomeScreen'
        });
      }} />
    </View>

  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 10,
    padding: 20,
    borderRadius: 10
  }
});



export default TimerScreen;