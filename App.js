import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import EmojiInput from './components/EmojiInput';
import Header from './components/Header';
import Colors from './constants/colors';
// import EmojiHistory from './components/EmojiHistory';
// import EmojiGraph from './components/EmojiGraph';
// import HomeScreen from './components/HomeScreen';
const fetchFonts = () => {
  return Font.loadAsync({
    'AmaticSC-Bold': require('./assets/fonts/AmaticSC-Bold.ttf'),
    'AmaticSC-Regular': require('./assets/fonts/AmaticSC-Regular.ttf')
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync = {fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Header />
      </View>
      <EmojiInput />
    </View>
  );
}
// now using stylesheet object styling
const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});




// const [inputEmojiMode, setIsInputEmojiMode] = useState(false);
// const [emojiInputs, setEmojiInputs] = useState([]);

// const isInputEmojiHandler = () => {
//   setIsInputEmojiMode(true);
// };

// const inputEmojiHandler = emojiChoice => {
//   setEmojiInputs(currentEmojis => [
//     ...currentEmojis,
//     { id: Math.random().toString(), value: emojiChoice }
//   ]);
//   setIsInputEmojiMode(false);

// let content= <HomeScreen onStartWorking={isInputEmojiHandler} />

