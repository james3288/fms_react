import comming_soon from "./../../../assets/img/coming_soon.jpg";

type TSupplierItems = {
  items: string;
  price: number;
  rs_no: string;
  supplier: string;
  type_of_purchasing: string;
  item_code: string;
  date: string;
};

const SupplierItems = (props: TSupplierItems) => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
          <a href="" style={{ color: "blue" }}>
            {/* <i className="bi-tags-fill"></i> */}
            <img className="item-img" src={comming_soon} alt="" />
          </a>
        </div>
        <div className="supp">
          <h6 className="supp-title">{props.items}</h6>
          <span className="text-success small pt-1 fw-bold">{props.price}</span>

          <br />
          <span className="text-muted small pt-2 ps-1">
            RS NO: <b>{props.rs_no}</b>
          </span>
          <br />
          <span className="text-muted small pt-2 ps-1">
            SUPPLIER: <b>{props.supplier}</b>
          </span>
          <br />
          <span className="text-muted small pt-2 ps-1">
            TYPE OF PURCHASING: <b>{props.type_of_purchasing}</b>
          </span>
          <br />
          <span className="text-muted small pt-2 ps-1">
            ITEM CODE: <b>{props.item_code}</b>
          </span>
        </div>
      </div>
    </>
  );
};

export default SupplierItems;
