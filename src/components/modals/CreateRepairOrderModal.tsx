type TRepairOrderModal = {
  id: string;
};

const CreateRepairOrderModal = ({ id }: TRepairOrderModal) => {
  return (
    <>
      <div className="modal fade" id={id}>
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal Dialog Scrollable</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, voluptates eaque dicta deserunt adipisci quam, at odio
              fugit omnis porro assumenda nam nihil enim? Repudiandae distinctio
              ad mollitia laudantium odio.
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
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRepairOrderModal;
