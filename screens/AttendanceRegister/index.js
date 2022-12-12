import { View, Text, TouchableHighlight, TextInput, Image } from "react-native";
import { styles } from "./styles";
import calendar from "../../images/calendar.png";

export function AttendanceRegister({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={calendar} style={styles.topImage} />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Animal"
        secureTextEntry={true}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo de atendimento"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Custo"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Data"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Horário"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Detalhes"
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
