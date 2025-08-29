import { View, Text, StyleSheet } from "react-native";

export default function WorkoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💪 Workout</Text>
      <Text style={styles.text}>Plan and track your training routines.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, color: "#555" },
});
