import React from "react";
import { View, Text, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Status({goBack}) {
  return (
    <View
      style={{
        flex: 0.3,
        minWidth: "100%",
        flexDirection: "row",
      }}
    >
      <Pressable onPress={goBack}>
          <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
        </Pressable>
      <View style={{ flex: 1, justifyContent: "center", marginLeft: 10 }}>
        <Text style={{ fontSize: 20 }}>Power: 20</Text>
        <Text style={{ fontSize: 20 }}>Special:</Text>
      </View>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>Goal</Text>
      </View>
    </View>
  );
}
