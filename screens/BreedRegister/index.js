import { View, Text, TouchableHighlight, TextInput, Image } from "react-native";
import { useState } from "react";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import card from "../../images/card.png";

export function BreedRegister({ navigation }) {
  const [name, setName] = useState("");

  const [storageList, setStorageList] = useState([]);

  const addBreedToList = async () => {
    try {
      storageList.push(name);

      const output = JSON.stringify(storageList);

      await AsyncStorage.setItem("breeds", output);
      setName("");

      alert("Raça Adicionada!");
      navigation.navigate("breeds", { output });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={card} style={styles.topImage} />
      <TextInput
        style={styles.input}
        onChangeText={(value) => setName(value)}
        value={name}
        placeholder="Nome da Raça"
        autoCapitalize="none"
      />
      <View style={styles.buttons}>
        <TouchableHighlight
          style={styles.submit}
          onPress={() => addBreedToList()}
        >
          <Text style={styles.buttonText}>CADASTRAR</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.cancel}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>CANCELAR</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}
