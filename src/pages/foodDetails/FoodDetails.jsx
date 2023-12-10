import { useQuery } from "@tanstack/react-query";
import { getFoodById } from "../../api/apiFood";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { Helmet } from "react-helmet";
import { PageLoader } from "../../components/PageLoader";

const FoodDetails = () => {
  const { id } = useParams();

  const { data: food, isLoading } = useQuery({
    queryKey: ["food", id],
    queryFn: () => getFoodById(id),
  });

  if (isLoading) return <PageLoader />;

  return (
    <div className="group mt-28  rounded-xl overflow-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Lane &mdash; Food Details</title>
      </Helmet>
      <div className="container mx-auto px-3 md:px-0 flex items-center flex-col md:flex-row gap-10 md:gap-20">
        <div className="overflow-hidden flex-1">
          <img
            src={food.imageUrl}
            alt={`Image of ${food.name}`}
            className="h-[400px] w-full object-cover group-hover:scale-110 transition-all"
          />
        </div>
        <div className="flex-1 flex flex-col p-4 text-center md:text-left">
          <h3 className="text-4xl text-dark-2 font-medium mb-4">{food.name}</h3>
          <div className="flex flex-col justify-between text-gray-700">
            <span>Price: ${food.price}</span>
            <p>Made By: {food.sellerName}</p>
            <span>Category: {food.category}</span>
            <span>Available: {food.quantity} items</span>
            <span>Origin: {food.origin}</span>
          </div>
          <p className="text-dark-3 mb-6">{food.description}</p>

          <Link to={`/orders/new/${food._id}`}>
            <Button label="Order Now" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
