import { useState } from "react";
import { FoodCard } from "./FoodCard";
import { SearchBar } from "./SearchBar";
import { Pagination } from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import { getFoods } from "../../api/apiFood";
import { useFoodsCount } from "./useFoodCount";

const Foods = () => {
  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const { totalFoods } = useFoodsCount();
  const { data: foods, isPending } = useQuery({
    queryKey: ["foods", currentPage, pageSize],
    queryFn: () => getFoods(currentPage, pageSize),
  });

  if (isPending) return <div>Loading...</div>;

  const totalPages = Math.ceil((totalFoods?.count || 10) / pageSize);

  return (
    <div className="mt-14 container mx-auto">
      <SearchBar />
      <div className="grid grid-cols-4 gap-6">
        {foods.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(newPage) => setCurrentPage(newPage)}
      />
    </div>
  );
};

export default Foods;
