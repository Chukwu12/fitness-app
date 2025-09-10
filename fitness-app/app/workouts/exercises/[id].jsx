import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { useSearchParams } from "expo-router";
import { fetchExerciseById } from "../../../api/exerciseDB";

export default function ExerciseDetail() {
  const { id } = useSearchParams();
  const [exercise, setExercise] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExercise = async () => {
      try {
        const data = await fetchExerciseById(id);
        setExercise(data);
      } catch (err) {
        console.error("Error fetching exercise by ID:", err);
      } finally {
        setLoading(false);
      }
    };
    getExercise();
  }, [id]);

  if (loading) return <ActivityIndicator size="large" color="#F43F5E" />;

  if (!exercise) return <Text style={styles.center}>Exercise not found.</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Image source={{ uri: exercise.gifUrl }} style={styles.image} resizeMode="cover" />
      <Text style={styles.info}>Target: {exercise.target}</Text>
      <Text style={styles.info}>Body Part: {exercise.bodyPart}</Text>
      <Text style={styles.info}>Equipment: {exercise.equipment}</Text>
      <Text style={styles.instructions}>{exercise.instructions}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 16, textTransform: "capitalize" },
  image: { width: "100%", height: 300, borderRadius: 12, marginBottom: 16 },
  info: { fontSize: 16, marginBottom: 8 },
  instructions: { fontSize: 14, marginTop: 12, lineHeight: 20 },
});
