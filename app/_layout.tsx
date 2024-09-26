import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { tokenCache } from "@/lib/auth";
import { ClerkLoaded, ClerkProvider } from "@clerk/clerk-expo";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Roboto_100: require('@/assets/fonts/Roboto/Roboto-Thin.ttf'),
    Roboto_300: require('@/assets/fonts/Roboto/Roboto-Light.ttf'),
    Roboto_400: require('@/assets/fonts/Roboto/Roboto-Regular.ttf'),
    Roboto_500: require('@/assets/fonts/Roboto/Roboto-Medium.ttf'),
    Roboto_700: require('@/assets/fonts/Roboto/Roboto-Bold.ttf'),
    Roboto_900: require('@/assets/fonts/Roboto/Roboto-Black.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(root)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      </ClerkLoaded>
      </ClerkProvider>
  );
}