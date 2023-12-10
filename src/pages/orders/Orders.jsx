import { Helmet } from "react-helmet";
import { ConfirmDialog } from "../../components/ConfirmDialog";
import { EmptyMessage } from "../../components/EmptyMessage";
import { useDeleteOrder } from "./useDeleteOrder";
import { useOrders } from "./useOrders";
import { BsTrash } from "react-icons/bs";
import { PageLoader } from "../../components/PageLoader";
import SectionHeading from "../../components/SectionHeading";

const Orders = () => {
  const { orders, isPending } = useOrders();
  const { deleteOrder } = useDeleteOrder();

  if (isPending) return <PageLoader />;

  if (orders?.length === 0)
    return (
      <div className="mt-28">
        <EmptyMessage message="You haven't any order yet." />
      </div>
    );

  return (
    <div className="mt-[70px]">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Lane &mdash; My Orders</title>
      </Helmet>
      <SectionHeading title="My Orders" subtitle="Home/Orders" />
      <div className="container max-w-xl mx-auto px-3 md:px-0 divide-y mt-10">
        {orders?.map((order) => (
          <div
            key={order._id}
            className="w-full flex items-center py-2 space-x-8 "
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
            <div className="flex-1 text-right">
              <ConfirmDialog onDelete={() => deleteOrder(order._id)}>
                <button className=" ml-auto bg-primary p-3 rounded-sm text-white hover:bg-dark-1 transition duration-300">
                  <BsTrash />
                </button>
              </ConfirmDialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
