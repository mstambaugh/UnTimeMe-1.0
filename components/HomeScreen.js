// import React, { useState } from 'react';
// import { View, Button, StyleSheet } from 'react-native';

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, Button, Keyboard, Alert } from 'react-native';

// import Card from '../components/Card';
// import Colors from '../constants/colors';
// import Input from '../components/Input';
// import NumberContainer from '../components/NumberContainer';

// const HomeScreen = props => {
//   const [enteredValue, setEnteredValue] = useState('');
//   const [confirmed, setConfirmed] = useState(false);
//   const [selectedNumber, setSelectedNumber] = useState();

//   const numberInputHandler = inputText => {
//     setEnteredValue(inputText.replace(/[^0-9]/g, ''));
//   };

//   const resetInputHandler = () => {
//     setEnteredValue('');
//     setConfirmed(false);
//   };

  
//   // we can safely do the above two things in this order (w/out replacing enteredValue with an empty string before we have the chance to set and parseInt it b/c of the way react batches the method) 
//   // here we'll check if confirmed and then set some special output content 
//   let confirmedOutput;
//   if (confirmed) {
//     confirmedOutput = (
//       <Card style={styles.summaryContainer}>
//         <Text>You Selected</Text>
//         <NumberContainer>{selectedNumber}</NumberContainer>
//         <Button title="START GAME!" color={Colors.primary} onPress={() => props.onStartGame(selectedNumber)} />
//       </Card>
//     );
//   }
//   return (
   
//       <View style={styles.screen}>
//         <Text style={styles.title}>Start A New Game!</Text>
//         <Card style={styles.inputContainer}>
//           <Text>Select a Number</Text>
//           <Input
//             style={styles.input}
//             blurOnSubmit
//             autoCapitalize="none"
//             autoCorrect={false}
//             keyboardType="number-pad"
//             maxLength={2}
//             onChangeText={numberInputHandler}
//             value={enteredValue}
//           />
//           <View style={styles.buttonContainer}>
//             <View style={styles.button}>
//               <Button title="Reset" onPress={resetInputHandler} color={Colors.accentTwo} />
//             </View>
//             <View style={styles.button}>
//               <Button title="Confirm"
//                 onPress={confirmInputHandler}
//                 color={Colors.accentOne} />
//             </View>
//           </View>
//         </Card>
//         {confirmedOutput}
//       </View>
   
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     padding: 10,
//     alignItems: 'center'
//   },

//   title: {
//     fontSize: 20,
//     marginVertical: 10
//   },

//   inputContainer: {
//     width: 300,
//     maxWidth: '80%',
//     alignItems: 'center',
//   },

//   buttonContainer: {
//     flexDirection: 'row',
//     width: '100%',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15
//   },
//   button: {
//     width: 100
//   },
//   input: {
//     width: 50,
//     textAlign: 'center'
//   },
//   summaryContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   }

// });

// export default HomeScreen;