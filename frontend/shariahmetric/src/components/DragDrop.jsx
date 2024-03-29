import React from "react";
import CustomButton from "../components/CustomButton";
import "../components-css/DragDrop.css";
import "../components/CustomButton";

function DragDrop() {
  const handleBrowseFile = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileSelect = (event) => {
    const files = event.target.files;
    // Process the selected files as needed
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    // Process the dropped files as needed
  };

  return (
    <div id="drag-drop" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="container">
        <div className="info">
          <div className="cloud"></div>
          <span>Drag and Drop Files Here</span>
          <p>File supported PDF</p>
        </div>
        <input
          type="file"
          id="fileInput"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={handleFileSelect}
        />
        <CustomButton variant="success" onClick={handleBrowseFile}>
          Browse File
        </CustomButton>
      </div>
    </div>
  );
}

export default DragDrop;
