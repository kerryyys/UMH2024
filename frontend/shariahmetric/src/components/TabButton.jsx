import React, { useState } from "react";
import PropTypes from "prop-types";
import "../components-css/TabButton.css";

const TabButton = ({ label, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [newLabel, setNewLabel] = useState(label);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleRenameClick = () => {
    setIsRenaming(true);
  };

  const handleInputChange = (event) => {
    setNewLabel(event.target.value);
  };

  const handleRenameSubmit = () => {
    setIsRenaming(false);
    onClick(newLabel); // Pass the new label to the onClick function
  };

  return (
    <div
      className={`tab-button ${isActive ? "active" : ""} ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isRenaming ? (
        <input
          type="text"
          value={newLabel}
          onChange={handleInputChange}
          onBlur={handleRenameSubmit}
          autoFocus
        />
      ) : (
        <>
          <span>{label}</span>
          {isHovered && (
            <button className="rename-button" onClick={handleRenameClick}>
              <div className="rename"></div>
            </button>
          )}
        </>
      )}
    </div>
  );
};

TabButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabButton;
