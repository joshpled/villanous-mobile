import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import CharacterSelection from "./src/screens/CharacterSelection";
import Board from './src/screens/Board'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Character Selection" component={CharacterSelection} />
          <Stack.Screen name="Game" component={Board} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar hidden={true} />
    </>
  );
}
