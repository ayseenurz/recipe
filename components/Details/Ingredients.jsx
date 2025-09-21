import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

const Ingredients = ({recipe}) => {
  return (
    <View style={{
      backgroundColor:Colors.WHITE,
      padding:20,
      gap:5,
    }}>
      <View style={{
        display:'flex',
        flexDirection:'row',
        gap:15,
        alignItems:'center'
      }}>
      <Image source={require('../../assets/icons/recipe.png')}
        style={{
          width:30,
          height: 30,
        }}
      />
      <Text style={{
        fontFamily:'fMedium',
        fontSize:18,
        color:Colors.RED
      }}>Kullanılacak Malzemeler</Text>
      </View>
      <Text style={{
        marginTop:15
      }}>{recipe?.ingredients}</Text>
    </View>
  )
}

export default Ingredients