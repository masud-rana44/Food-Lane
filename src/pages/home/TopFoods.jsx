import { SectionHeading } from "./SectionHeading";
import { TopFoodCard } from "./TopFoodCard.jsx";
import { useTopFood } from "./useTopFood.js";

export const TopFoods = () => {
  const { foods, isPending } = useTopFood();

  if (isPending) return <div>Loading...</div>;

  return (
    <div className="mt-28 container mx-auto px-3 md:px-0">
      <SectionHeading title="Our Specials Menu" subtitle="Special Menu" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {foods.map((food) => (
          <TopFoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};
