import { useEffect, useState } from "react";
import DropDownMenu from "./dropDownMenu/DropDownMenu";
import Notifications from "./notification/Notifications";
import setter from "../../setter/setter";
import getter from "../../getter/getter";

const Navigation = () => {
  const setToggleSearchBar = setter().cSetToggleSearchBar;
  const toggleSearchBar = getter().cToggleSearchBar;

  const handleShowSearchBar = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setToggleSearchBar(!toggleSearchBar);
  };

  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        {/* Search icon */}
        <li className="nav-item d-block d-lg-none">
          <a
            className="nav-link nav-icon search-bar-toggle"
            href="#"
            onClick={handleShowSearchBar}
          >
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
