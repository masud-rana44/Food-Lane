import { ImageUpload } from "../../components/ImageUpload";
import { FormInput } from "../../components/FormInput";
import { FormTextarea } from "../../components/FormTextarea";
import { useAuth } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { useState } from "react";
import Button from "../../components/Button";
import { useLocation } from "react-router-dom";
import { useUpdateFood } from "./useUpdateFood";

const FoodUpdateForm = () => {
  const {
    state: { food },
  } = useLocation();
  const { user } = useAuth();
  const [imageUrl, setImageUrl] = useState(food.imageUrl);
  const { updateFood, isPending } = useUpdateFood();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const description = form.description.value;
    const category = form.category.value;
    const origin = form.origin.value;
    const price = Number(form.price.value);
    const quantity = Number(form.quantity.value);
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;

    if (
      !name ||
      !description ||
      !category ||
      !origin ||
      !price ||
      !quantity ||
      !sellerName ||
      !sellerEmail ||
      !imageUrl
    ) {
      return toast.error("Please fill all the fields");
    }

    updateFood({
      ...food,
      name,
      description,
      category,
      origin,
      price,
      quantity,
      sellerName,
      sellerEmail,
      imageUrl,
      orderCount: 0,
    });
    form.reset();
  };

  return (
    <div className="my-28 container mx-auto">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-4">
        <ImageUpload url={imageUrl} setUrl={setImageUrl} />
        <FormInput defaultValue={food?.name} id="name" label="Food Name" />
        <FormTextarea
          defaultValue={food?.description}
          id="description"
          label="Food Description"
        />
        <FormInput
          defaultValue={food?.category}
          id="category"
          label="Food Category"
        />
        <FormInput
          defaultValue={food?.origin}
          id="origin"
          label="Food Origin"
        />
        <FormInput
          defaultValue={food?.price}
          id="price"
          label="Price"
          type="number"
          step="any"
        />
        <FormInput
          defaultValue={food?.quantity}
          id="quantity"
          label="Quantity"
          type="number"
          step="any"
        />

        <FormInput
          id="sellerName"
          label="User Name"
          readOnly
          defaultValue={user?.displayName}
        />
        <FormInput
          id="sellerEmail"
          label="Seller Email"
          defaultValue={user?.email}
          readOnly
        />

        <Button type="submit" label="Update Food" />
      </form>
    </div>
  );
};

export default FoodUpdateForm;
