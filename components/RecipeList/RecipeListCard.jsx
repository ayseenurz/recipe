import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";

const RecipeListCard = ({ recipe }) => {
  const router = useRouter();
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: "100%",
          padding: 10,
          margin: 20,
          backgroundColor: "#fff",
          // borderRadius:20,
          //  borderColor:Colors.RED,
          // borderWidth:5
        }}
        onPress={() => router.push("/recipeDetail/" + recipe?.id)}
      >
        <Image
          source={{ uri: recipe?.imageUrl }}
          style={{
            width: 130,
            height: 150,
            borderRadius: 15,
          }}
        />
        <View style={{ padding: 6, maxWidth: "60%" }}>
          <Text
            style={{
              fontFamily: "fBold",
              fontSize: 25,
            }}
          >
            {recipe?.name}
          </Text>
          <Text
            style={{
              fontFamily: "fLight",
              fontSize: 15,
            }}
          >
            {recipe?.category}
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RecipeListCard;
