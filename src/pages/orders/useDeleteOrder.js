import { toast } from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrder as deleteOrderApi } from "../../api/apiOrder";

export function useDeleteOrder() {
  const queryClient = useQueryClient();

  const {
    mutate: deleteOrder,
    isPending,
    error,
  } = useMutation({
    mutationFn: deleteOrderApi,
    onSuccess: () => {
      toast.success("Order deleted");
      queryClient.invalidateQueries("orders");
    },
  });

  return { deleteOrder, isPending, error };
}
