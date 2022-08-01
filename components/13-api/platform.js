import { StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import globalStyles from "../../assets/styles/globalStyles";



const MyPlatform = () => {
  return (
    <View style={[ globalStyles.container]}>
      <Text>Os: {Platform.OS}</Text>
      <Text>Version: {Platform.Version}</Text>
      <Text>Brand: {Platform.constants.Brand}</Text>
      <Text>Serial: {Platform.constants.Serial}</Text>
    </View>
  )
}

export default MyPlatform

const styles = StyleSheet.create({})