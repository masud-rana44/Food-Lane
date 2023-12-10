import { Link } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";

export const TopFoodCard = ({ food }) => {
  const { _id, name, category, price, imageUrl } = food;

  return (
    <div className="group overflow-hidden rounded-md">
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={`Image of ${name}`}
          className="h-[220px] w-full object-cover group-hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="flex flex-col p-4 bg-violet-50 z-10">
        <div className="flex items-center justify-between space-x-4 mb-2">
          <h3 className="text-xl font-medium text-dark-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <span className="font-medium text-dark-3">${price}</span>
        </div>
        <div className="mb-4 flex items-center justify-between text-gray-700">
          <span>{category}</span>
        </div>

        <Link
          to={`/foods/${_id}`}
          className="mx-auto bg-dark-2 text-white py-2 rounded-sm hover:bg-primary transition w-full"
        >
          <button className="w-full flex items-center gap-x-2 justify-center">
            <AiFillEye className="h-4 w-4" /> <span>View Details</span>
          </button>
        </Link>
      </div>
    </div>
  );
};
