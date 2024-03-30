// Report.jsx
import React from "react";
import "../components-css/Report.css";

function Report({ reportData }) {
  return (
    <div className="report-container">
      <h2 className="report-title">Screening Report: {reportData.fileName}</h2>
      <div className="report-content">
        {/* Render sections of the report */}
        {reportData.sections.map((section, index) => (
          <div key={index} className="report-section">
            <h3 className="section-title">{section.title}</h3>
            <p className="section-content">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Report;
