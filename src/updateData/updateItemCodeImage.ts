import instance from "../others/axiosInstance";
const updateItemCodeItem = async (formData: FormData, id: string) => {
  try {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const response = await instance.patch(
      `/api/upload-image/${id}/`,
      formData,
      config
    );

  } catch (error) {
    console.error("Error upload itemcode image:", error);
  }
};

export default updateItemCodeItem;
