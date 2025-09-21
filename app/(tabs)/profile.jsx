import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { logOut } from "../../database/firebaseIslem";
import { SafeAreaView } from "react-native-safe-area-context";
import useAuth from "../../hooks/useAuth";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

const profile = () => {
  const router = useRouter();
  const { user } = useAuth();
  const signOut = async () => {
    Alert.alert(
      "Çıkış",
      "Çıkış yapmayı onaylıyor musunuz?",
      [
        {
          text: "Onayla",
          onPress: () => logOut(),
        },
        {
          text: "İptal",
          onPress: () => console.log("çıkış onaylanmadı"),
          style: "cancel",
        },
      ],
      {
        cancelable: false,
      }
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.RED,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          display: "flex",
          flexDirection: "row",
          backgroundColor: Colors.RED,
        }}
      >
        <Text
          style={{
            fontFamily: "fExtraBold",
            fontSize: 40,
            paddingLeft: 20,
            marginBottom:40,
            color: Colors.WHITE,
          }}
        >
          Profil
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems:'center',
          backgroundColor: Colors.WHITE,
          width: "100%",
          height: "100%",
          borderTopLeftRadius:50,
          borderTopRightRadius:50,
        }}
      >
        <Image
          source={require("../../assets/images/profile.png")}
          style={{
            width: 100,
            height: 100,
            borderWidth: 5,
            borderColor: Colors.RED,
            borderRadius: 99,
          }}
        />
        <View
          style={{
            padding: 30,
            gap: 15,
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          <Text
            style={{
              fontFamily: "fMedium",
              fontSize: 25,
            }}
          >
            {user?.displayName}
          </Text>
          <Text
            style={{
              fontFamily: "fMedium",
              fontSize: 15,
              color: Colors.GRAY,
            }}
          >
            {user?.email}
          </Text>
        </View>
        <View style={{
          width:'100%',
          height:'55%',
          alignItems:'center',
          backgroundColor:Colors.YELLOW,
          borderTopLeftRadius:50,
          borderTopRightRadius:50,
          gap:20
        }}>
          <TouchableOpacity
          onPress={()=> router.push('todo/TodoList')}
            style={{
              marginTop:40,
              width: 120,
              height: 70,
              borderColor: Colors.RED,
              borderWidth:3,
              borderRadius:30,
              justifyContent:'center',
              alignItems:'center',
              backgroundColor:Colors.WHITE
            }}
          >
            <Text
              style={{
                fontFamily: "fBold",
                fontSize: 25,
                textAlign: "center",
              }}
            >
              To-Do
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
          onPress={()=>signOut()}
          style={{
              width: 120,
              height: 70,
              borderColor: Colors.RED,
              borderWidth:3,
              borderRadius:30,
              justifyContent:'center',
              alignItems:'center',
              backgroundColor:Colors.WHITE
            }}>
            <Image source={require('../../assets/images/logout.png')}
            style={{
              width:30,
              height:30
            }}/>
          </TouchableOpacity>
          <Text style={{
            fontFamily:'fBold'
          }}>@ 2024</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default profile;
