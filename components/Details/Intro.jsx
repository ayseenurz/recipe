import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import useAuth from "../../hooks/useAuth";
import { Colors } from "../../constants/Colors";
import { StatusBar } from "expo-status-bar";

const Intro = ({ recipe }) => {
  const router = useRouter();
  const { user } = useAuth();
  return (
    <View style={{}}>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          width: 60,
          height: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/icons/arrow.png")}
          style={{
            position: "absolute",
            marginTop: 20,
            width: 27,
            height: 27,
          }}
        />
      </TouchableOpacity>

      <Image
        source={{ uri: recipe?.imageUrl }}
        style={{
          marginTop: -40,
          width: "100%",
          height: 250,
        }}
      />

      <ScrollView
        style={{
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: Colors.WHITE,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.WHITE,
          }}
        >
          <Text
            style={{
              fontFamily: "fBold",
              fontSize: 30,
              textAlign: "center",
              padding: 20,
              color: Colors.RED,
            }}
          >
            {recipe?.name}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: Colors.WHITE,
          }}
        >
          <Text
            style={{
              fontFamily: "fBold",
              fontSize: 20,
              textAlign: "center",

              color: Colors.GRAY,
            }}
          >
            {recipe?.category}
          </Text>
        </View>
      </ScrollView>
      <StatusBar backgroundColor={Colors.WHITE} style="dark" />
    </View>
  );
};

export default Intro;
