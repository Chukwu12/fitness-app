import axios from "axios";

const API_BASE = "https://exercisedb-api-git-main-chukwu12s-projects.vercel.app/api";

/**
 * Format raw exercise data from API
 */
const formatExercise = (ex) => ({
  ...ex,
  exerciseId: ex.exerciseId || ex.id,
  gifUrl: ex.imageUrl || ex.gif || "https://via.placeholder.com/300",
  target: ex.targetMuscles?.join(", ") || "N/A",
  bodyPart: ex.bodyParts?.join(", ") || "N/A",
  equipment: ex.equipments?.join(", ") || "N/A",
  instructions: ex.instructions?.join("\n") || "No instructions available",
});

export const fetchAllExercises = async () => {
  try {
    const { data } = await axios.get(`${API_BASE}/exercises`);
    return data.map(formatExercise);
  } catch (err) {
    console.error("Error fetching all exercises:", err);
    return [];
  }
};

export const fetchExercisesByBodyPart = async (bodyPart) => {
  try {
    const { data } = await axios.get(`${API_BASE}/exercises/bodyPart/${bodyPart}`);
    return data.map(formatExercise);
  } catch (err) {
    console.error(`Error fetching exercises for ${bodyPart}:`, err);
    return [];
  }
};

export const fetchExerciseById = async (id) => {
  try {
    const { data } = await axios.get(`${API_BASE}/exercises/exercise/${id}`);
    return formatExercise(data);
  } catch (err) {
    console.error("Error fetching exercise by ID:", err);
    return null;
  }
};
