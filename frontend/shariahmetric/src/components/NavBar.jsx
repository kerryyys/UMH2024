import React from "react";
import "../components-css/NavBar.css";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  // Get the current pathname
  const location = useLocation();

  return (
    <nav className="navbar">
      <div>
        <Link to="/Home" className="logo">
          ShariahMetric
        </Link>
      </div>

      <div className="menu">
        <Link
          to="/Home"
          className={`menu-item ${
            location.pathname === "/Home" ? "active" : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/Extracto"
          className={`menu-item ${
            location.pathname === "/Extracto" ? "active" : ""
          }`}
        >
          Extracto
        </Link>
        <Link
          to="/Chatroom"
          className={`menu-item ${
            location.pathname === "/Chatroom" ? "active" : ""
          }`}
        >
          ChatBot
        </Link>
      </div>
      <div>
        <Link to="/ContactUs" className="contact-us">
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
