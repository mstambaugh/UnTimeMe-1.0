import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
 
const EmojiInput = props => {
 
 const [enteredEmoji, setEnteredEmoji] = useState('');
 
 const emojiInputHandler = (enteredText) => {
   setEnteredEmoji(enteredText);
 };
 
 const addEmojiHandler = () => {
   props.onInputEmoji(enteredEmoji);
   setEnteredEmoji('');
 };
 
 return (
   <Modal visible={props.visible} animationType="slide">
     <View style={styles.inputContainer}>
       <TextInput
         placeholder="How are you?"
         style={styles.input}
         onChangeText={emojiInputHandler}
         value={enteredEmoji}
       />
       <View style={styles.buttonContainer}>
         <View style={styles.button}>
           <Button title="CANCEL" color="red" onPress={props.onCancel} />
         </View>
         <View style={styles.button}>
           <Button title="ADD" onPress={addEmojiHandler} />
         </View>
       </View>
     </View>
   </Modal>
 );
};
 
const styles = StyleSheet.create({
 inputContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 },
 input: {
   borderColor: 'black',
   borderWidth: 2,
   padding: 10,
   width: '80%',
   marginBottom: 10
 },
 buttonContainer: {
   flexDirection: 'row',
   justifyContent: 'space-around',
   width: '80%'
 },
 button: {
    width: '40%'
  }
});

export default EmojiInput;
