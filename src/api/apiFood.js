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

export async function getFoodByEmail(email) {
  const response = await axios.get(
    `http://localhost:5000/foods/${email}`
  );
  return response.data;
}

export async function createFood(food) {
  const response = await axios.post("http://localhost:5000/foods", food);
  return response.data;
}

export async function updateFood(food) {
  const response = axios.patch(`http://localhost:5000/foods/${food.id}`, food);
  return response.data;
}

export async function deleteFood(id) {
  const response = await axios.delete(`http://localhost:5000/foods/${id}`);
  return response.data;
}
