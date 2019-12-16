import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmojiHistory = props => {

  return (
    <View style={styles.listItem} on >
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    marginVertical: 4,
    backgroundColor: 'gold',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default EmojiHistory;

