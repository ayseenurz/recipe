import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Categories from "../../components/Category/Categories";
import PopularRecipes from "../../components/PopularRecipes/PopularRecipes";
import Header from "../../components/Header";
import NewRecipes from "../../components/NewRecipes/NewRecipes";
import MySplashScreen from "../../components/MySplashScreen";
import { collection, getDocs, limit, orderBy, query } from "@firebase/firestore";
import { database } from "../../config/firebaseConfig";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [newRecipeList, setNewRecipeList] = useState([]);
  const [popularRecipeList, setPopularRecipeList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [popularRecipesLoading, setPopularRecipesLoading] = useState(true);
  const [newRecipesLoading, setNewRecipesLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([getPopularRecipeList(), GetCategoryList(), getNewRecipeList()]);
      setLoading(false);
    };
    loadData();
  }, []);

  const getPopularRecipeList = async () => {
    setPopularRecipeList([]);
    const q = query(collection(database, "RecipeList"), limit(6));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setPopularRecipeList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
    });
    setPopularRecipesLoading(false);
  };

  const GetCategoryList = async () => {
    setCategoryList([]);
    const q = query(collection(database, "Category"));
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setCategoryList((prev) => [...prev, doc.data()]);
    });
    setCategoriesLoading(false);
  };

  const getNewRecipeList = async () => {
    setNewRecipeList([]);
    const q = query(
      collection(database, "RecipeList"),
      orderBy("createdAt", "desc"),
      limit(6)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setNewRecipeList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
    });
    setNewRecipesLoading(false);
  };

  if (loading || popularRecipesLoading ||categoriesLoading || newRecipesLoading) {
    return <MySplashScreen />;
  }

  if (user) {
    return (
      <ScrollView>
        <Header/>
        <PopularRecipes popularRecipeList={popularRecipeList} />
        <Categories categoryList={categoryList} />
        <NewRecipes newRecipeList={newRecipeList} />
      </ScrollView>
    );
  }
};

export default Home;
