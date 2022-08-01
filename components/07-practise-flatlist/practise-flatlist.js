import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";

const PractiseFlatList = () => {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  const addCity = () => {
    setCities([...cities, city]);
    setCity("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Where are you?"
        value={city}
        onChangeText={(text) => setCity(text)}
        style={styles.inputCity}
      />
      <Button title="ADD" color="red" onPress={addCity} />

      <FlatList
        style={styles.list}
        data={cities}
        keyExtractor={(item, index) => index}
        renderItem={(itemObj) => (
          <Text style={styles.listItem}>{itemObj.item}</Text>
        )}
      />
    </View>
  );
};

export default PractiseFlatList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  inputCity: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    backgroundColor: "#ededed",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
