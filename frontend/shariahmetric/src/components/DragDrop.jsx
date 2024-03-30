import React, { useRef } from "react";
import "../components-css/DragDrop.css";

function DragDrop({ onFileAdd }) {
  const fileInputRef = useRef(null);

  const handleBrowseFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (event) => {
    const files = event.target.files;
    onFileAdd(files);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    onFileAdd(files);
  };

  return (
    <div id="drag-drop" onDrop={handleDrop} onDragOver={handleDragOver}>
      <div className="containerDD">
        <div className="info">
          <div className="cloud"></div>
          <span>Drag & Drop</span>
          <p>File supported PDF</p>
        </div>
        <input
          type="file"
          className="upload"
          accept=".pdf"
          style={{ display: "none" }}
          onChange={handleFileSelect}
          ref={fileInputRef}
        />

        <button onClick={handleBrowseFile}>
          Browse File
        </button>
      </div>
    </div>
  );
}

export default DragDrop;
