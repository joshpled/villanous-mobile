import React from "react";
import { View, Text } from "react-native";
import Card from "../components/Card";

export default function PlayerHand() {
  return (
    <View
      style={{
        flex: 1,
        minWidth: "100%",
        backgroundColor: "green",
        flexDirection: "row",
      }}
    >
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      {/* <View
        style={{
          flex: 1,
          backgroundColor: "purple",
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "gold",
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "chartreuse",
        }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "hotpink",
        }}
      /> */}
    </View>
  );
}
