import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const CustomButton = ({ title, handlePress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        style={{
          padding: "5%",
          backgroundColor: Colors.YELLOW,
          borderRadius: 30,
          marginHorizontal: "30%",
        }}
      >
        <Text
          style={{
            fontFamily: "fBold",
            fontSize: "20",
            color: Colors.WHITE,
            textAlign: "center",
          }}
        >
          {title}
        </Text>
        </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
