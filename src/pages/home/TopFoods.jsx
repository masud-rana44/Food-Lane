import { SectionHeading } from "./SectionHeading";
import { TopFoodCard } from "./TopFoodCard.jsx";
import { useTopFood } from "./useTopFood.js";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader.jsx";
import { ErrorMessage } from "../../components/ErrorMessage.jsx";

export const TopFoods = () => {
  const { foods, isPending, error } = useTopFood();

  if (isPending) return <Loader />;
  if (error)
    return (
      <div className="mt-20">
        <ErrorMessage message={error?.message} />
      </div>
    );

  return (
    <div className="mt-28 container mx-auto px-3 md:px-0">
      <SectionHeading title="Our Top Foods" subtitle="Top Foods" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {foods.map((food) => (
          <TopFoodCard key={food._id} food={food} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link to="/foods">
          <Button label="See All" />
        </Link>
      </div>
    </div>
  );
};
