import { useState } from "react";
import "../components-css/AddNew.css";

function AddNew({ onFileAdd }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    onFileAdd(files[0]); // Add the dropped file
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    onFileAdd(files[0]); // Add the selected file
  };

  return (
    <div className="containerAN">
      <button
        className={`drop-area ${isDragging ? "dragging" : ""}`}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>+ New File</p>
        <span>Drop PDF Here</span>
      </button>
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileInputChange}
        style={{ display: "none" }}
      />
    </div>
  );
}

export default AddNew;
