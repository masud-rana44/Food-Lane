import axios from "axios";

export async function createOrder(order) {
  const response = await axios.post("http://localhost:5000/orders", order);
  return response.data;
}
