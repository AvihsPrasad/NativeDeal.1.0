import { Stack } from 'expo-router';

export default function PublicLayout() {
  return (
      <Stack>
        <Stack.Screen name="notification" options={{ headerShown: false }} />
        <Stack.Screen name="wishlist" options={{ headerShown: false }} />
        <Stack.Screen name="cart" options={{ headerShown: false }} />
        <Stack.Screen name="cartAddress" options={{ headerShown: false }} />
        <Stack.Screen name="profileEdit" options={{ headerShown: false }} />
        <Stack.Screen name="orderDetails" options={{ headerShown: false }} />
        <Stack.Screen name="ordersList" options={{ headerShown: false }} />
        <Stack.Screen name="explore/[eid]" options={{ headerShown: false }} />
        {/* <Stack.Screen name="+not-found" /> */}
      </Stack>
  );
}
