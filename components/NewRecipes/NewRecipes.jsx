import {
  FlatList,
  Text,
  View,
} from "react-native";
import React from "react";
import NewRecipesListCard from "./NewRecipesListCard";

const NewRecipes = ({ newRecipeList }) => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "fMedium",
            fontSize: 22,
            paddingVertical:5,
            paddingHorizontal:20
          }}
        >
          En Yeniler
        </Text>
      </View>

      <FlatList
        data={newRecipeList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <NewRecipesListCard key={index} recipe={item} />
        )}
      />
    </View>
  );
};

export default NewRecipes;
