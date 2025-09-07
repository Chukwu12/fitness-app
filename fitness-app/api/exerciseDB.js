import axios from "axios";
import Constants from "expo-constants";

// Access .env
const RAPID_API_KEY = process.env. EXPO_PUBLIC_RAPID_API_KEY;

const options = {
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

// Fetch all exercises (returns full objects with name, gifUrl, target, equipment, bodyPart)
export const fetchAllExercises = async () => {
  try {
    const response = await axios.get(
      "https://exercisedb.p.rapidapi.com/exercises",
      options
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching all exercises:", error);
    return [];
  }
};

// Fetch exercises by body part
export const fetchExercisesByBodyPart = async (bodyPart) => {
  try {
    const response = await axios.get(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
      options
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching exercises for ${bodyPart}:`, error);
    return [];
  }
};

// Fetch a single exercise by ID
export const fetchExerciseById = async (id) => {
  try {
    const response = await axios.get(
      "https://exercisedb.p.rapidapi.com/exercises",
      options
    );
    // Filter the single exercise
    const exercise = response.data.find((item) => item.id === id);
    return exercise || null;
  } catch (error) {
    console.error("Error fetching exercise by ID:", error);
    return null;
  }
};