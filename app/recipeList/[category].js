import { View, Text, FlatList, ActivityIndicator, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Colors } from "../../constants/Colors";
import RecipeListCard from "../../components/RecipeList/RecipeListCard";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { database } from "../../config/firebaseConfig";
import MySplashScreen from "../../components/MySplashScreen";

const RecipeListByCategory = () => {
  const navigation = useNavigation();
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState();
  const { category } = useLocalSearchParams();
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
      headerShown:false,
    });
    getRecipeList();
  }, []);

  const getRecipeList = async () => {
    setLoading(true);
    setRecipeList([]);
    const q = query(collection(database, "RecipeList"),
      where("category", "==", category)
    );
    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      setRecipeList((prev) => [...prev, { id: doc?.id, ...doc.data() }]);
    });
    setLoading(false);
  };

  if(loading){
    return <MySplashScreen/>
  }

  return (
    <SafeAreaView style={{
      flex:1,
      backgroundColor:Colors.WHITE
    }}>
      <TouchableOpacity onPress={()=> router.back()} >
      <Image source={require('../../assets/icons/arrow.png')} style={{
        width:28,
        height:28,
        marginLeft:20,
        
      }}/>
      </TouchableOpacity>
      <View>
        <Text style={{
          fontFamily:'fBold',
          fontSize:30,
          textAlign:'center',
          color:Colors.RED
        }}>{category}</Text>
      </View>
    <View>
      {recipeList?.length > 0 || loading == false ? (
        <FlatList
          data={recipeList}
          onRefresh={getRecipeList}
          refreshing={loading}
          renderItem={({ item, index }) => (
            <RecipeListCard key={index} recipe={item} />
      )}
        />
      ) : loading ? (
        <ActivityIndicator
          style={{ marginTop: "60%" }}
          size="large"
          color={Colors.RED}
        />
      ) : (
        <Text>Tarif Bulunamadı</Text>
      )}
    </View>
    </SafeAreaView>
  );
};

export default RecipeListByCategory;
