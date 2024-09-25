
import instance from "../others/axiosInstance";
const postItemCodeItem = async (formData: FormData) => {
  try {
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    const response = await instance.post(
      `/api/upload-image/`,
      formData,
      config
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error upload itemcode image:", error);
  }
};

export default postItemCodeItem;
