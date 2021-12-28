import React, {useState} from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CircleButton({goToGame}) {
const [size, setSize] = useState(64)
const changeSize = () => setSize(72)
const changeBack = () => setSize(64)
   
  return (
    <Pressable style={styles.button} onPressIn={changeSize} onPressOut={changeBack} onPress={goToGame}>
      <Ionicons name="arrow-forward-circle-outline" size={size} color="white" />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    height: 72,
    width: 72,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    right: 20,
  },
});
