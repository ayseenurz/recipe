import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import CustomButton from "../../components/CustomButton";
import { Colors } from "../../constants/Colors";
import { router } from "expo-router";
import { useGlobalContext } from "../../context/GlobalProvider";
import { signIn } from "../../database/firebaseIslem";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { email, setEmail, password, setPassword } = useGlobalContext();

  const logIn = () => {
    signIn(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
          <ImageBackground
            source={require("../../assets/images/food19.jpg")}
            style={styles.image}
          >
            <View style={styles.centeredView}>
              <View style={styles.inputContainer}>
                <Text style={styles.input}>YEMEK{"\n"}TARİFLERİ</Text>

                <View style={styles.textInputContainer}>
                  <TextInput
                    placeholder="Emailiniz..."
                    placeholderTextColor="rgba(0,0,0,0.3)"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                  />
                </View>

                <View style={styles.textInputPassword}>
                  <TextInput
                    placeholder="Şifreniz..."
                    placeholderTextColor="rgba(0,0,0,0.3)"
                    value={password}
                    secureTextEntry={!showPassword}
                    onChangeText={(text) => setPassword(text)}
                    style={{ flex: 1 }}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                  >
                    <Image
                      source={
                        showPassword
                          ? require("../../assets/icons/eyehide.png")
                          : require("../../assets/icons/eye.png")
                      }
                      style={styles.eyeImage}
                    />
                  </TouchableOpacity>
                </View>

                <CustomButton title="Giriş Yap" handlePress={logIn} />

                <View style={styles.footer}>
                  <Text style={styles.footerText}>Hesabın yok mu? </Text>
                  <TouchableOpacity onPress={() => router.push("/sign-up")}>
                    <Text style={styles.footerLinkText}>Kayıt Ol</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 100,
    paddingBottom: 100,
  },
  inputContainer: {
    padding: 20,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: Colors.YELLOW,
    width: "80%",
    backgroundColor: "rgba(255,255,255,0.8)",
  },
  input: {
    color: Colors.BLACK,
    fontFamily: "fMedium",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
  },
  textInputContainer: {
    padding: 12,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.YELLOW,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  textInputPassword: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.YELLOW,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  eyeIcon: {
    marginLeft: 10,
  },
  eyeImage: {
    width: 24,
    height: 24,
    opacity: 0.5,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  footerText: {
    fontFamily: "fMedium",
  },
  footerLinkText: {
    color: Colors.RED,
    fontFamily: "fMedium",
  },
});
