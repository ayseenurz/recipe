import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';

const PopularRecipesCard = ({recipe}) => {
    const router = useRouter();
  return (
    <TouchableOpacity 
    onPress={()=>router.push('/recipeDetail/'+recipe?.id)}
    style={{
        padding:10,
        marginLeft:20,
        backgroundColor:'#fff',
        borderRadius:20,
        borderColor:Colors.CardBorder,
        borderWidth:5
    }}>
    <Image source={{uri: recipe?.imageUrl}}
    style={{width:240,
        height:150,
        borderRadius:15
    }}/>
    <View style={{ padding:6}}>
        <Text style={{
            fontFamily:'fBold',
            fontSize:25,
           
        }}>{recipe?.name}</Text>
        <View style={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center'
        }}>
          <Text
            style={{
              fontFamily: "fLight",
              fontSize: 15,
            }}
          >
            {recipe?.category}
            </Text>
            <View
              style={{
                padding: 8,
                backgroundColor: Colors.RED,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontFamily: "fMedium",
                  fontSize:12,
                  color: Colors.WHITE,
                }}
              >
                POPÜLER
              </Text>
            </View>
        </View>
    </View>
    </TouchableOpacity>
  )
}

export default PopularRecipesCard