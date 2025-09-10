import axios from "axios";

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { part } = req.query;

  try {
    const response = await axios.get(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${part}`,
      {
        headers: {
          "x-rapidapi-host": process.env.RAPIDAPI_HOST,
          "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error fetching exercises:", error.message);
    res.status(500).json({ error: "Failed to fetch exercises" });
  }
}
