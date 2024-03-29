import React, { useState } from "react";
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

  const handleFileAdd = (file) => {
    const currentDate = new Date();
    const fileDate = new Date(file.lastModified);

    // Calculate the difference in milliseconds
    const difference = currentDate.getTime() - fileDate.getTime();
    const daysDifference = Math.floor(difference / (1000 * 3600 * 24));

    // Add the file to the appropriate state based on its age
    if (daysDifference <= 7) {
      setLast7DaysFiles([...last7DaysFiles, file]);
    } else {
      setTodayFiles([...todayFiles, file]);
    }
  };

  return (
    <div id="sidebar">
      <div className="logo">ShariahMetric</div>
      <div className="container">
        <AddNew onFileAdd={handleFileAdd} />

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
  );
}

export default SideBar;
