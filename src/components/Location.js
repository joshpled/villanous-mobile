import React from "react";
import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";

export default function Location({ power, cost, description, type, image }) {
  return (
      <View style={styles.background}>
        
        <Image style={styles.mainImage} source={{ uri: "https://picsum.photos/200" }} />

      </View>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "stretch",
    flex: 1,
    backgroundColor: "whitesmoke",
    
    shadowColor: "black",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
  },
  mainImage: {
    margin: 5,
    flex: 2,
  },
  description: {
    margin: 10,
    flex: 1,
    borderColor: "black",
    borderWidth: 2,
    justifyContent: "center",
  },
  descriptionText: {
    textAlign: "center",
  },
  numberFont: {
    fontWeight: "800",
    fontSize: 40,
  },
  type: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
});
