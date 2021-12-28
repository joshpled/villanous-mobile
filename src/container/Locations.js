import React from "react";
import { View, Text } from "react-native";
import Location from "../components/Location";

export default function Locations() {
  return (
    <View
      style={{
        flex: 1.4,
        minWidth: "100%",
        backgroundColor: "green",
        flexDirection: "row",
      }}
    >
      <Location/>
      <Location/>
      <Location/>
      <Location/>
  
    </View>
  );
}
