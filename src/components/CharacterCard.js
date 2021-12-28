import React from "react";
import { StyleSheet, Image, Pressable } from "react-native";

export default function CharacterCard({ portrait, onPress, backgroundColor }) {
  const random = () => Math.random();
  return (
    <Pressable onPress={onPress} style={[styles.item, backgroundColor]}>
      <Image style={styles.mainImage} source={portrait.portrait} cacheKey={random()} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  characterBackground: {
    alignItems: "stretch",
  },
  item: {
    padding: 10,
    marginVertical: 3,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  mainImage: {
    borderRadius: 10,
    height: 400,
    width: 300,
  },
});
