import { useQuery } from "@tanstack/react-query";
import { getDistinctListOfFacilityHistory } from "../get/getDistinctListOfFacilityHistory";

const useDistinctFacilityHistory = (itemCode: string) => {
  const {
    data: distinctFacilityHistory,
    status,
    error,
  } = useQuery({
    queryKey: ["distinctFacilityHistory", itemCode],
    queryFn: async () => await getDistinctListOfFacilityHistory(itemCode || ""),
  });

  return { distinctFacilityHistory, status, error };
};

export default useDistinctFacilityHistory;
