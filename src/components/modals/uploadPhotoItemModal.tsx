import { useState } from "react";
import postItemCodeItem from "../../postData/postItemCodeImage";
import getter from "../getter/getter";
import setter from "../setter/setter";
import updateItemCodeItem from "../../updateData/updateItemCodeImage";

// sroll to elements
const scrollToElement = (elementId: string) => {
  const element = document.getElementById(`id_${elementId}`);
  if (element) {
    var elementPosition = element.getBoundingClientRect().top + window.scrollY;
    var centerYPosition = elementPosition - window.innerHeight / 2; // Scroll to center of the element
    window.scrollTo({ top: centerYPosition, behavior: "smooth" });
  }
};

// close the modal
const closeModal = () => {
  //close modal here
  const modalElement = document.getElementById("basicModal");
  const backdrops = document.querySelectorAll(".modal-backdrop");
  if (modalElement) {
    modalElement.classList.remove("show", "d-block");
  }
  backdrops.forEach((el) => {
    if (el instanceof HTMLElement) {
      el.classList.remove("modal-backdrop");
    }
  });
};

const grabeImageUploadedAndDisplay = (
  uploadImage: FileList | null,
  itemCode: string | ""
) => {
  // grab the image uploaded
  if (uploadImage) {
    Array.from(uploadImage).forEach((file) => {
      const imgElement = document.getElementById(
        `img_${itemCode}`
      ) as HTMLImageElement;
      if (imgElement) {
        imgElement.src = URL.createObjectURL(file);
      }
    });
  }
};

const UploadPhotoItemModal = ({ imageExist }: { imageExist: any }) => {
  const [uploadImage, setUploadImage] = useState<FileList | null>(null);
  const setItemCode = setter().cSetItemCode;

  const itemCode2 = getter().cItemCode2;

  const handleUploadItemCodeImage = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();

    const uploadItemCodeImageFD: FormData = new FormData();

    uploadItemCodeImageFD.append("itemCode", itemCode2);

    if (uploadImage) {
      Array.from(uploadImage).forEach((file) => {
        uploadItemCodeImageFD.append("image", file);
      });
    }

    // upload/save
    try {
      if (imageExist === undefined) {
        // save
        postItemCodeItem(uploadItemCodeImageFD);
        grabeImageUploadedAndDisplay(uploadImage, itemCode2);
      } else {
        // update
        updateItemCodeItem(uploadItemCodeImageFD, itemCode2);
      }

      closeModal();
      scrollToElement(itemCode2);
    } catch (error) {
      console.error("Error uploading image:", error);
    }

  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "input-itemCode") {
      setItemCode(e.currentTarget.value);
    } else if (e.currentTarget.name === "input-upload") {
      setUploadImage(e.currentTarget.files);
    }
  };

  return (
    <div className="modal fade" id="basicModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Upload Image</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="card">
            <div className="card-body">
              <h5 className="card-title">General Form Elements</h5>

              <form>
                <div className="row mb-3">
                  <label
                    htmlFor="inputText"
                    className="col-sm-2 col-form-label"
                  >
                    Item Code
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleOnChange}
                      name="input-itemCode"
                      value={itemCode2}
                      readOnly={true}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="inputNumber"
                    className="col-sm-2 col-form-label"
                  >
                    File Upload
                  </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      type="file"
                      id="formFile"
                      name="input-upload"
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleUploadItemCodeImage}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotoItemModal;
