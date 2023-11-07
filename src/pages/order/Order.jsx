import { useLocation } from "react-router-dom";

import { OrderCart } from "./OrderCart";
import { OrderForm } from "./OrderForm";

const Order = () => {
  const {
    state: { food },
  } = useLocation();

  return (
    <div className="container mx-auto px-3 md:px-0 mt-28 flex gap-10 md:gap-20">
      <OrderForm food={food} />
      <OrderCart food={food} />
    </div>
  );
};

export default Order;
