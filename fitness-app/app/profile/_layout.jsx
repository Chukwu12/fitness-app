// app/_layout.jsx
import { Stack } from "expo-router";

export default function ProfileLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Profile index */}
      <Stack.Screen name="tabs" options={{ headerShown: false }} />

      {/* Fullscreen modal */}
      <Stack.Screen
        name="exercises"
        options={{ presentation: "fullScreenModal" }}
      />
    </Stack>
  );
}
