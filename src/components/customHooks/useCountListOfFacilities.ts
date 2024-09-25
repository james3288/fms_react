import { useQuery } from "@tanstack/react-query";
import { getCountListOfFacilities } from "../get/getCountListOfFacilities";
import { ItemStatusId } from "../enum/itemStatusEnum";

const useCountListOfFacilities = (n: number) => {
  const {
    data: countListOfFc,
    status,
    error,
  } = useQuery({
    queryKey: ["countListOfFacilities", ""],
    queryFn: async () => await getCountListOfFacilities(n),
  });

  const borrowed: number =
    countListOfFc?.data.filter(
      (x) => x.status_served_id === ItemStatusId.Served
    ).length ?? 0;

  const vacant: number =
    countListOfFc?.data.filter(
      (x) => x.status_served_id === ItemStatusId.Vacant
    ).length ?? 0;

  const disposed: number =
    countListOfFc?.data.filter(
      (x) => x.status_served_id === ItemStatusId.Disposed
    ).length ?? 0;

  const forDisposal: number =
    countListOfFc?.data.filter(
      (x) => x.status_served_id === ItemStatusId.ForDisposal
    ).length ?? 0;

  const lowSpecs: number =
    countListOfFc?.data.filter(
      (x) => x.status_served_id === ItemStatusId.LowSpecs
    ).length ?? 0;

  const lostItems: number =
    countListOfFc?.data.filter(
      (x) => x.status_served_id === ItemStatusId.LostItem
    ).length ?? 0;

  return {
    borrowed,
    vacant,
    disposed,
    forDisposal,
    lowSpecs,
    lostItems,
    status,
    error,
    countListOfFc,
  };
};

export default useCountListOfFacilities;
