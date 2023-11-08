import axios from "axios";

export async function getFoods(currentPage, pageSize) {
  const response = await axios.get(
    `https://resturent-server.vercel.app/foods?page=${currentPage}&size=${pageSize}`,
    { withCredentials: true }
  );
  return response.data;
}

export async function getFoodById(id) {
  const response = await axios.get(
    `https://resturent-server.vercel.app/foods/${id}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
}

export async function getFoodByEmail(email) {
  const response = await axios.get(
    `https://resturent-server.vercel.app/foods/user/${email}`,
    { withCredentials: true }
  );
  return response.data;
}

export async function getTopSellingFood() {
  try {
    const response = await axios.get(
      "https://resturent-server.vercel.app/top/foods",
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Top foods could not be loaded.");
  }
}

export async function getFoodCount() {
  const response = await axios.get(
    "https://resturent-server.vercel.app/count/foods",
    {
      withCredentials: true,
    }
  );
  return response.data;
}

export async function createFood(food) {
  const response = await axios.post(
    "https://resturent-server.vercel.app/foods",
    food,
    {
      withCredentials: true,
    }
  );
  return response.data;
}

export async function updateFood(food) {
  const response = axios.patch(
    `https://resturent-server.vercel.app/foods/${food._id}`,
    food,
    { withCredentials: true }
  );
  return response.data;
}

export async function deleteFood(id) {
  const response = await axios.delete(
    `https://resturent-server.vercel.app/foods/${id}`,
    {
      withCredentials: true,
    }
  );
  return response.data;
}
