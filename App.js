import * as React from "react";
import { Image, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./screens/Home";
import { AnimalRegister } from "./screens/AnimalRegister";
import { AttendanceRegister } from "./screens/AttendanceRegister";
import { BreedRegister } from "./screens/BreedRegister";
import { TypeRegister } from "./screens/TypeRegister";
import { Lists } from "./screens/Lists";
import { BreedList } from "./screens/Lists/BreedList";
import { AttendanceList } from "./screens/Lists/AttendanceList";
import { TypesList } from "./screens/Lists/TypesList";
import "react-native-gesture-handler";
import home from "./images/home.png";
import calendar from "./images/calendar.png";
import card from "./images/card.png";
import clipboard from "./images/clipboard.png";
import menu from "./images/menu.png";
import pet from "./images/pet.png";

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => <Image source={home} style={styles.icon} />,
          headerTitle: "ONG Amigos dos Animais",
          headerStyle: { backgroundColor: "rgb(28,199,66)" },
          headerTitleStyle: { color: "#FFF" },
          drawerLabelStyle: { color: "green" },
          headerTintColor: "#FFF",
        }}
      />
      <Drawer.Screen
        name="Cadastro de Animal"
        component={AnimalRegister}
        options={{
          drawerIcon: () => <Image source={pet} style={styles.icon} />,
          headerTitle: "Cadastro de Animal",
          headerStyle: { backgroundColor: "rgb(28,199,66)" },
          headerTitleStyle: { color: "#FFF" },
          drawerLabelStyle: { color: "green" },
          headerTintColor: "#FFF",
        }}
      />
      <Drawer.Screen
        name="Cadastro de Atendimento"
        component={AttendanceRegister}
        options={{
          drawerIcon: () => <Image source={calendar} style={styles.icon} />,
          headerTitle: "Cadastro de Atendimento",
          headerStyle: { backgroundColor: "rgb(28,199,66)" },
          headerTitleStyle: { color: "#FFF" },
          drawerLabelStyle: { color: "green" },
          headerTintColor: "#FFF",
        }}
      />
      <Drawer.Screen
        name="Cadastro de Raça"
        component={BreedRegister}
        options={{
          drawerIcon: () => <Image source={card} style={styles.icon} />,
          headerTitle: "Cadastro de Raça",
          headerStyle: { backgroundColor: "rgb(28,199,66)" },
          headerTitleStyle: { color: "#FFF" },
          drawerLabelStyle: { color: "green" },
          headerTintColor: "#FFF",
        }}
      />
      <Drawer.Screen
        name="Cadastro de Tipo de atendimento"
        component={TypeRegister}
        options={{
          drawerIcon: () => <Image source={clipboard} style={styles.icon} />,
          headerTitle: "Cadastro de Tipo de atendimento",
          headerStyle: { backgroundColor: "rgb(28,199,66)" },
          headerTitleStyle: { color: "#FFF" },
          drawerLabelStyle: { color: "green" },
          headerTintColor: "#FFF",
        }}
      />
      <Drawer.Screen
        name="Listas"
        component={Lists}
        options={{
          drawerIcon: () => <Image source={menu} style={styles.icon} />,
          headerTitle: "Listas",
          headerStyle: { backgroundColor: "rgb(28,199,66)" },
          headerTitleStyle: { color: "#FFF" },
          drawerLabelStyle: { color: "green" },
          headerTintColor: "#FFF",
        }}
      />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="breeds"
          options={{ headerTitle: "Raças" }}
          component={BreedList}
        />
        <Stack.Screen
          name="attendances"
          options={{ headerTitle: "Atendimentos" }}
          component={AttendanceList}
        />
        <Stack.Screen
          name="attendanceTypes"
          options={{ headerTitle: "Tipos de Atendimento" }}
          component={TypesList}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
