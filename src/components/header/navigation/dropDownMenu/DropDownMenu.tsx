import message3 from "./../../../../assets/img/messages-3.jpg";
const DropDownMenu = () => {
  return (
    <>
      <a
        className="nav-link nav-profile d-flex align-items-center pe-0"
        href="#"
        data-bs-toggle="dropdown"
      >
        <img src={message3} alt="" className="rounded-circle" />
        <span className="d-none d-md-block dropdown-toggle ps-2">
          King James Uayan
        </span>{" "}
      </a>
      {/* DROPDOWN MENU */}
      <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li className="dropdown-header">
          <h6>King</h6>
          <span>Position</span>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="">
            <i className="bi bi-gear"></i>
            <span>Settings</span>
          </a>
        </li>

        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a
            className="dropdown-item d-flex align-items-center"
            href="pages-faq.html"
          >
            <i className="bi bi-question-circle"></i>
            <span>Need Help?</span>
          </a>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>

        <li>
          <a className="dropdown-item d-flex align-items-center" href="">
            <i className="bi bi-box-arrow-right"></i>
            <span>Sign Out</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default DropDownMenu;
