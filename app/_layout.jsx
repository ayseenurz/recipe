import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { GlobalProvider } from "../context/GlobalProvider";
import useAuth from "../hooks/useAuth";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    fBold: require("../assets/fonts/Figtree-Bold.ttf"),
    fExtraBold: require("../assets/fonts/Figtree-ExtraBold.ttf"),
    fLight: require("../assets/fonts/Figtree-Light.ttf"),
    fMedium: require("../assets/fonts/Figtree-Medium.ttf"),
    fRegular: require("../assets/fonts/Figtree-Regular.ttf"),
    fLight: require("../assets/fonts/Figtree-Light.ttf"),
  });

  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (loaded) {
      if (user) {
        router.replace("/(tabs)/home");
      } else {
        router.replace("/(auth)/sign-in");
      }
    }
  }, [loaded, user]);

  if (!loaded) {
    return null;
  }

  return (
    <GlobalProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)"/>
        <Stack.Screen name="(auth)"/>
        <Stack.Screen name="index"/>
        <Stack.Screen name="recipeList/[category]"/>
        <Stack.Screen name="recipeDetail/[recipeid]"/>
        <Stack.Screen name="todo/TodoList"/>
      </Stack>
    </GlobalProvider>
  );
}
