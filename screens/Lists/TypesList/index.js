import { useState, useEffect } from "react";
import { Text, View, Image, FlatList } from "react-native";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

function randomImage(
  items = [
    "https://cdn-icons-png.flaticon.com/512/862/862032.png",
    "https://cdn-icons-png.flaticon.com/512/2002/2002492.png",
    "https://cdn-icons-png.flaticon.com/512/857/857663.png",
    "https://cdn-icons-png.flaticon.com/512/541/541957.png",
  ]
) {
  return items[Math.floor(Math.random() * items.length)];
}

const myKeyExtractor = (item) => {
  return item;
};

const renderItem = ({ item }) => {
  return (
    <View style={styles.box}>
      <Image style={styles.image} source={{ uri: randomImage() }} />
      <View style={styles.boxContent}>
        <Text style={styles.title}>Tipo de Atendimento</Text>
        <Text style={styles.description}>{item}</Text>
      </View>
    </View>
  );
};

export function TypesList() {
  const [typesList, setTypesList] = useState([]);

  const getTypesList = async () => {
    try {
      const data = await AsyncStorage.getItem("types");

      const output = JSON.parse(data);

      setTypesList(output);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function tempFunction() {
      await getTypesList();
    }

    tempFunction();

    return () => {};
  }, []);

  return (
    <FlatList
      data={typesList}
      renderItem={renderItem}
      keyExtractor={myKeyExtractor}
    />
  );
}
