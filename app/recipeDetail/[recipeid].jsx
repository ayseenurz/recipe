import { View, Text, Alert, ScrollView, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../config/firebaseConfig";
import { Colors } from "../../constants/Colors";
import Intro from '../../components/Details/Intro';
import Features from "../../components/Details/Features";
import Ingredients from "../../components/Details/Ingredients";
import Preparing from "../../components/Details/Preparing";
import MySplashScreen from '../../components/MySplashScreen';

const RecipeDetail = () => {
  const { recipeid } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    getRecipeById();
  }, []);

  const getRecipeById = async () => {
    setLoading(true);
    const docRef = doc(database, "RecipeList", recipeid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists) {
      setRecipe({ id: docSnap.id, ...docSnap?.data() });
      setLoading(false);
    } else {
      Alert.alert("Uyarı", "Tarif Bulunamadı!");
      setLoading(false);
    }
  };
  if(loading){
    return <MySplashScreen/>
  }

  return (
    <ScrollView
      style={{
        height: 1000,
      }}
    >
      {loading ? (
        <ActivityIndicator
          size={"large"}
          color={Colors.RED}
          style={{
            marginTop: "60%",
          }}
        />
      ) : (
        <View>
          {/* recipe intro */}
          <Intro recipe={recipe}/>
          {/* some features */}
          <Features recipe={recipe}/>
          {/* ingredients */}
          <Ingredients recipe={recipe}/>
          {/* preparing */}
          <Preparing recipe={recipe}/>
        </View>
      )}
    </ScrollView>
  );
};

export default RecipeDetail;
