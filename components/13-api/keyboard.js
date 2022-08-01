import { Keyboard, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const MyKeyboard = () => {
    const submitForm = () => { 
        // Backend e bağlandı
        // Flat list dolduruldu

        Keyboard.dismiss();

     }


  return (
    <View style={styles.container}>
      <TextInput placeholder="Type something" onSubmitEditing={submitForm}/>
    </View>
  )
}

export default MyKeyboard

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    }
})