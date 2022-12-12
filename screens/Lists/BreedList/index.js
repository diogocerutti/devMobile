import React, { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const myKeyExtractor = (item) => {
  return item;
};

const renderItem = ({ item }) => {
  return (
    <View style={styles.box}>
      <View style={styles.boxContent}>
        <Text style={styles.title}>Nome da Raça</Text>
        <Text style={styles.description}>{item}</Text>
      </View>
    </View>
  );
};

export function BreedList() {
  const [breedList, setBreedList] = useState([]);

  const getBreedList = async () => {
    try {
      const data = await AsyncStorage.getItem("breeds");

      const output = JSON.parse(data);

      setBreedList(output);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function tempFunction() {
      await getBreedList();
    }

    tempFunction();

    return () => {};
  }, []);

  return (
    <FlatList
      data={breedList}
      renderItem={renderItem}
      keyExtractor={myKeyExtractor}
    />
  );
}
