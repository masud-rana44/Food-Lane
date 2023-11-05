import { useQuery } from "@tanstack/react-query";
import { getFoodByEmail } from "../../api/apiFood";

export function useFoodsByEmail(email) {
  const {
    data: foods,
    isPending,
    error,
  } = useQuery({
    queryKey: ["foods", "email"],
    queryFn: () => getFoodByEmail(email),
  });

  return { foods, isPending, error };
}
