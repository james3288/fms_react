import { packageProps } from "../../../../typeProps/typeProps";

const Packages = (packageItem: packageProps) => {
  return (
    <div className="card package-box-border" style={{ marginBottom: "20px" }}>
      <div className="card-header bg-light fs-4">PACKAGES:</div>
      <div className="card-body p-3">
        <ul className="list-group">
          {packageItem?.packageItems?.map((item, index) => (
            <li className="list-group-item p-1" key={index}>
              <i className="ri-arrow-right-s-fill text-success"></i>
              <span className="badge package-status">
                {item.status} | {item.location}
              </span>
              <span className="Serve">
                <a
                  href=""
                  className="card-title"
                  data-bs-toggle="modal"
                  data-bs-target="#PackageModal"
                >
                  {" "}
                  {item.items}
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Packages;
