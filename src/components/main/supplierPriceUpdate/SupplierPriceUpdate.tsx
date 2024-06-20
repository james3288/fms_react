import SupplierItems from "./SupplierItems";
import "./supplierPriceUpdate.scss";

const SupplierPriceUpdate = () => {
  return (
    <div className="col-12">
      <div className="card info-card sales-card">
        <div className="filter">
          <a
            className="icon"
            href="#"
            data-bs-toggle="dropdown"
            style={{ color: "green" }}
          >
            {/* <i className={icons}></i> */}
          </a>
        </div>

        <div className="card-body">
          <h5 className="card-title">
            {"Supplier Price Update"} <span>| This Year</span>
          </h5>

          {/* Supplier Items */}
          <SupplierItems
            items="Laptop - Acer"
            price={42222}
            rs_no="423923"
            supplier="Columbia Computer Center Inc"
            type_of_purchasing="Purchase Order"
            item_code="DT-23232"
            date="01-12-23"
          />
          <hr />
          <SupplierItems
            items="Laptop - Acer"
            price={42222}
            rs_no="423923"
            supplier="Columbia Computer Center Inc"
            type_of_purchasing="Purchase Order"
            item_code="DT-23232"
            date="01-12-23"
          />
          <hr />
          <SupplierItems
            items="Laptop - Acer"
            price={42222}
            rs_no="423923"
            supplier="Columbia Computer Center Inc"
            type_of_purchasing="Purchase Order"
            item_code="DT-23232"
            date="01-12-23"
          />
          <hr />
          <SupplierItems
            items="Laptop - Acer"
            price={42222}
            rs_no="423923"
            supplier="Columbia Computer Center Inc"
            type_of_purchasing="Purchase Order"
            item_code="DT-23232"
            date="01-12-23"
          />
        </div>
      </div>
    </div>
  );
};

export default SupplierPriceUpdate;
