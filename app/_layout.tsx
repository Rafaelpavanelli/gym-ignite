import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { THEME } from "@/constants/Theme";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";

import Loading from "@/components/Loading";
import { useEffect } from "react";

export default function GymLayout() {
  const [loaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <NativeBaseProvider theme={THEME}>
        <Loading />
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider theme={THEME}>
      <Stack
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      />
    </NativeBaseProvider>
  );
}
