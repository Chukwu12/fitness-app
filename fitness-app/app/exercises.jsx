import { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { fetchExercisesByBodyPart } from "../api/exerciseDB";
import { StatusBar } from 'expo-status-bar';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Exercises({ route }) {
  const router = useRouter();
  const bodyPart = route?.params?.bodyPart || 'back';

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const getExercises = async () => {
      const data = await fetchExercisesByBodyPart(bodyPart);
      setExercises(data);
    };
    getExercises();
  }, [bodyPart]);

  return (
    <ScrollView>
  {exercises.map((exercise, index) => (
    <TouchableOpacity key={index} onPress={() => router.push(`/exerciseDetail?id=${exercise.id}`)}>
      <Image
        source={{ uri: exercise.gifUrl }}
        style={{ width: wp(100), height: hp(45) }}
      />
      <Text>{exercise.name}</Text>
    </TouchableOpacity>
  ))}
</ScrollView>

  );
}
