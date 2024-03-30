// SideBar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components-css/SideBar.css";
import TabButton from "./TabButton";
import AddNew from "../components/AddNew";

function SideBar({ onFileAdd }) {
  const [selectedTab, setSelectedTab] = useState("today");
  const [todayFiles, setTodayFiles] = useState([]);
  const [last7DaysFiles, setLast7DaysFiles] = useState([]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleTabRename = (oldLabel, newLabel) => {
    const updatedTodayFiles = todayFiles.map((file) =>
      file.name === oldLabel ? { ...file, name: newLabel } : file
    );
    setTodayFiles(updatedTodayFiles);

    // If the renamed tab was selected, update selectedTab to reflect the new label
    if (selectedTab === oldLabel) {
      setSelectedTab(newLabel);
    }
  };

  const handleFileAdd = (file) => {
    if (file.type !== "application/pdf") {
      console.error("Only PDF files are allowed.");
      return;
    }

    // Update todayFiles state with the new file name
    setTodayFiles([...todayFiles, { name: file.name }]);
  };

  // Pass the handleFileAdd function to AddNew component
  return (
    <div id="sidebar">
      <div className="sidebar-content">
        <div className="logo">
          <Link to="/Home">ShariahMetric</Link>
        </div>

        <AddNew onFileAdd={handleFileAdd} />

        <div className="history">
          <p>Today</p>
          {todayFiles.map((file, index) => (
            <TabButton
              key={index}
              label={file.name}
              // isActive={selectedTab === file.name}
              onClick={(newLabel) => handleTabRename(file.name, newLabel)}
            />
          ))}

          <p>Last 7 Days</p>
          {last7DaysFiles.map((file, index) => (
            <TabButton
              key={index}
              label={file.name}
              isActive={selectedTab === file.name}
              onClick={(newLabel) => handleTabRename(file.name, newLabel)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
