// import ChevroDown from "./icons/chevroDown";

import { useContext } from "react";
import { AppContext, AppContextType } from "./context/AppContext";
import "./sideBar.scss";

const SideBar = () => {
  const contextValue = useContext<AppContextType>(AppContext);

  return (
    <aside
      id="sidebar"
      className={contextValue.toggle ? "sidebar toggle-sidebar" : "sidebar"}
    >
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link collapsed" href="">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="">
            <i className="bi bi-qr-code-scan"></i>

            <span>QR Code</span>
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i className="bi bi-menu-button-wide"></i>
            <span>Item Facilities</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            className="nav-content collapse "
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <a href="">
                <i className="bi bi-circle"></i>
                <span>Computer Desktop</span>
              </a>
            </li>
          </ul>
        </li>

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="#">
            <i className="bi bi-card-list"></i>
            <span>Register</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link collapsed" href="">
            <i className="bi bi-box-arrow-in-right"></i>
            <span>Sign Out</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
