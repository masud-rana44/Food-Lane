import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { ImageUpload } from "../../components/ImageUpload";
import toast from "react-hot-toast";
import { useCreateFood } from "./useCreateFood";
import { FormInput } from "../../components/FormInput";
import Button from "../../components/Button";
import { FormTextarea } from "../../components/FormTextarea";
import { Helmet } from "react-helmet";

const NewFood = () => {
  const { user } = useAuth();
  const [imageUrl, setImageUrl] = useState(null);
  const { createFood, isPending } = useCreateFood();

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

    createFood({
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
    <div className="mt-28">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Lane &mdash; Add New Food</title>
      </Helmet>
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-4">
        <ImageUpload url={imageUrl} setUrl={setImageUrl} />
        <FormInput id="name" label="Food Name" />
        <FormTextarea id="description" label="Food Description" />
        <FormInput id="category" label="Food Category" />
        <FormInput id="origin" label="Food Origin" />
        <FormInput id="price" label="Price" type="number" step="any" />
        <FormInput id="quantity" label="Quantity" type="number" step="any" />

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

        <Button type="submit" disabled={isPending} label="Add Food" />
      </form>
    </div>
  );
};

export default NewFood;
