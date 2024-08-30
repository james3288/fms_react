import instance from "../../others/axiosInstance";
import { facilities } from "../typeProps/typeProps";

const LIMIT = 10;

type myProps = {
  data: facilities[];
  currentPage: number;
  nextPage: number | null;
};

export const getListOfFacilities = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<myProps | undefined> => {
  try {
    const response = await instance.get(`/sqlApi/get-listoffacilities/`);

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
    };
  } catch (error) {
    console.error("Error fetching facilities:", error);
    return undefined;
  }
};
