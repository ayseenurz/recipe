import {
  Text,
  View,
  FlatList,
} from "react-native";
import React from "react";
import PopularRecipesCard from "../PopularRecipes/PopularRecipesCard";

const PopularRecipes = ({popularRecipeList}) => {
  return (
    <View>
      <View
        style={{
          paddingLeft: 10,
          marginBottom: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "fMedium",
            fontSize: 20,
            padding: 2,
          }}
        >
          Popüler Tarifler
        </Text>
      </View>

      <FlatList
        data={popularRecipeList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <PopularRecipesCard key={index} recipe={item} />
        )}
      />
    </View>
  );
};

export default PopularRecipes;
