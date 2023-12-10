import { useState } from "react";
import { FoodCard } from "./FoodCard";
import { SearchBar } from "./SearchBar";
import { Pagination } from "./Pagination";
import { useQuery } from "@tanstack/react-query";
import { getFoods } from "../../api/apiFood";
import { useFoodsCount } from "./useFoodCount";
import { EmptyMessage } from "../../components/EmptyMessage";
import { Helmet } from "react-helmet";
import { PageLoader } from "../../components/PageLoader";

const Foods = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [value, setValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const { totalFoods } = useFoodsCount();
  const { data: foods, isPending } = useQuery({
    queryKey: ["foods", currentPage, pageSize],
    queryFn: () => getFoods(currentPage, pageSize),
  });

  if (isPending) return <PageLoader />;

  const totalPages = Math.ceil((totalFoods?.count || 10) / pageSize);

  const handleSearch = () => {
    const results = foods.filter((food) =>
      food.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(results);
  };

  const data = value ? searchResults : foods;

  return (
    <div className="mt-28 container mx-auto px-3 md:px-0">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Lane &mdash; Foods</title>
      </Helmet>
      <SearchBar value={value} setValue={setValue} onSearch={handleSearch} />
      {data.length === 0 && (
        <div className="mt-20 mb-[30vh]">
          <EmptyMessage message="Food not found" />
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(newPage) => {
          setCurrentPage(newPage);
          setValue("");
        }}
      />
    </div>
  );
};

export default Foods;
