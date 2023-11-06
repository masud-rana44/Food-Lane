import { useQuery } from "@tanstack/react-query";
import { getFoodCount } from "../../api/apiFood";

export function useFoodsCount() {
  const { data: totalFoods } = useQuery({
    queryKey: ["foods", "count"],
    queryFn: getFoodCount,
  });

  return { totalFoods };
}
