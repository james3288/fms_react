import { ChangeEvent, FormEvent, useEffect } from "react";
import FormValidation from "../main/formValidation/formValidation";
import InputFields from "../main/inputFields/inputFields";
// import { useRepairOrderStore } from "../store/useRepairOrderStore";
import { useRepairOrderStore } from "../store/useRepairOrderStore";
import {
  RepairOrderActions,
  RepairOrderState,
} from "../interfaces/repairOrderInterface";

type TRepairOrderModal = {
  id: string;
};

const CreateRepairOrderModal = ({ id }: TRepairOrderModal) => {
  // setter
  const { setItemCode, setItems } = useRepairOrderStore(
    (state: RepairOrderActions) => ({
      setItemCode: state.setItemCode,
      setItems: state.setItems,
    })
  );

  // getter
  const { itemCode, items } = useRepairOrderStore(
    (state: RepairOrderState) => ({
      itemCode: state.itemCode,
      items: state.items,
    })
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("hello world");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    if (id === "itemCodeId") {
      setItemCode(value);
    } else if (id === "itemsId") {
      setItems(value);
    }
  };

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <>
      <div
        className="modal fade"
        id="extendSubscriptionModal"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Create Repair Order
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/* className: "row g-3 needs-validation" */}
              <FormValidation handleSubmit={handleSubmit} className="">
                <InputFields
                  fields="textbox"
                  placeholder="Item Code"
                  htmlFor="Item Code"
                  onChange={handleChange}
                  id="itemCodeId"
                />

                <InputFields
                  fields="textbox"
                  placeholder="Items"
                  htmlFor="Items"
                  onChange={handleChange}
                  id="itemsId"
                />

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </FormValidation>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRepairOrderModal;
