import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateFood as updateFoodApi } from "../../api/apiFood";
import { useNavigate } from "react-router-dom";

export function useUpdateFood() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: updateFood,
    isPending,
    error,
  } = useMutation({
    mutationFn: updateFoodApi,
    onSuccess: () => {
      toast.success("Food updated successfully.");
      queryClient.invalidateQueries(["foods", "email"]);
      navigate("/foods/users");
    },
  });

  return { updateFood, isPending, error };
}
