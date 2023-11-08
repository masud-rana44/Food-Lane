import { toast } from "react-hot-toast";

import { useAuth } from "../../contexts/AuthContext";
import Button from "../../components/Button";
import { useCreateOrder } from "./useCreateOrder";
import { FormInput } from "../../components/FormInput";

export const OrderForm = ({ food }) => {
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
      return toast.error(`${quantity} items are not available`);
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
    <form onSubmit={handleSubmit} className="flex-1 space-y-4">
      <FormInput id="name" label="Food Name" defaultValue={food.name} />
      <FormInput
        id="price"
        label="Price"
        type="number"
        step="any"
        defaultValue={food.price}
      />
      <FormInput
        id="quantity"
        label="Quantity"
        type="number"
        defaultValue={1}
      />
      <FormInput
        id="buyerName"
        label="Buyer Name"
        readOnly
        defaultValue={user.displayName}
      />
      <FormInput
        id="buyerEmail"
        label="Buyer Email"
        defaultValue={user.email}
        readOnly
      />

      {food.quantity > 0 && <Button disabled={isPending} label="Place order" />}
    </form>
  );
};
