import { ChangeEvent, FormEvent } from "react";
import "./inputFields.scss";

type TFields = {
  fields: string;
  placeholder: string;
  htmlFor: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
};

const InputFields = ({
  fields,
  placeholder,
  htmlFor,
  onChange,
  id,
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
            <div className="valid-feedback">Looks good!</div>
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
              id="floatingTextarea"
              style={{ height: "100px" }}
            ></textarea>
            <label htmlFor="floatingTextarea">{htmlFor}</label>
          </div>
        </div>
      </div>
    );
  } else if (fields === "date") {
    return (
      <div className="row">
        <div className="col">
          <input type="date" className="form-control input" />
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
