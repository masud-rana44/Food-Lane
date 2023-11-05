import { useMutation } from "@tanstack/react-query";
import { createFood as createFoodApi } from "../../api/apiFood";
import toast from "react-hot-toast";

export function useCreateFood() {
  const {
    mutate: createFood,
    isPending,
    error,
  } = useMutation({
    mutationFn: createFoodApi,
    onSuccess: () => {
      toast.success("Food added successfully");
    },
  });

  return { createFood, isPending, error };
}
