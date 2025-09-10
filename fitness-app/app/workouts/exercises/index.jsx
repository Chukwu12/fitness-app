import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Image, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { fetchExercisesByBodyPart } from "../../../api/exerciseDB";

export default function ExercisesScreen() {
  const { bodyPart } = useLocalSearchParams();
  const router = useRouter();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExercises = async () => {
      try {
        const data = await fetchExercisesByBodyPart(bodyPart || "back");
        setExercises(data);
      } catch (err) {
        console.error(`Error fetching exercises for ${bodyPart}:`, err);
      } finally {
        setLoading(false);
      }
    };
    getExercises();
  }, [bodyPart]);

  if (loading) return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color="#F43F5E" />
      <Text>Loading exercises...</Text>
    </View>
  );

  if (exercises.length === 0) return (
    <View style={styles.center}>
      <Text>No exercises found for "{bodyPart}".</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{bodyPart} Exercises</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.exerciseId || item.id || item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/workouts/exercises/${item.exerciseId}`)}
          >
            <Image source={{ uri: item.gifUrl }} style={styles.image} resizeMode="cover" />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  heading: { fontSize: 22, fontWeight: "bold", marginBottom: 16 },
  card: { marginBottom: 12, backgroundColor: "#f1f1f1", borderRadius: 8, padding: 8 },
  image: { width: "100%", height: 200, borderRadius: 8, marginBottom: 8 },
  name: { fontSize: 16, fontWeight: "600", textTransform: "capitalize" },
  center: { flex: 1, justifyContent: "center", alignItems: "center", textAlign: "center" },
});
