import React, { Component } from "react";
import { View } from "react-native";

import PlayerHand from "../container/PlayerHand";
import Locations from "../container/Locations";
import Status from "../container/Status";

export default class MyLayout extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "flex-start",
          padding: 20,
        }}
      >
        <Status />
        <Locations />
        <PlayerHand />
      </View>
    );
  }
}
