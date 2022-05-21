import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./navbar.css";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const ChangeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeBg);

  return (
    <>
      <nav
        className={
          navbar
            ? "navbar navbar-expand fixed-top active"
            : "navbar navbar-expand fixed-top"
        }
      >
        <NavLink to="/" className="navbar-brand">
          <span>E</span>asy Coding
        </NavLink>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/gallery" className="nav-link">
                Gallery
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
