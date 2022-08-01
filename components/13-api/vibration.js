import { Button, StyleSheet, Text, Vibration, View } from "react-native";
import React from "react";
import globalStyles from "../../assets/styles/globalStyles";

const MyVibration = () => {
  const handleVibration = () => {
    Vibration.vibrate();
    Vibration.vibrate(2000); // only android for ios : 400ms
    Vibration.vibrate([1000, 2000, 500, 3000]); // 1sn wait, 2sn vibrate, 0.5sn wait, 3sn vibrate
    Vibration.vibrate([1000, 2000, 500, 3000], true); //continuesly until stop
  };

  const stopVibration = () => {
    Vibration.cancel();
  };

  return (
    <View style={globalStyles.container}>
      <Button title="Vibration" onPress={handleVibration} />
      <Button title="Stop" onPress={stopVibration} />
    </View>
  );
};

export default MyVibration;

const styles = StyleSheet.create({});
