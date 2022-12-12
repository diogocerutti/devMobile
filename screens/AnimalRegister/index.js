import { useState } from "react";
import { View, Text, TouchableHighlight, TextInput, Image } from "react-native";
import { styles } from "./styles";
import * as ImagePicker from "expo-image-picker";
import pet from "../../images/pet.png";

export function AnimalRegister({ navigation }) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={pet} style={styles.topImage} />
      <TextInput
        style={styles.input}
        placeholder="Apelido"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Raça"
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Gastos"
        autoCapitalize="none"
      />
      <TouchableHighlight style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imageText}>Escolher Imagem</Text>
      </TouchableHighlight>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        autoCapitalize="none"
      />
      <View style={styles.buttons}>
        <TouchableHighlight style={styles.submit}>
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
