import { View, Text, TouchableHighlight, TextInput } from "react-native";
import { styles } from "./styles";

export function TypeRegister({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tipo de Atendimento"
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
