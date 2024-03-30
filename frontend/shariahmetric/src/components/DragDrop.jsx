// DragDrop.jsx
import React, { useRef } from "react";
import axios from "axios";
import { useState } from "react";
import "../components-css/DragDrop.css";

function DragDrop({ onFileAdd }) {
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  const handleBrowseFile = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    await uploadFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = async (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    await uploadFile(file);
  };

  const uploadFile = async (file) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/file",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        alert("PDF processed successfully");
      }
      onFileAdd(); // Call the callback function with the file name
      console.log("File uploaded successfully:", response.data);
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsLoading(false);
    }
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
        <button
          onClick={handleBrowseFile}
          disabled={isLoading}
          className={isLoading ? "loading" : ""}
        >
          {isLoading ? "Uploading..." : "Browse File"}
        </button>
      </div>
    </div>
  );
}

export default DragDrop;
