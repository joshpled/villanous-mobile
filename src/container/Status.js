import React from "react";
import { View, Text } from "react-native";

export default function Status() {
  return (
    <View
      style={{
        flex: 0.3,
        minWidth: "100%",
        flexDirection: "row",
      }}
    >
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>Power: 20</Text>
        <Text style={{ fontSize: 20 }}>Special:</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>Goal</Text>
      </View>
    </View>
  );
}
