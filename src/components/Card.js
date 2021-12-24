import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";

export default function Card({ power, cost, description, type, image, screen }) {
  return (
    <View style={screen === "character" ? styles.characterBackground : styles.background}>
      {screen === "character" || (
        <>
          <View style={styles.power}>
            <Text style={styles.numberFont}>2</Text>
          </View>
          <View style={styles.cost}>
            <Text style={styles.numberFont}>3</Text>
          </View>
        </>
      )}
      <Image style={styles.mainImage} source={{ uri: "https://picsum.photos/200" }} />
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Hello</Text>
      </View>
      {screen === "character" || (
        <View style={styles.type}>
          <Text style={styles.descriptionText}>Type of Card</Text>
        </View>
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  characterBackground: {
    minWidth: 250,
    maxWidth: 250,
    minHeight: 350,
    alignItems: "stretch",
    backgroundColor: "whitesmoke",
    borderColor: "black",
    borderWidth: 2,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
  },
  background: {
    alignItems: "stretch",
    flex: 1,
    backgroundColor: "whitesmoke",
    borderColor: "black",
    borderWidth: 2,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
  },
  mainImage: {
    margin: 10,
    flex: 2,
    borderTopLeftRadius: 20,
  },
  description: {
    margin: 10,
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
    borderBottomLeftRadius: 20,
  },
  descriptionText: {
    textAlign: "center",
  },
  cost: {
    backgroundColor: "white",
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 100,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    justifyContent: "center",
  },
  power: {
    backgroundColor: "gray",
    position: "absolute",
    bottom: 10,
    left: 10,
    zIndex: 100,
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",

    justifyContent: "center",
  },
  numberFont: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  type: {
    position: "absolute",
    bottom: 10,
    left: 0,
    textAlign: "center",
    right: 0,
  },
});
