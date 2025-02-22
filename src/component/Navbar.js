import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navbar.css"; // Import external CSS file for custom styles

const navLinks = [
  {
    name: "Home",
    link: "/"
  },
  { name: "About Us", link: "/about" },
  { name: "Classroom", link: "/classroom" },
  { name: "Contact Us", link: "/contact" },
  { name: "Gallery", link: "#" },
];

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#dc3545" }}>
      <div className="container">
        <a className="navbar-brand text-white" style={{ fontSize: "1.5rem", fontWeight: "bold" }} href="#">
          <i className="fas fa-graduation-cap" style={{ fontSize: "2rem" }} ></i> K.I.T COACHING CLASSES
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navLinks.map((item, index) => (
              <li key={index} className={`nav-item ${item.subMenu ? "dropdown" : ""}`}>
                <a
                  className={`nav-link ${item.subMenu ? "dropdown-toggle text-white" : "text-white"} nav-hover-effect`}
                  href={item.link} style={{ fontSize: "18px" }}
                  id={`navDropdown-${index}`}
                  role="button"
                  data-bs-toggle={item.subMenu ? "dropdown" : ""}
                  aria-expanded="false"
                >
                  {item.name}
                </a>
                {item.subMenu && (
                  <ul className="dropdown-menu">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a className="dropdown-item" href={subItem.link}>
                          {subItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
