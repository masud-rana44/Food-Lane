import { useQuery } from "@tanstack/react-query";
import { getFoodById } from "../../api/apiFood";
import { Link, useParams } from "react-router-dom";
import Button from "../../components/Button";
import { Helmet } from "react-helmet";
import { PageLoader } from "../../components/PageLoader";
import SectionHeading from "../../components/SectionHeading";

const FoodDetails = () => {
  const { id } = useParams();

  const { data: food, isLoading } = useQuery({
    queryKey: ["food", id],
    queryFn: () => getFoodById(id),
  });

  if (isLoading) return <PageLoader />;

  return (
    <div className="group mt-[70px] overflow-hidden">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Lane &mdash; Food Details</title>
      </Helmet>
      <SectionHeading title="Food Details" subtitle="Home/Food" />
      <div className="container mx-auto px-3 md:px-0 flex items-center flex-col md:flex-row gap-8 md:gap-20 mt-16">
        <div className="overflow-hidden flex-1">
          <img
            src={food.imageUrl}
            alt={`Image of ${food.name}`}
            className="h-[400px] w-full object-cover hover:scale-110 transition-all duration-300 rounded-sm"
          />
        </div>
        <div className="flex-1 flex flex-col p-4 text-center md:text-left ">
          <h3 className="text-4xl text-dark-2 font-medium mb-2">{food.name}</h3>
          <p className="text-dark-3 mb-4">{food.description}</p>
          <div className="flex flex-col justify-between mb-6">
            <span className="text-primary text-3xl font-bold mb-1">
              ${food.price}
            </span>
            <p className="font-medium text-dark-3 mb-1">
              <span className="font-medium text-xl ">Seller:</span>{" "}
              {food.sellerName}
            </p>
            <span className="font-medium text-dark-3  mb-1">
              Category: {food.category}
            </span>
            <span className="font-medium text-dark-3  mb-1">
              Available: {food.quantity} items
            </span>
            <span className="font-medium text-dark-3  mb-1">
              Origin: {food.origin}
            </span>
          </div>

          <Link to={`/orders/new/${food._id}`}>
            <Button label="Order Now" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
