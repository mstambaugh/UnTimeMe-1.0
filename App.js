import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import UnTimeMeNavigator from './navigation/UnTimeMeNavigator';

import Header from './components/Header';
import Colors from './constants/colors';
const fetchFonts = () => {
  return Font.loadAsync({
    'AmaticSC-Bold': require('./assets/fonts/AmaticSC-Bold.ttf'),
    'AmaticSC-Regular': require('./assets/fonts/AmaticSC-Regular.ttf'),
    'Mansalva-Regular': require('./assets/fonts/Mansalva-Regular.ttf'),
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
    <View style={styles.screen} >
      <Header />
      <UnTimeMeNavigator style={styles.visibleContent}/>
    </View>
  );
}


const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    backgroundColor: '#1c1c1c'
  },
  visibleContent: {
    backgroundColor: '#1c1c1c',
    flex: .5
  }
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

