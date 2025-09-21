import { View, Text, Image } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'

const EmptyState = ({title,subtitle}) => {
  return (
    <View style={{
        marginTop:'30%',
        justifyContent:'center',
        alignItems:'center',
        gap:15
    }}>
      <Image source={require('../assets/icons/food.png')}
      style={{
        width: 60,height: 60
      }}/>
      <Text style={{
        fontFamily:'fMedium',
        fontSize:25,
        color:Colors.RED
      }}>{title}</Text>
      <Text style={{
        fontFamily:'fLight',
        fontSize:15,
        color:Colors.RED
      }}>{subtitle}</Text>
    </View>
  )
}

export default EmptyState