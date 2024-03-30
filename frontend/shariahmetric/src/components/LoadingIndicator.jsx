import React from "react";
import "../components-css/LoadingIndicator.css";

function LoadingIndicator() {
  return <div className="loading-indicator">
    <div className="spinner"></div>
    <p>Extracting the data</p>
    <span>Please Wait</span>
  </div>;
}

export default LoadingIndicator;
