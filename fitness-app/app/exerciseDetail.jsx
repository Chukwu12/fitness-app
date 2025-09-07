import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "expo-router";
import { View, Text, Image, ScrollView } from "react-native";
import { fetchExerciseById } from "../api/exerciseDB";
import { formatExerciseData } from "../constants";

export default function ExerciseDetail() {
  const router = useRouter();
  const params = useSearchParams();
  const exerciseId = params.id; // pass id when navigating

  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    const getExercise = async () => {
      if (!exerciseId) return;
      const data = await fetchExerciseById(exerciseId);
      setExercise(formatExerciseData(data));
    };
    getExercise();
  }, [exerciseId]);

  if (!exercise) return <Text>Loading...</Text>;

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{exercise.name}</Text>
      <Image
        source={{ uri: exercise.gif }}
        style={{ width: "100%", height: 300, marginVertical: 20 }}
      />
      <Text>Body Part: {exercise.bodyPart}</Text>
      <Text>Target Muscle: {exercise.target}</Text>
      <Text>Equipment: {exercise.equipment}</Text>
      <Text style={{ marginTop: 10 }}>{exercise.instructions}</Text>
    </ScrollView>
  );
}
