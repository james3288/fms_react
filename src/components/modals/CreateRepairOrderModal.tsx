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
  const {
    setItemCode,
    setItems,
    setProblemEncountered,
    setRepairDate,
    setDeliveredBy,
    setReceivedBy,
    setContactNo,
  } = useRepairOrderStore((state: RepairOrderActions) => ({
    setItemCode: state.setItemCode,
    setItems: state.setItems,
    setProblemEncountered: state.setProblemEncountered,
    setRepairDate: state.setRepairDate,
    setDeliveredBy: state.setDeliveredBy,
    setReceivedBy: state.setReceivedBy,
    setContactNo: state.setContactNo,
  }));

  // getter
  const {
    itemCode,
    items,
    problemEncountered,
    repairDate,
    deliveredBy,
    receivedBy,
    contactNo,
  } = useRepairOrderStore((state: RepairOrderState) => ({
    itemCode: state.itemCode,
    items: state.items,
    problemEncountered: state.problemEncountered,
    repairDate: state.repairDate,
    deliveredBy: state.deliveredBy,
    receivedBy: state.receivedBy,
    contactNo: state.contactNo,
  }));

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
    } else if (id === "dateId") {
      setRepairDate(value);
    } else if (id === "deliveredById") {
      setDeliveredBy(value);
    } else if (id === "receivedById") {
      setReceivedBy(value);
    } else if (id === "contactNoId") {
      setContactNo(value);
    }
  };

  const handleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    if (id === "problemEncounteredId") {
      setProblemEncountered(value);
    }
  };

  // const handleChangeOption = (e: ChangeEvent<HTMLSelectElement>) => {
  //   const { id, value } = e.target;

  //   console.log(value);
  // };

  useEffect(() => {
    console.log(repairDate);
  }, [repairDate]);

  const optionList: { [key: string]: string }[] = [
    { "1": "option 1" },
    { "2": "option 2" },
    { "3": "option 3" },
    { "4": "option 4" },
  ];

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
                  message={itemCode}
                  status="good!"
                />

                <InputFields
                  fields="textbox"
                  placeholder="Items"
                  htmlFor="Items"
                  onChange={handleChange}
                  id="itemsId"
                  message={items}
                  status="good!"
                />
                <InputFields
                  fields="textarea"
                  placeholder="problem encountered"
                  htmlFor="problem encountered"
                  id="problemEncounteredId"
                  message={problemEncountered}
                  status="good!"
                  onChangeTextArea={handleChangeTextArea}
                />
                <InputFields
                  fields="date"
                  placeholder="repair date"
                  htmlFor="repair date"
                  id="dateId"
                  message={repairDate}
                  status="good!"
                  onChange={handleChange}
                />
                <InputFields
                  fields="textbox"
                  placeholder="delivered by"
                  htmlFor="delivered by"
                  onChange={handleChange}
                  id="deliveredById"
                  message={deliveredBy}
                  status="good!"
                />
                <InputFields
                  fields="textbox"
                  placeholder="received by"
                  htmlFor="received by"
                  onChange={handleChange}
                  id="receivedById"
                  message={receivedBy}
                  status="good!"
                />

                {/* <InputFields
                  fields="textbox"
                  placeholder="contact no"
                  htmlFor="contact no"
                  onChange={handleChange}
                  id="contactNoId"
                  message={contactNo}
                  status="good!"
                /> */}
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
