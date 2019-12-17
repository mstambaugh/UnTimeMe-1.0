import React, { useState } from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';

import EmojiInput from './components/EmojiInput';
// import EmojiHistory from './components/EmojiHistory';
import EmojiGraph from './components/EmojiGraph';



export default function App() {
  const [emojiInputs, setEmojiInputs] = useState([]);
  const [isInputEmojiMode, setIsInputEmojiMode] = useState(false);

  const addEmojiHandler = emojiChoice => {
    setEmojiInputs(currentEmojis => [
      ...currentEmojis,
      { id: Math.random().toString(), value: emojiChoice }
    ]);
    setIsInputEmojiMode(false);
  };

  const cancelEmojiInputHandler = () => {
    setIsInputEmojiMode(false);
  };


  return (
    <View style={styles.screen}>
      <Button title="Start working" onPress={() => setIsInputEmojiMode(true)} />
      <EmojiInput
        visible={isInputEmojiMode}
        onInputEmoji={addEmojiHandler}
        onCancel={cancelEmojiInputHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={emojiInputs}
        renderItem={itemData => <EmojiHistory id={itemData.item.id} title={itemData.item.value} />}
      />
      <View>
        <EmojiGraph />
      </View>
    </View>
  );
}
// now using stylesheet object styling
const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

