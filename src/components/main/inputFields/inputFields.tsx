import { ChangeEvent } from "react";
import "./inputFields.scss";

type TFields = {
  fields: string;
  placeholder: string;
  htmlFor: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeTextArea?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  message: string;
  status?: string;
};

const InputFields = ({
  fields,
  placeholder,
  htmlFor,
  onChange,
  id,
  message,
  status,
  onChangeTextArea,
}: TFields) => {
  if (fields === "textbox") {
    return (
      <div className="row">
        <div className="col">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control input"
              id={id}
              placeholder={placeholder}
              onChange={onChange}
            />
            <label htmlFor="floatingInput">{htmlFor}</label>
            {message != "" ? (
              <div className="valid-feedback valid">
                <div className="icon">
                  <i className="bi-check-circle-fill"> {status}</i>
                  {/* <div className="label">check</div> */}
                </div>
              </div>
            ) : (
              <div className="valid-feedback invalid">
                {placeholder} must not be empty!
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else if (fields === "textarea") {
    return (
      <div className="row">
        <div className="col">
          <div className="form-floating mb-3">
            <textarea
              className="form-control"
              placeholder={placeholder}
              id={id}
              style={{ height: "100px" }}
              onChange={onChangeTextArea}
            ></textarea>
            <label htmlFor="floatingTextarea">{htmlFor}</label>
            {message != "" ? (
              <div className="valid-feedback valid">
                <div className="icon">
                  <i className="bi-check-circle-fill"> {status}</i>
                  {/* <div className="label">check</div> */}
                </div>
              </div>
            ) : (
              <div className="valid-feedback invalid">
                {placeholder} must not be empty!
              </div>
            )}
          </div>
        </div>
      </div>
    );
  } else if (fields === "date") {
    return (
      <div className="row">
        <div className="col">
          <input
            type="date"
            id={id}
            className="form-control input"
            onChange={onChange}
          />
          {message != "" ? (
            <div className="valid-feedback valid">
              <div className="icon">
                <i className="bi-check-circle-fill"> {status}</i>
                {/* <div className="label">check</div> */}
              </div>
            </div>
          ) : (
            <div className="valid-feedback invalid">
              {placeholder} must not be empty!
            </div>
          )}
        </div>
      </div>
    );
  } else if (fields === "file") {
    return (
      <div className="row">
        <div className="col">
          <input className="form-control input" type="file" id="formFile" />
        </div>
      </div>
    );
  } else if (fields === "text-validation") {
    return (
      <div className="col">
        <label htmlFor="validationCustom01" className="form-label">
          {placeholder}
        </label>
        <input
          type="text"
          className="form-control"
          id="validationCustom01"
          onChange={onChange}
          required
        />
        <div className="valid-feedback">Looks good!</div>
      </div>
    );
  }
};

export default InputFields;
