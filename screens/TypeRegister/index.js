import { View, Text, TouchableHighlight, TextInput, Image } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import clipboard from "../../images/clipboard.png";

export function TypeRegister({ navigation }) {
  const [type, setType] = useState("");

  const [storageList, setStorageList] = useState([]);

  const addTypeToList = async () => {
    try {
      storageList.push(type);

      const output = JSON.stringify(storageList);

      await AsyncStorage.setItem("types", output);
      setType("");

      alert("Tipo Adicionado!");
      navigation.navigate("attendanceTypes", { output });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={clipboard} style={styles.topImage} />
      <TextInput
        style={styles.input}
        placeholder="Tipo de Atendimento"
        autoCapitalize="none"
        onChangeText={(value) => setType(value)}
        value={type}
      />
      <View style={styles.buttons}>
        <TouchableHighlight
          style={styles.submit}
          onPress={() => addTypeToList()}
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
