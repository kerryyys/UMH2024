import React from "react";
import PropTypes from "prop-types";
import "../components-css/CustomButton.css";

const CustomButton = ({ variant, children }) => {
  return <button className={`custom-button ${variant}`}>{children}</button>;
};

CustomButton.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success"]),
  children: PropTypes.node.isRequired,
};

export default CustomButton;
