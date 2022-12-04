import * as React from "react";
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

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function Root() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
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
