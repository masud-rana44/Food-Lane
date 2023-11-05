import axios from "axios";

export async function getOrders(email) {
  const response = await axios.get(
    `http://localhost:5000/orders?email=${email}`
  );
  return response.data;
}

export async function createOrder(order) {
  const response = await axios.post("http://localhost:5000/orders", order);
  return response.data;
}

export async function deleteOrder(id) {
  const response = await axios.delete(`http://localhost:5000/orders/${id}`);
  return response.data;
}
