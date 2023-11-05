import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFood as deleteFoodApi } from "../../api/apiFood";
import toast from "react-hot-toast";

export function useDeleteFood() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteFood,
    isPending,
    error,
  } = useMutation({
    mutationFn: deleteFoodApi,
    onSuccess: () => {
      toast.success("Food deleted");
      queryClient.invalidateQueries(["foods", "email"]);
    },
  });

  return { deleteFood, isPending, error };
}
