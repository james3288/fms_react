import { useQuery } from "@tanstack/react-query";
import getUploadImageForItems from "../get/getUploadImageForItems";

const useUploadedImagesForItemCode = () => {
  const {
    data: uploadedImagesFormItemCode,
    status,
    error,
  } = useQuery({
    queryKey: ["ItemCodeImages"],
    queryFn: async () => {
      return await getUploadImageForItems();
    },
  });

  return { uploadedImagesFormItemCode, status, error };
};

export default useUploadedImagesForItemCode;
