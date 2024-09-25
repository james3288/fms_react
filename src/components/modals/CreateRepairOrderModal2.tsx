import { useEffect } from "react";
import { createRepairOrderModalProps } from "../typeProps/typeProps";
import CreateRepairOrderForm from "../formElements/CreateRepairOrderForm";
import CreateRepairOrderForm2 from "../formElements/CreateReapirOrderForm2";

const CreateRepairOrderModal2 = ({
  cItemCode,
}: createRepairOrderModalProps) => {
  //   useEffect(() => {
  //     console.log(cItemCode);
  //   }, [cItemCode]);

  return (
    <div className="modal fade" id="modalDialogScrollable" tabIndex={-1}>
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Repair Order</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <CreateRepairOrderForm />
            {/* <CreateRepairOrderForm2 /> */}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateRepairOrderModal2;
