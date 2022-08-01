import { Alert, Button, Linking, Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import globalStyles from "../../assets/styles/globalStyles";

const MyLinking = () => {
  const openLink = async (url) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    }
    else{
        Alert.alert("Warning", "It can not be opened");
    }
  };

  return (
    <View style={globalStyles.container}>
      <Button title="Click to visit" onPress={()=> openLink("https://google.com")}/>
      <Button title="Click to send message" color="red" onPress={()=> openLink("sms:+905554443322")}/>
      <Button title="Click to send email" onPress={()=> openLink("mailto:info@google.com")}/>
      <Button title="Click to call" color="red" onPress={()=> openLink("tel:123456789")}/>
    </View>
  );
};

export default MyLinking;

const styles = StyleSheet.create({});
