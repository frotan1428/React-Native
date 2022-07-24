import { StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React from 'react'
import globalStyes from "../../assets/styles/globalStyles"
const Touchables = () => {

  const Touchable =()=>{
    const sentMessage=()=>{

    }
  }
  return (
    <View style={globalStyes.container}>
      <TouchableHighlight onPress={Touchable}  underlayColor="green" style={styles.btn}>
          <Text>TouchablesHighlight</Text>
      </TouchableHighlight>


      <TouchableOpacity onPress={Touchable}  activeOpacity={0.6} style={styles.btn}>
          <Text>TouchablesWithOpicity</Text>
      </TouchableOpacity>


      <TouchableNativeFeedback onPress={Touchable} >
          <Text>TouchableWithouFeedBack</Text>
      </TouchableNativeFeedback>

    </View>
  )
}

export default Touchables

const styles = StyleSheet.create({
    btn:{
      padding:10,
      backgroundColor:"yellow",
      borderRadius:10,
      margin:4
    }
})