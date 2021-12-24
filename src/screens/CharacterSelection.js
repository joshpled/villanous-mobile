import React from "react";
import { View, ScrollView, ImageBackground } from "react-native";
import Card from "../components/Card";
import New from "../assets/New.png";

export default function CharacterSelection() {
  return (
    <ImageBackground
    source={New}
    resizeMode="stretch"
    style={{
      flex: 1,
      justifyContent: "center",
    }}
    >
        <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            alignContent: "flex-start",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "row",
            padding: 30,
          }}
        >
          <Card screen="character" />
          <Card screen="character" />
          <Card screen="character" />
          <Card screen="character" />
          <Card screen="character" />
          <Card screen="character" />
          <Card screen="character" />
          <Card screen="character" />
          <Card screen="character" />
          <Card screen="character" />
        </View>
    </ScrollView>
      </ImageBackground>
  );
}
