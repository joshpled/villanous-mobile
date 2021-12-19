import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";

export default function Card({ power, cost, description, type, image }) {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.power}>
        <Text style={styles.numberFont}>2</Text>
      </View>
      <View style={styles.cost}>
        <Text style={styles.numberFont}>3</Text>
      </View>
      <Image style={styles.mainImage} source={{ uri: "https://picsum.photos/200" }} />
      <View style={styles.description}>
        <Text style={styles.descriptionText}>Hello</Text>
      </View>
      <View style={styles.type}>
        <Text style={styles.descriptionText}>Type of Card</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    height: 600,
    width: 400,
    alignItems: "stretch",
    backgroundColor: "whitesmoke",
    borderColor: "black",
    borderWidth: 2,
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
  },
  mainImage: {
    margin: 10,
    height: 300,
  },
  description: {
    margin: 10,
    height: 250,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
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
    padding: 15,
    borderRadius: 30,
  },
  power: {
    backgroundColor: "gray",
    position: "absolute",
    bottom: 10,
    left: 10,
    zIndex: 100,
    padding: 15,
    borderRadius: 30,
  },
  numberFont: {
    fontWeight: "800",
    fontSize: 20,
  },
  type: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
});
