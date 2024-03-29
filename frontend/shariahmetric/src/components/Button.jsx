import React from "react";
import PropTypes from "prop-types";
import "../components-css/Button.css";

const Button = ({ color, children, onClick }) => {
    return (
        <button className={`custom-button ${color}`} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    color: PropTypes.string,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
};

export default Button;

