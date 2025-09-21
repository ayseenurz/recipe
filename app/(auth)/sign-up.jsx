import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Colors } from "../../constants/Colors";
import { router } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";
import { signUp } from "../../database/firebaseIslem";

const SignUp = () => {
  /* global değerler */
  const { username, setUsername, email, setEmail, password, setPassword } =
    useGlobalContext();
  const [showPassword, setShowPassword] = useState(false);

  const submit = () => {
    signUp(username, email, password);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={{
            height: 1000,
          }}
        >
          <ImageBackground
            source={require("../../assets/images/food19.jpg")}
            style={{ width: "100%", height: "100%" }}
          >
            <View
              style={{
                gap: "7%",
                marginTop: "40%",
                borderTopRightRadius: 50,
                borderTopLeftRadius: 50,
                backgroundColor: Colors.WHITE,
                height: 700,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginVertical: "5%",
                  fontFamily: "fExtraBold",
                  fontSize: 40,
                  textAlign: "center",
                  color: Colors.RED,
                }}
              >
                YEMEK{"\n"}TARİFLERİ
              </Text>
              <View
                style={{
                  padding: 17,
                  borderRadius: 20,
                  borderWidth: 3,
                  borderColor: Colors.YELLOW,
                  marginTop: 2,
                  width: "80%",
                  marginBottom: "10%",
                }}
              >
                <TextInput
                  placeholder="Kullanıcı Adınız..."
                  title="username"
                  placeholderTextColor="rgba(0,0,0,0.3)"
                  value={username}
                  onChangeText={(text) => setUsername(text)}
                />
              </View>
              <View
                style={{
                  padding: 17,
                  borderRadius: 20,
                  borderWidth: 3,
                  borderColor: Colors.YELLOW,
                  marginTop: 2,
                  width: "80%",
                  marginBottom: "10%",
                }}
              >
                <TextInput
                  placeholder="Emailiniz..."
                  title="email"
                  placeholderTextColor="rgba(0,0,0,0.3)"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View
                style={{
                  padding: 17,
                  borderRadius: 20,
                  borderWidth: 3,
                  borderColor: Colors.YELLOW,
                  marginTop: 2,
                  width: "80%",
                  marginBottom: "10%",
                }}
              >
                <TextInput
                  placeholder="Şifreniz..."
                  title="password"
                  placeholderTextColor="rgba(0,0,0,0.3)"
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                />

                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    padding: 5,
                  }}
                >
                  <Image
                    source={
                      showPassword
                        ? require("../../assets/icons/eyehide.png")
                        : require("../../assets/icons/eye.png")
                    }
                    style={{ width: 24, height: 24 ,opacity:0.2}}
                  />
                </TouchableOpacity>
              </View>
              <CustomButton title="Kayıt Ol" handlePress={submit} />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "fMedium",
                    marginTop: 30,
                  }}
                >
                  Hesabın Var Mı ?{" "}
                </Text>
                <TouchableOpacity onPress={() => router.push("/sign-in")}>
                  <Text
                    style={{
                      color: Colors.RED,
                      marginTop: 30,
                    }}
                  >
                    Giriş Yap
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
