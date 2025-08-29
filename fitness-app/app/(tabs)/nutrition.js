import { View, Text, StyleSheet } from "react-native";

export default function NutritionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🥗 Nutrition</Text>
      <Text style={styles.text}>Log meals and track calories.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, color: "#555" },
});
