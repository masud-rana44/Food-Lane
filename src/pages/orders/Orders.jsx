import { Helmet } from "react-helmet";
import { ConfirmDialog } from "../../components/ConfirmDialog";
import { EmptyMessage } from "../../components/EmptyMessage";
import { useDeleteOrder } from "./useDeleteOrder";
import { useOrders } from "./useOrders";
import { BsTrash } from "react-icons/bs";

const Orders = () => {
  const { orders, isPending } = useOrders();
  const { deleteOrder } = useDeleteOrder();

  if (isPending) return <div>Loading...</div>;

  if (orders.length === 0)
    return (
      <div className="mt-28">
        <EmptyMessage message="You haven't any order yet." />
      </div>
    );

  return (
    <div className="container max-w-5xl mx-auto px-3 md:px-0 mt-20 p-8 space-y-2 ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Lane &mdash; My Orders</title>
      </Helmet>
      {orders.map((order) => (
        <div
          key={order._id}
          className="w-full flex items-center justify-between space-x-8"
        >
          <img
            src={order.imageUrl}
            alt={order.name}
            className="h-16 w-20 rounded-sm"
          />
          <div>
            <h3 className="text-lg font-medium mb-1 text-dark-2">
              {order.name}
            </h3>
            <div className="space-x-2 text-dark-3">
              <span>{order.quantity} items</span>
              <span>${order.price}</span>
            </div>
          </div>
          <ConfirmDialog onDelete={() => deleteOrder(order._id)}>
            <button className="text-red-500 ml-auto">
              <BsTrash />
            </button>
          </ConfirmDialog>
        </div>
      ))}
    </div>
  );
};

export default Orders;
