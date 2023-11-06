import { useQuery } from "@tanstack/react-query";
import { getTopSellingFood } from "../../api/apiFood";

export function useTopFood() {
  const {
    data: foods,
    isPending,
    error,
  } = useQuery({
    queryKey: ["foods"],
    queryFn: getTopSellingFood,
  });

  return { foods, isPending, error };
}
