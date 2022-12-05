import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import { styles } from "./styles";

/* const renderItem = ({ item }) => {
  return (
    <View style={styles.box}>
      <Text>{item.name}</Text>
      <View style={styles.boxContent}>
        <Text style={styles.title}>RAÇAS</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, elit consectetur
        </Text>
      </View>
    </View>
  );
};
*/

export function BreedList() {
  const [data, setData] = useState([]);

  async function getBreeds() {
    try {
      let response = await fetch("http://localhost:3000/breeds");
      let responseJson = await response.json();
      setData(responseJson);
      return responseJson;
    } catch (error) {
      alert(error);
    }
  }

  useEffect(() => {
    getBreeds();
  }, []);

  const renderItem = ({ item }) => {
    return <Text>{item.name}</Text>;
  };

  return (
    <View>
      {data && (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
}
