import { Link } from "react-router-dom";
import Button from "../../components/Button";

export const FoodCard = ({ food }) => {
  return (
    <div className="group rounded-xl overflow-hidden">
      <figure className="overflow-hidden">
        <img
          src={food.imageUrl}
          alt={`Image of ${food.name}`}
          className="h-[240px] w-full object-cover group-hover:scale-110 transition-all"
        />
      </figure>
      <div className="flex flex-col p-4 bg-violet-50 z-10">
        <h3 className="text-xl font-medium mb-4">{food.name}</h3>
        <div className="flex items-center justify-between text-gray-700">
          <span>{food.category}</span>
          <span>{food.quantity} items</span>
          <span>${food.price}</span>
        </div>

        <Link to={`/foods/${food._id}`}>
          <Button label="Explore" />
        </Link>
      </div>
    </div>
  );
};
