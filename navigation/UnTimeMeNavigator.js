import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/HomeScreen';
import EmojiGraphScreen from '../screens/EmojiGraphScreen';
import EmojiInputScreen from '../screens/EmojiInputScreen';
import TimerScreen from '../screens/TimerScreen';

const UnTimeMeNavigator = createStackNavigator({
  HomeScreen: HomeScreen,
  EmojiGraph: EmojiGraphScreen,
  EmojiInput: EmojiInputScreen,
  TimerScreen: TimerScreen
});

export default createAppContainer(UnTimeMeNavigator);