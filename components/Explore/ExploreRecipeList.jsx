import { View, Text, FlatList } from "react-native";
import React from "react";
import ExploreRecipeListCard from "./ExploreRecipeListCard";

const ExploreRecipeList = ({ recipeList }) => {
  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <ExploreRecipeListCard
            key={item.id}
            recipe={item}
          />
        )}
      />
    </View>
  );
};

export default ExploreRecipeList;
