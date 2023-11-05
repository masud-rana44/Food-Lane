import { useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useCreateOrder } from "./useCreateOrder";

const Order = () => {
  const { state } = useLocation();
  const { food } = state;
  const { createOrder, isPending } = useCreateOrder();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const foodId = food._id;
    const name = form.name.value;
    const imageUrl = food.imageUrl;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const buyingDate = new Date().toISOString();

    if (quantity > food.quantity) {
      return toast.error("You can't buy more than available quantity");
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
            value="Masud"
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
            value="mdmasud@gamil.com"
            readOnly
            className="py-2 px-4 bg-violet-200 border-violet-500"
          />
        </div>
        <button className="bg-violet-500 hover:bg-violet-600 transition-colors py-2 px-4 rounded-md text-white font-medium">
          Purchase
        </button>
      </form>
    </div>
  );
};

export default Order;
