import { Text, View, ImageBackground, Pressable } from "react-native";
import { Colors } from "../constants/Colors";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

export default function App() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("../assets/images/mainpage.jpg")}
        style={{
          width: "100%",
          height: "100%",
          flex: 1,
          position: "absolute",
        }}
      >
        {/* linear gradient */}
        <Animated.View entering={FadeInDown.duration(550)} style={{ flex: 1 }}>
          <LinearGradient
            colors={[
              "rgba(255,255,255,0)",
              "rgba(255,255,255,0.5)",
              "white",
              "white",
            ]}
            style={{ position: "absolute", bottom: 0, width: 400, height: 600 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 0.8 }}
          />
          {/* content  */}
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 14,
            }}
          >
            <Text
              style={{
                fontFamily: "fExtraBold",
                fontSize: "45%",
                color: Colors.RED,
                textAlign: "center",
              }}
            >
              YEMEK{"\n"}TARİFLERİ
            </Text>
            <Text
              style={{
                fontFamily: "fLight",
                fontSize: "15%",
                letterSpacing: 1,
                marginBottom: 10,
              }}
            >
              Sağlıklı ve Harika Tarifler Keşfetmeye Varsan
            </Text>
            <View>
              <Pressable
                onPress={() => router.push("/sign-in")}
                style={{
                  marginBottom: 50,
                  backgroundColor: Colors.YELLOW,
                  padding: 20,
                  borderRadius: 30,
                }}
              >
                <Text
                  style={{
                    fontFamily: "fSemiBold",
                    color: Colors.WHITE,
                    fontSize: "20%",
                  }}
                >
                  Haydi Başlayalım
                </Text>
              </Pressable>
            </View>
          </View>
        </Animated.View>
      </ImageBackground>
      <Toast />
    </SafeAreaProvider>
  );
}
