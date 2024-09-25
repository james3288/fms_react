import useCountListOfFacilities from "../../customHooks/useCountListOfFacilities";
import { facilityHistory } from "../../typeProps/typeProps";
import SupplierItems from "./SupplierItems";
import "./supplierPriceUpdate.scss";

const SupplierPriceUpdate = () => {
  const { countListOfFc, status } = useCountListOfFacilities(6);

  const newListOfFc: facilityHistory[] =
    countListOfFc === undefined ? [] : countListOfFc.data.slice(0, 5);

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
          {status === "pending" ? (
            <div className="spinner-grow" role="status">
              <span className="sr-only"></span>
            </div>
          ) : (
            newListOfFc?.map((x, index) => (
              <>
                <div key={`supp_${index}`}>
                  <SupplierItems
                    items={`${x.item_name} - ${x.brand}`}
                    price={x.rr_price}
                    rs_no={x.rs_no}
                    supplier="Columbia Computer Center Inc"
                    type_of_purchasing={"Purchase Order"}
                    item_code={x.item_code}
                    date="01-12-23"
                  />
                  {index < 4 && <hr />}
                </div>
              </>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SupplierPriceUpdate;
