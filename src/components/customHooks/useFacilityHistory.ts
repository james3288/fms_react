import { useQuery } from "@tanstack/react-query";
import { getListOfFacilityHistory } from "../get/getListOfFacilityHistory";

const useFacilityHistory = (itemCode: string, item_name: string) => {
  const {
    data: facilityHistory,
    status,
    error,
  } = useQuery({
    queryKey: ["facilityHistory", itemCode, item_name],
    queryFn: async () => {
      return await getListOfFacilityHistory(itemCode, item_name);
    },
  });

  return { facilityHistory, status, error };
};

export default useFacilityHistory;
