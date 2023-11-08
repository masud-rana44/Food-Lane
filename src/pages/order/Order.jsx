import { Link, useParams } from "react-router-dom";

import { OrderCart } from "./OrderCart";
import { OrderForm } from "./OrderForm";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { getFoodById } from "../../api/apiFood";
import { ErrorMessage } from "../../components/ErrorMessage";
import { PageLoader } from "../../components/PageLoader";
import Button from "../../components/Button";

const Order = () => {
  const { id } = useParams();

  const {
    data: food,
    isPending,
    error,
  } = useQuery({
    queryKey: ["food", "id"],
    queryFn: () => getFoodById(id),
  });

  if (isPending) return <PageLoader />;
  if (error)
    return (
      <div className="mt-20">
        <ErrorMessage message={error?.message} />
      </div>
    );

  if (food.quantity === 0)
    return (
      <div className="my-28 flex flex-col text-center mx-auto">
        <ErrorMessage message="Out of stock" className="text-red-500 mb-4">
          Out of stock
        </ErrorMessage>
        <Link to="/foods" className="mt-6">
          <Button label="Go to Foods"></Button>
        </Link>
      </div>
    );

  return (
    <div className="container mx-auto px-3 md:px-0 mt-28 flex gap-10 md:gap-20">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Food Lane &mdash; Checkout</title>
      </Helmet>
      <OrderForm food={food} />
      <OrderCart food={food} />
    </div>
  );
};

export default Order;
