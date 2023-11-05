import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../api/apiOrder";
import { useAuth } from "../../contexts/AuthContext";

export function useOrders() {
  const { user } = useAuth();

  const {
    data: orders,
    isPending,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(user.email),
  });

  return { orders, isPending, error };
}
