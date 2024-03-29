import React from "react";
import "../components-css/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <div className="menu">
        <Link to="/Home" className="menu-item">
          Home
        </Link>
        <Link to="/Extracto" className="menu-item">
          Extracto
        </Link>
        <Link to="/Chatbot" className="menu-item">
          ChatBot
        </Link>
      </div>
      <div>
        <Link to="/ContactUs" className="contact-us">Contact Us</Link>
      </div>
    </nav>
  );
};

export default NavBar;
