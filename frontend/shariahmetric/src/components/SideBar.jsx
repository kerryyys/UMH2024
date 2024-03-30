import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components-css/SideBar.css";
import TabButton from "./TabButton";
import AddNew from "../components/AddNew";

function SideBar() {
  const [selectedTab, setSelectedTab] = useState("today");
  const [todayFiles, setTodayFiles] = useState([]);
  const [last7DaysFiles, setLast7DaysFiles] = useState([]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleFileAdd = async (file) => {
    if (file.type !== "application/pdf") {
      console.error("Only PDF files are allowed.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("your-backend-api-url", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File successfully uploaded.");
      } else {
        console.error("Failed to upload file.");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

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
              isActive={selectedTab === file.name}
              onClick={() => handleTabClick(file.name)}
            />
          ))}

          <p>Last 7 Days</p>
          {last7DaysFiles.map((file, index) => (
            <TabButton
              key={index}
              label={file.name}
              isActive={selectedTab === file.name}
              onClick={() => handleTabClick(file.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
