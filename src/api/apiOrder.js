import axios from "axios";

export async function getOrders(email) {
  const response = await axios.get(
    `https://resturent-server.vercel.app/orders?email=${email}`
  );
  return response.data;
}

export async function createOrder(order) {
  const response = await axios.post(
    "https://resturent-server.vercel.app/orders",
    order
  );
  return response.data;
}

export async function deleteOrder(id) {
  const response = await axios.delete(
    `https://resturent-server.vercel.app/orders/${id}`
  );
  return response.data;
}
