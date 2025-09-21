import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const Features = ({ recipe }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: Colors.WHITE,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            marginLeft: 35,
            margin: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: Colors.WHITE,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: Colors.RED,
            padding: 10,
            width: 120,
          }}
        >
          <Image
            source={require("../../assets/icons/clock.png")}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text> | {recipe?.time} dakika</Text>
        </View>
        <View
          style={{
            margin: 20,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: Colors.WHITE,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: Colors.YELLOW,
            padding: 10,
            width: 120,
          }}
        >
          <Image
            source={require("../../assets/icons/team.png")}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Text> | {recipe?.howManyPerson} kişilik</Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default Features;
