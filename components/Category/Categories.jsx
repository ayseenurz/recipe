import { Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { database } from "../../config/firebaseConfig";
import CategoryItem from "../Category/CategoryItem";
import { useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";

const Categories = ({ searching = false, onCategorySelect}) => {
  const router = useRouter();
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetCategoryList();
  }, []);

  const GetCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(database, "Category"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setCategoryList((prev) => [...prev, doc.data()]);
    });
    setLoading(false);
  };
  const onCategoryPress = (item) => {
    if (!searching) {
      router.push("/recipeList/" + item);
    } else {
      onCategorySelect(item);
    }
  };

  return (
    <View>
      {!searching && (
        <Text
          style={{
            fontFamily: "fMedium",
            fontSize: 20,
            paddingVertical:5,
            paddingHorizontal:20,
            color: Colors.BLACK,
          }}
        >
          Kategoriler
        </Text>
      )}

      <FlatList
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 12,
          gap: 12,
        }}
        showsHorizontalScrollIndicator={false}
        data={categoryList}
        renderItem={({ item, index }) => (
          <CategoryItem
            category={item}
            key={index}
            onCategoryPress={onCategoryPress}
          />
        )}
      />
    </View>
  );
};

export default Categories;
