import axios from "axios";

export async function getFoods(currentPage, pageSize) {
  const response = await axios.get(
    `http://localhost:5000/foods?page=${currentPage}&size=${pageSize}`
  );
  return response.data;
}
