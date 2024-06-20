import coming_soon from "./../../../../assets/img/coming_soon.jpg";

const FacilitiesLeftColumn = () => {
  return (
    <div className="card" style={{ marginBottom: "20px !important" }}>
      <div className="card-body pt-3 myHover" id="item_pic_id">
        <img
          src={coming_soon}
          className="img-fluid rounded-start"
          style={{ objectFit: "scale-down" }}
          alt="..."
        />
        {/* <div className="overlay2">
          <div className="text">ADFIL PROPERTY</div>
        </div> */}
      </div>
      <div className="card-footer">
        <div className="row p-2">
          <div className="col-lg-12 p-1">
            <button
              type="button"
              className="btn btn-success"
              style={{ width: "100%" }}
              data-bs-toggle="modal"
              data-bs-target="#modal_cro_id_${fac.item_code}"
              id="createRepairOrderBtn_${fac.item_code}"
            >
              Create Repair Order
            </button>
          </div>
          <div className="col-lg-12 p-1">
            <a href="" className="btn btn-primary" style={{ width: "100%" }}>
              {" "}
              Repair Order History{" "}
              <span className="badge bg-white text-primary"> 4</span>
            </a>
          </div>
          <div className="col-lg-12 p-1">
            <a href="" className="btn btn-primary" style={{ width: "100%" }}>
              Borrower History{" "}
              <span className="badge bg-white text-primary"> 3</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesLeftColumn;
