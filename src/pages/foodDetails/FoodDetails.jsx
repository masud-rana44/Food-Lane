import { useQuery } from "@tanstack/react-query";
import { getFoodById } from "../../api/apiFood";
import { Link, useParams } from "react-router-dom";

const FoodDetails = () => {
  const { id } = useParams();

  const { data: food, isPending } = useQuery({
    queryKey: ["food", "id"],
    queryFn: () => getFoodById(id),
  });

  if (isPending) return <div>Loading...</div>;

  return (
    <div className="group rounded-xl overflow-hidden">
      <figure className="overflow-hidden">
        <img
          src={food.imageUrl}
          alt={`Image of ${food.name}`}
          className="h-[400px] w-full object-cover group-hover:scale-110 transition-all"
        />
      </figure>
      <div className="flex flex-col p-4 bg-violet-50 z-10">
        <h3 className="text-xl font-medium mb-4">{food.name}</h3>
        <div className="flex items-center justify-between text-gray-700">
          <p>Made By: {food.sellerName}</p>
          <span>{food.category}</span>
          <span>{food.quantity} items</span>
          <span>{food.origin}</span>
          <span>${food.price}</span>
        </div>
        <div>{food.description}</div>

        <Link to="/orders/new" state={{ food }}>
          <button className="mt-6 bg-violet-500 hover:bg-violet-600 transition-colors py-2 w-full rounded-md text-white font-medium">
            Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodDetails;
