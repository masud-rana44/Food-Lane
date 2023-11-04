import axios from "axios";

export async function getFoods() {
  const response = await axios.get("http://localhost:5000/foods");
  return response.data;
}
