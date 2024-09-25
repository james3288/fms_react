const items = [
  {
    id: 1,
    caption: "Dashboard",
    icon: "bi bi-grid",
    facilities: [],
    colapse: false,
  },
  {
    id: 2,
    caption: "QR Code",
    icon: "bi bi-qr-code-scan",
    facilities: [],
    colapse: false,
  },
  {
    id: 3,
    caption: "Item Facilities",
    icon: "bi bi-menu-button-wide",
    facilities: [
      { id: 1, caption: "Computer - Desktop", icon: "bi bi-grid" },
      { id: 2, caption: "Aircon - HP", icon: "bi bi-grid" },
    ],
    colapse: true,
  },
  {
    id: 4,
    caption: "Register",
    icon: "bi bi-card-list",
    facilities: [],
    colapse: false,
  },
  {
    id: 5,
    caption: "Sign Out",
    icon: "bi bi-box-arrow-in-right",
    facilities: [],
    colapse: false,
  },
];

const SideBarItems = () => {
  return (
    <ul className="sidebar-nav" id="sidebar-nav">
      {items?.map((item) => (
        <li className="nav-item" key={item.id}>
          {item.colapse ? (
            <>
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
                {item?.facilities?.map((fac) => (
                  <li key={fac.id}>
                    <a href="">
                      <i className={fac.icon}></i>
                      <span>{fac.caption}</span>
                    </a>
                  </li>
                ))}
                {/* <li>
                  <a href="">
                    <i className="bi bi-circle"></i>
                    <span>Computer Desktop</span>
                  </a>
                </li> */}
              </ul>
            </>
          ) : (
            <a className="nav-link collapsed" href="">
              <i className={item.icon}></i>
              <span>{item.caption}</span>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default SideBarItems;
