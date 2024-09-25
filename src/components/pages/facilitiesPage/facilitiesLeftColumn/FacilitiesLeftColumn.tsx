import { useEffect, useState } from "react";
import useUploadedImagesForItemCode from "../../../customHooks/useItemCodeImages";
import UploadPhotoItemModal from "../../../modals/uploadPhotoItemModal";
import coming_soon from "./../../../../assets/img/coming_soon.jpg";
import "./facilitiesLeftColumn.scss";
import setter from "../../../setter/setter";

type facilitiesLeftColumnProps = {
  page: string;
  item_code: string;
  image: File[];
};

const buttonUpload = {
  width: "100%",
  color: "gray !important",
};

const FacilitiesLeftColumn = ({
  page,
  item_code,
  image,
}: facilitiesLeftColumnProps) => {
  const setItemCode2 = setter().cSetItemCode2;
  const [imageExist, setImageExist] = useState<any>();

  const handleUploadPhotoClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setImageExist(image[0]);
    setItemCode2(item_code);
  };

  return (
    <>
      <div className="card" style={{ marginBottom: "20px !important" }}>
        <div className="card-body pt-3 myHover" id="item_pic_id">
          <img
            id={`img_${item_code}`}
            src={image[0] === undefined ? coming_soon : `${image[0]}`}
            className="img-fluid rounded-start"
            style={{ objectFit: "scale-down" }}
            alt="..."
          />
        </div>
        <div className="card-footer">
          <div className="row p-2">
            {page === "facilities" && (
              <div className="col-lg-12 p-1">
                <button
                  type="button"
                  className="btn btn-success"
                  style={buttonUpload}
                  data-toggle="modal"
                  data-target="#extendSubscriptionModal"
                  data-whatever="@mdo"
                >
                  Upload Photo
                </button>
              </div>
            )}
            {(page === "facilities" || page === "borrower-history") && (
              <div className="col-lg-12 p-1">
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#basicModal"
                  onClick={handleUploadPhotoClick}
                  className="btn btn-primary uploadPhoto"
                >
                  Upload Photo
                </button>
              </div>
            )}
            {(page === "facilities" || page === "repair-order-history") && (
              <div className="col-lg-12 p-1">
                <a href="" className="btn btn-primary" style={buttonUpload}>
                  Borrower History{" "}
                  <span className="badge bg-white text-primary"> 3</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <UploadPhotoItemModal imageExist={imageExist} />
    </>
  );
};

export default FacilitiesLeftColumn;
