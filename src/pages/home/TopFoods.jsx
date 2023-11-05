import { SectionHeading } from "./SectionHeading";
import { useFoods } from "../../hooks/useFoods.js";

export const TopFoods = () => {
  const { foods, isPending, error } = useFoods();

  if (isPending) return <div>Loading...</div>;

  return (
    <div className="mt-28 container mx-auto">
      <SectionHeading title="Top Foods" />
      <div className="grid grid-cols-4 gap-6">
        {foods.map((food) => (
          <div key={food._id} className="group rounded-xl overflow-hidden">
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
                <span>${food.price}</span>
              </div>

              <button className="mt-6 bg-violet-500 hover:bg-violet-600 transition-colors py-2 w-full rounded-md text-white font-medium">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
