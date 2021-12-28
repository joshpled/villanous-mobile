import React from "react";
import { View, } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import PlayerHand from "../container/PlayerHand";
import Locations from "../container/Locations";
import Status from "../container/Status";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function Board({navigation}) {

    return (
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          padding: 20,
        }}
      >
        <Pressable onPress={navigation.goBack}>
          <Ionicons name="arrow-back-circle-outline" size={50} color="black" />
        </Pressable>
        <Status />
        <Locations />
        <PlayerHand />
      </View>
    );
  
}