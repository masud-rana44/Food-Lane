import { useMutation } from "@tanstack/react-query";
import { createFood as createFoodApi } from "../../api/apiFood";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCreateFood() {
  const navigate = useNavigate();

  const {
    mutate: createFood,
    isPending,
    error,
  } = useMutation({
    mutationFn: createFoodApi,
    onSuccess: () => {
      toast.success("Food added successfully");
      navigate("/foods/users");
    },
  });

  return { createFood, isPending, error };
}
