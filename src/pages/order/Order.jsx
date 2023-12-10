import { Link, useParams } from "react-router-dom";

import { OrderCart } from "./OrderCart";
import { OrderForm } from "./OrderForm";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { getFoodById } from "../../api/apiFood";
import { ErrorMessage } from "../../components/ErrorMessage";
import { PageLoader } from "../../components/PageLoader";
import Button from "../../components/Button";
import { useState } from "react";
import SectionHeading from "../../components/SectionHeading";

const Order = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const {
    data: food,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["food", id],
    queryFn: () => getFoodById(id),
  });

  if (isLoading) return <PageLoader />;
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
    <div className="mt-[70px]">
      <SectionHeading title="Order Food" subtitle="Home/Order" />
      <div className="container mx-auto px-3 md:px-0 mt-10 flex gap-10 md:gap-20">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Food Lane &mdash; Checkout</title>
        </Helmet>
        <OrderForm food={food} quantity={quantity} setQuantity={setQuantity} />
        <OrderCart food={food} quantity={quantity} />
      </div>
    </div>
  );
};

export default Order;
