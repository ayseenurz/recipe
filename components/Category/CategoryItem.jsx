import { Text,TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const CategoryItem = ({ category ,onCategoryPress}) => {
const {category:kategori,id}=category
  return (
    <TouchableOpacity
      onPress={()=>onCategoryPress(kategori)}
      style={{
        padding: 12,
        fontFamily: "fMedium",
        fontSize: 20,
        //backgroundColor: Colors.RED,
        borderRadius: 25,
        borderCurve: "continuous",
      }}
    >
      <Text style={{
        fontFamily:'fBold',
        fontSize:17,
        color:Colors.YELLOW
      }}>{category.category}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
