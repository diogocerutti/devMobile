import { View, TouchableHighlight, Text } from "react-native";
import { styles } from "./styles";

export function Lists({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.touchable}
        onPress={() => navigation.navigate("breeds")}
      >
        <Text style={styles.touchableText}>Lista de Raças</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.touchable}
        onPress={() => navigation.navigate("attendances")}
      >
        <Text style={styles.touchableText}>Lista de Atendimentos</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.touchable}
        onPress={() => navigation.navigate("attendanceTypes")}
      >
        <Text style={styles.touchableText}>Lista de Tipos de Atendimentos</Text>
      </TouchableHighlight>
    </View>
  );
}
