import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useCreateOrder } from "./useCreateOrder";
import { useAuth } from "../../contexts/AuthContext";

const Order = () => {
  const {
    state: { food },
  } = useLocation();
  const { user } = useAuth();

  const { createOrder, isPending } = useCreateOrder();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const foodId = food._id;
    const name = form.name.value;
    const imageUrl = food.imageUrl;
    const price = Number(form.price.value);
    const quantity = Number(form.quantity.value);
    const buyerName = user.displayName;
    const buyerEmail = user.email;
    const buyingDate = new Date().toISOString();

    if (food.sellerEmail === buyerEmail) {
      return toast.error("You can't buy your own food");
    }

    if (quantity > food.quantity) {
      return toast.error("You can't buy more than available quantity");
    }

    if (!name || !price || !quantity) {
      return toast.error("Please fill all the fields");
    }

    createOrder({
      foodId,
      name,
      imageUrl,
      price,
      quantity,
      buyerName,
      buyerEmail,
      buyingDate,
    });
  };

  return (
    <div className="mt-10">
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-2">
        <div className="space-x-4">
          <label htmlFor="name" className="w-52">
            Food Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue={food.name}
            className="py-2 px-4 bg-violet-200 border-violet-500"
          />
        </div>
        <div className="space-x-4">
          <label htmlFor="price" className="w-52">
            Price
          </label>
          <input
            id="price"
            name="price"
            type="number"
            step="any"
            defaultValue={food.price}
            className="py-2 px-4 bg-violet-200 border-violet-500"
          />
        </div>
        <div className="space-x-4">
          <label htmlFor="quantity" className="w-52">
            Quantity
          </label>
          <input
            id="quantity"
            name="quantity"
            type="number"
            step="any"
            defaultValue={1}
            className="py-2 px-4 bg-violet-200 border-violet-500"
          />
        </div>
        <div className="space-x-4">
          <label htmlFor="buyerName" className="w-52">
            Buyer Name
          </label>
          <input
            id="buyerName"
            name="buyerName"
            type="text"
            value={user.displayName}
            readOnly
            className="py-2 px-4 bg-violet-200 border-violet-500"
          />
        </div>
        <div className="space-x-4">
          <label htmlFor="buyerEmail" className="w-52">
            Buyer Email
          </label>
          <input
            id="buyerEmail"
            name="buyerEmail"
            type="email"
            value={user.email}
            readOnly
            className="py-2 px-4 bg-violet-200 border-violet-500"
          />
        </div>
        <button
          disabled={isPending}
          className="bg-violet-500 hover:bg-violet-600 transition-colors py-2 px-4 rounded-md text-white font-medium"
        >
          Purchase
        </button>
      </form>
    </div>
  );
};

export default Order;
