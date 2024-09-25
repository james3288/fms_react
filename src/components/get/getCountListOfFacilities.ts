import instance from "../../others/axiosInstance";
import { facilityHistory } from "../typeProps/typeProps";

type myProps = {
  data: facilityHistory[];
};

export const getCountListOfFacilities = async (
  n: number
): Promise<myProps | undefined> => {
  try {
    const response = await instance.get(
      `/sqlApi/get-countListOfFacilities/?n=${n}`
    );

    // Assuming response.data contains an object with the facilities array
    const listOfFacilityHistory: facilityHistory[] =
      (await response.data.facilities) || [];

    const newListOfFacilityHistory: facilityHistory[] = await Promise.all(
      listOfFacilityHistory.map(async (item: facilityHistory) => {
        // You can perform async operations here if needed
        return {
          ...item,
        };
      })
    );

    return {
      data: newListOfFacilityHistory,
    };
  } catch (error) {
    console.error("Error fetching facilityHistory:", error);
    return undefined;
  }
};
