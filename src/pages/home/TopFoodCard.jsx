import { Link } from "react-router-dom";

export const TopFoodCard = ({ food }) => {
  const { _id, name, category, price, imageUrl } = food;

  return (
    <div className="group overflow-hidden">
      <figure className="overflow-hidden">
        <img
          src={imageUrl}
          alt={`Image of ${name}`}
          className="h-[240px] w-full object-cover group-hover:scale-110 transition-all"
        />
      </figure>
      <div className="flex flex-col p-4 bg-violet-50 z-10">
        <h3 className="text-xl font-medium mb-4">{name}</h3>
        <div className="flex items-center justify-between text-gray-700">
          <span>{category}</span>
          <span>${price}</span>
        </div>

        <Link to={`/foods/${_id}`}>
          <button className="mt-6 bg-primary hover:opacity-75 transition-colors py-2 w-full rounded-md text-white font-medium">
            Explore
          </button>
        </Link>
      </div>
    </div>
  );
};
