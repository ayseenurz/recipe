import {
  View,
  TextInput,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../../constants/Colors";

const SearchBar = ({ getRecipesBySearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query) {
      Alert.alert("Uyarı", "Lütfen anahtar kelimeler giriniz !");
      return;
    }
    getRecipesBySearch(query);
  };

  return (
    <View style={{ marginBottom: 110 }}>
      <View
        style={{
          padding: 17,
          borderRadius: 20,
          borderWidth: 3,
          borderColor: Colors.YELLOW,
          margin: 20,
          width: 350,
          justifyContent: "space-between",
          flexDirection: "row",
          position: "absolute",
        }}
      >
        <TextInput
          placeholder="Yemek Tarifleri Ara "
          value={query}
          placeholderTextColor={Colors.GRAY}
          onChangeText={setQuery}
          onSubmitEditing={handleSearch} 
          style={{ flex: 1 ,opacity:0.5}} 
        />
        <TouchableOpacity onPress={handleSearch}>
          <Image
            source={require("../../assets/icons/search.png")}
            style={{ width: 25, height: 25, opacity: 0.3 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBar;
