import axios from "axios";

export async function getFoods(currentPage, pageSize) {
  const response = await axios.get(
    `http://localhost:5000/foods?page=${currentPage}&size=${pageSize}`
  );
  return response.data;
}

export async function getFoodById(id) {
  const response = await axios.get(`http://localhost:5000/foods/${id}`);
  return response.data;
}

export async function createFood(food) {
  const response = await axios.post("http://localhost:5000/foods", food);
  return response.data;
}
