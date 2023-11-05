import { useQuery } from "@tanstack/react-query";
import { getFoods } from "../api/apiFood";

export function useFoods() {
  const {
    data: foods,
    isPending,
    error,
  } = useQuery({
    queryKey: ["foods"],

    // get the top rated foods
    queryFn: () => [],
  });

  return { foods, isPending, error };
}
