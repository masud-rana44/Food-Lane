import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

export const FoodCard = ({ food }) => {
  return (
    <div className="group rounded-md overflow-hidden shadow-md">
      <figure className="overflow-hidden">
        <img
          src={food.imageUrl}
          alt={`Image of ${food.name}`}
          className="h-[240px] w-full object-cover group-hover:scale-110 transition-all"
        />
      </figure>
      <div className="flex flex-col p-4 z-10">
        <div className="flex items-center justify-between space-x-4 mb-2">
          <h3 className="text-xl font-medium text-dark-2">{food.name}</h3>
          <span className="font-medium text-dark-3">${food.price}</span>
        </div>
        <div className="flex items-center justify-between text-dark-3 mb-6">
          <span>{food.category}</span>
          <span>{food.quantity} items</span>
        </div>

        <Link to={`/foods/${food._id}`}>
          <button className="w-full flex items-center gap-x-2">
            <AiFillEye className="h-4 w-4" /> <span>View Details</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
