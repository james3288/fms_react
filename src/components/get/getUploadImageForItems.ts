import instance from "../../others/axiosInstance";
import { uploadImageForItemCodeType } from "../typeProps/typeProps";

type myProps = {
  listOfUploadedImages: uploadImageForItemCodeType[];
};
const getUploadImageForItems = async (): Promise<myProps | undefined> => {
  try {
    const response = await instance.get(`/api/upload-image/`);

    console.log(response.data);
    const _listOfUploadedImages: uploadImageForItemCodeType[] =
      (await response.data) || [];

    const newListOfUploadedImages: uploadImageForItemCodeType[] =
      await Promise.all(
        _listOfUploadedImages.map(async (item: uploadImageForItemCodeType) => {
          return {
            ...item,
          };
        })
      );

    return { listOfUploadedImages: newListOfUploadedImages };
  } catch (error) {
    console.error("Error upload itemcode image:", error);
  }
};

export default getUploadImageForItems;
