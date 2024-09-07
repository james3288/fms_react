import instance from "../../others/axiosInstance";
import getter from "../getter/getter";
import Facilities from "../main/facilities/Facilities";
import { facilities } from "../typeProps/typeProps";

const LIMIT = 10;

type myProps = {
  data: facilities[];
  currentPage: number;
  nextPage: number | null;
  noOfFacilities: number | 0;
};

export const getListOfFacilities = async ({
  pageParam,
  search,
}: {
  pageParam: number;
  search: string;
}): Promise<myProps | undefined> => {
  try {
    const response = await instance.get(
      `/sqlApi/get-listoffacilities/?search=${search || ""}`
    );

    // Assuming response.data contains an object with the facilities array
    const listOfFacilities: facilities[] = response.data.facilities || [];

    const newListOfFacilities: facilities[] = await Promise.all(
      listOfFacilities.map(async (item: facilities) => {
        // You can perform async operations here if needed
        return {
          ...item,
        };
      })
    );

    return {
      data: newListOfFacilities.slice(pageParam, pageParam + LIMIT),
      currentPage: pageParam,
      nextPage:
        pageParam + LIMIT < newListOfFacilities.length
          ? pageParam + LIMIT
          : null,
      noOfFacilities: newListOfFacilities.length,
    };
  } catch (error) {
    console.error("Error fetching facilities:", error);
    return undefined;
  }
};
