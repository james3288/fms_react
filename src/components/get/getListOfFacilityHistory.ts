import instance from "../../others/axiosInstance";
import { facilityHistory } from "../typeProps/typeProps";

type myProps = {
  data: facilityHistory[];
};

export const getListOfFacilityHistory = async (
  item_code: string,
  item_name: string
): Promise<myProps | undefined> => {
  try {
    const response = await instance.get(
      `/sqlApi/get-listoffacilityhistory/?item_code=${item_code}&item_name=${item_name}`
    );

    // Assuming response.data contains an object with the facilities array
    const listOfFacilityHistory: facilityHistory[] =
      (await response.data.facilityHistory) || [];

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
