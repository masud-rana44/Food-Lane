import { useDeleteOrder } from "./useDeleteOrder";
import { useOrders } from "./useOrders";

const Orders = () => {
  const { orders, isPending } = useOrders();
  const { deleteOrder } = useDeleteOrder();

  if (isPending) return <div>Loading...</div>;

  return (
    <div className="p-8 space-y-2">
      {orders.map((order) => (
        <div key={order._id} className="flex space-x-8">
          <img
            src={order.imageUrl}
            alt={order.name}
            className="h-20 w-20 rounded-sm"
          />
          <div>
            <h3 className="text-lg font-medium">{order.name}</h3>
            <div className="space-x-2">
              <span>{order.quantity} items</span>
              <span>${order.price}</span>
            </div>
          </div>
          <button
            onClick={() => deleteOrder(order._id)}
            className="text-red-500"
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Orders;
