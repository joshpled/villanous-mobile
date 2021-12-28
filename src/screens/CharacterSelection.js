import React, { useState } from "react";
import { Pressable, FlatList, ImageBackground } from "react-native";
import CharacterCard from "../components/CharacterCard";
import New from "../assets/New.png";
import { Ionicons } from "@expo/vector-icons";

import {
  Yzma,
  Hook,
  Cruella,
  Facilier,
  EvilQueen,
  Gaston,
  Hades,
  HornedKing,
  Jafar,
  LadyTre,
  Maleficient,
  Gothel,
  Pete,
  Prince,
  Ratigan,
  Scar,
  QueenOHearts,
  Ursula,
} from "../assets/characterPortraits";
import { SafeAreaView } from "react-native-safe-area-context";
import CircleButton from "../components/CircleButton";

export default function CharacterSelection({ navigation: { navigate, goBack } }) {
  const [selectedId, setSelectedId] = useState(null);

  const goToGame = () => navigate("Game");

  const characterPortraits = [
    { portrait: Yzma, id: 1 },
    { portrait: Hook, id: 2 },
    { portrait: Cruella, id: 3 },
    { portrait: Facilier, id: 4 },
    { portrait: EvilQueen, id: 5 },
    { portrait: Gaston, id: 6 },
    { portrait: Hades, id: 7 },
    { portrait: HornedKing, id: 8 },
    { portrait: Jafar, id: 9 },
    { portrait: LadyTre, id: 10 },
    { portrait: Maleficient, id: 11 },
    { portrait: Gothel, id: 12 },
    { portrait: Pete, id: 13 },
    { portrait: Prince, id: 14 },
    { portrait: Ratigan, id: 15 },
    { portrait: Scar, id: 16 },
    { portrait: QueenOHearts, id: 17 },
    { portrait: Ursula, id: 18 },
  ];

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#ffd700" : "hsla(0, 100%, 90%, 0);";
    return <CharacterCard portrait={item} onPress={() => setSelectedId(item.id)} backgroundColor={{ backgroundColor }} />;
  };

  return (
    <ImageBackground
      blurRadius={7}
      source={New}
      resizeMode="stretch"
      style={{
        flex: 1,
        justifyContent: "stretch",
      }}
    >
      <SafeAreaView>
        <Pressable onPress={() => navigate("Home")} style={{position: 'absolute', zIndex: 999}}>
          <Ionicons name="arrow-back-circle-outline" size={50} color="white" style={{ top: 20, left: 10 }} />
        </Pressable>
        <FlatList
          data={characterPortraits}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={3}
          horizontal={false}
          columnWrapperStyle={{ flex: 1, justifyContent: "center", margin: 10 }}
          extraData={selectedId}
        />
        {selectedId && <CircleButton goToGame={goToGame} />}
      </SafeAreaView>
    </ImageBackground>
  );
}
