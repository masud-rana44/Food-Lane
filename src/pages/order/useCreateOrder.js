import { QueryCache, useMutation } from "@tanstack/react-query";
import { createOrder as createOrderAPI } from "../../api/apiOrder";
import toast from "react-hot-toast";

export function useCreateOrder() {
  const {
    mutate: createOrder,
    isPending,
    error,
  } = useMutation({
    mutationFn: createOrderAPI,
    onSuccess: () => {
      toast.success("Order created successfully");
      QueryCache.invalidateQueries("orders");
    },
  });

  return { createOrder, isPending, error };
}
