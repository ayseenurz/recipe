import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, where } from "firebase/firestore";
import { database } from "../../config/firebaseConfig";
import { useLocalSearchParams } from "expo-router";
import RecipeListCard from '../../components/RecipeList/RecipeListCard';

const Query = () => {
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const {query} = useLocalSearchParams();

  useEffect(() => {
    if (query) {
      getRecipesBySearch();
    }
  }, [query]);

  const getRecipesBySearch = async () => {
    setLoading(true);
    setRecipeList([]);
    try {
      const q = query(collection(database, "RecipeList"),where("name","==",query));
      const querySnapshot = await getDocs(q);
  
      querySnapshot.forEach((doc) => {
        setRecipeList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
        setLoading(false);
      });
    } catch (error) {
      console.log("Error","cant search")
    }
    setLoading(false)
  };

  return (
    <View>
      <FlatList
        data={recipeList}
        renderItem={({ item }) => (
          <RecipeListCard
            key={item.id}
            recipe={item}
          />
        )}
      />
    </View>
  );
};

export default Query;