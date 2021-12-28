import React from "react";
import { View } from "react-native";
import * as FileSystem from "expo-file-system";

import Locations from "../container/Locations";
import Status from "../container/Status";

export default function Board({ route, navigation: { goBack } }) {
  const { selectedId } = route.params;
  let thisthing = () => {
    FileSystem.readDirectoryAsync("file:///Users/joshpled/Documents/Code/Villanous-Mobile/src/assets/characterPortraits")
      .then((x) => console.log("this is ", x))
      .catch((err) => console.log("this is", err));
  };
  console.log(thisthing());

  return (
    <View
      style={{
        flex: 1,
        alignItems: "flex-start",
        padding: 20,
      }}
    >
      <Status goBack={goBack} />
      <Locations />
    </View>
  );
}
