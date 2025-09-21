import { Text, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../constants/Colors'

const MySplashScreen = () => {
  const [loading, setLoading] = useState();
  return (
    <SafeAreaView style={{ flex:1,
        backgroundColor:Colors.YELLOW,
        justifyContent:'center',
        alignItems:'center'
    }}>
      {!loading &&
      <>
      <Text style={{
        fontSize:45,
        fontFamily:'fExtraBold',
        textAlign:'center',
        color:Colors.RED
      }}>YEMEK</Text>
      <Text style={{
        fontSize:45,
        fontFamily:'fExtraBold',
        textAlign:'center',
        color:Colors.RED
      }}>TARİFLERİ</Text>
      <ActivityIndicator size={"large"} color={Colors.RED} style={{
        marginTop:'50%',
      }}/>
      </> 
}
    </SafeAreaView>
  )
}

export default MySplashScreen