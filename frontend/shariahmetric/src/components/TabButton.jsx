import React from "react";
import PropTypes from "prop-types";
import "../components-css/TabButton.css";

const TabButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`tab-button ${isActive ? "active" : ""}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

TabButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabButton;
