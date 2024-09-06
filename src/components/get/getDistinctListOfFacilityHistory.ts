import instance from "../../others/axiosInstance";
import { distinctFacilityHistory } from "../typeProps/typeProps";

type myProps = {
  distinctFH: distinctFacilityHistory[];
};

export const getDistinctListOfFacilityHistory = async (
  item_code: string
): Promise<myProps | undefined> => {
  try {
    const response = await instance.get(
      `/sqlApi/get-distinctlistoffacilityhistory/?item_code=${item_code}`
    );

    // Assuming response.data contains an object with the facilities array
    const _distinctFH: distinctFacilityHistory[] =
      (await response.data.facilityHistory) || [];

    const newDistinctFH: distinctFacilityHistory[] = await Promise.all(
      _distinctFH.map(async (item: distinctFacilityHistory) => {
        // You can perform async operations here if needed
        return {
          ...item,
        };
      })
    );

    return {
      distinctFH: newDistinctFH,
    };
  } catch (error) {
    console.error("Error fetching facilityHistory:", error);
    return undefined;
  }
};
