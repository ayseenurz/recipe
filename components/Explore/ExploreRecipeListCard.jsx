import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'
import { useRouter } from 'expo-router'

const ExploreRecipeListCard = ({recipe}) => {
    const router= useRouter();
  return (
    <TouchableOpacity 
    onPress={()=> router.push('/recipeDetail/'+recipe?.id)}
    style={{
      margin:30,
      borderRadius:27,
      backgroundColor:Colors.WHITE,
      borderColor:Colors.RED,
      borderWidth:5,
        
    }}>
      <Image source={{uri:recipe?.imageUrl}}
      style={{
        height:170,
        width:'100%',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
      }}
      />
      <View style={{
        padding:20,
      }}>
        <Text style={{
            fontFamily:'fBold',
            fontSize:30,
            color:Colors.RED
        }}>{recipe?.name}</Text>
        <Text style={{
            fontFamily:'fLight',
            fontSize:15,
            color:Colors.BLACK
        }}>{recipe?.category}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ExploreRecipeListCard