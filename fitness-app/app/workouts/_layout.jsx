// app/_layout.jsx
import { Stack } from "expo-router";

export default function WorkoutsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Main Workouts Page */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Exercises List */}
      <Stack.Screen name="exercises" options={{ presentation: "card" }} />

      {/* Exercise Detail */}
      <Stack.Screen name="[id]" options={{ presentation: "card" }} />
    </Stack>
  );
}


