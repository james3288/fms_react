import DropDownMenu from "./dropDownMenu/DropDownMenu";
import Notifications from "./notification/Notifications";

const Navigation = () => {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        {/* Search icon */}
        <li className="nav-item d-block d-lg-none">
          <a className="nav-link nav-icon search-bar-toggle" href="#">
            <i className="bi bi-search"></i>
          </a>
        </li>

        <li className="nav-item dropdown">
          {/* Notification */}
          <Notifications />
        </li>

        <li className="nav-item dropdown pe-3">
          {/* Dropdown */}
          <DropDownMenu />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
