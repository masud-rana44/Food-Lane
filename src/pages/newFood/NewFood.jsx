import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { ImageUpload } from "../../components/ImageUpload";
import toast from "react-hot-toast";
import { useCreateFood } from "./useCreateFood";

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
    <div className="mt-10">
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto space-y-2">
        <ImageUpload url={imageUrl} setUrl={setImageUrl} />
        <div className="space-x-4">
          <label htmlFor="name" className="w-52">
            Food Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="py-2 px-4 bg-violet-200 border-violet-500"
          />
        </div>
        <div className="space-x-4">
          <label htmlFor="description" className="w-52">
            Food Description
          </label>
          <textarea
            id="description"
            name="description"
            className="py-2 px-4 bg-violet-200 border-violet-500"
          />
        </div>
        <div className="space-x-4">
          <label htmlFor="category" className="w-52">
            Food Category
          </label>
          <input
            id="category"
            name="category"
            type="text"
            className="py-2 px-4 bg-violet-200 border-violet-500"
          />
        </div>
        <div className="space-x-4">
          <label htmlFor="origin" className="w-52">
            Food Origin
          </label>
          <input
            id="origin"
            name="origin"
            type="text"
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
            className="py-2 px-4 bg-violet-200 border-violet-500"
          />
        </div>

        <div className="space-x-4">
          <label htmlFor="buyerName" className="w-52">
            User Name
          </label>
          <input
            id="buyerName"
            name="buyerName"
            type="text"
            value={user?.displayName}
            readOnly
            className="py-2 px-4 bg-violet-200 border-violet-500"
          />
        </div>
        <div className="space-x-4">
          <label htmlFor="buyerEmail" className="w-52">
            User Email
          </label>
          <input
            id="buyerEmail"
            name="buyerEmail"
            type="email"
            value={user?.email}
            readOnly
            className="py-2 px-4 bg-violet-200 border-violet-500"
          />
        </div>
        <button
          disabled={isPending}
          className="bg-violet-500 hover:bg-violet-600 transition-colors py-2 px-4 rounded-md text-white font-medium"
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default NewFood;
