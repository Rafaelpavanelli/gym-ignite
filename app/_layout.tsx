import { useEffect } from "react";

import { StatusBar } from "react-native";

import { THEME } from "@/constants/Theme";

import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import { NativeBaseProvider } from "native-base";


import Loading from "@/components/Loading";



export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return(
      <NativeBaseProvider theme={THEME}>
        <Loading />
      </NativeBaseProvider>
    )
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Stack initialRouteName="(Gym)/index" screenOptions={{
        headerShown: false,
        animation: 'slide_from_left'
      }}>
        <Stack.Screen name="(Gym)/index" options={{
          animation: 'slide_from_left'
        }}/>
        <Stack.Screen name="(Gym)/Signup"  options={{
          animation: 'slide_from_right'
        }}/>
        <Stack.Screen name="(Gym)/(home)"  options={{
          animation: 'slide_from_right'
        }}/>
      </Stack>
    </NativeBaseProvider>
  );
}
