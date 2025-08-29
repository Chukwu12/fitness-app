// app/_layout.js
import { Stack } from "expo-router";
import { useState } from "react";

export default function RootLayout() {
  // fake auth for now → always false
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="login" />
      ) : (
        <Stack.Screen name="(tabs)" />
      )}
    </Stack>
  );
}
