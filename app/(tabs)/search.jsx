import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React, { useState, useCallback } from "react";
import SearchBar from "../../components/Search/SearchBar";
import Categories from "../../components/Category/Categories";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  startAt,
  endAt,
} from "firebase/firestore";
import { database } from "../../config/firebaseConfig";
import { Colors } from "../../constants/Colors";
import ExploreRecipeListCard from "../../components/Explore/ExploreRecipeListCard";
import EmptyState from "../../components/EmptyState";

const Search = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecipesBySearch = async (searchQuery) => {
    setLoading(true);
    setRecipeList([]);
    try {
      const q = query(
        collection(database, "RecipeList"),
        orderBy("name"),
        startAt(searchQuery),
        endAt(searchQuery + "\uf8ff")
      );
      const querySnapshot = await getDocs(q);

      const recipes = querySnapshot.docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        .filter((recipe) => recipe.name.includes(searchQuery));
      setRecipeList(recipes);
    } catch (error) {
      console.error("Error fetching recipes: ", error);
    } finally {
      setLoading(false);
    }
  };

  const getRecipeByCategory = useCallback(async (category) => {
    setLoading(true);
    setRecipeList([]);
    try {
      const q = query(
        collection(database, "RecipeList"),
        where("category", "==", category)
      );
      const querySnapshot = await getDocs(q);

      const recipes = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecipeList(recipes);
    } catch (error) {
      console.error("Error fetching recipes: ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <View style={{ flex: 1, marginTop: "10%" }}>
      <Text style={{ fontFamily: "fExtraBold", fontSize: 40, paddingLeft: 20 }}>
        Keşfet
      </Text>
      <SearchBar getRecipesBySearch={getRecipesBySearch} />
      <Categories searching={true} onCategorySelect={getRecipeByCategory} />
      {loading ? (
        <ActivityIndicator
          size="large"
          color={Colors.RED}
          style={{ marginTop: "30%" }}
        />
      ) : (
        <FlatList
          data={recipeList}
          renderItem={({ item }) => (
            <ExploreRecipeListCard key={item.id} recipe={item} />
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="Tarif mi arıyorsun?"
              subtitle="Harika tarifler keşfetmek için aramaya başla"
            />
          )}
        />
      )}
    </View>
  );
};

export default Search;