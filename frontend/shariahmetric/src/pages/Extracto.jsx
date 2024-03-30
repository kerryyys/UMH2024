// Extracto.jsx
import React, { useState } from "react";
import SideBar from "../components/SideBar";
import DragDrop from "../components/DragDrop";
import SideChat from "../components/SideChat"; // Import SideChat component
import "../pages-css/Extracto.css";

function Extracto() {
  const [todayFiles, setTodayFiles] = useState([]);
  const [reportData, setReportData] = useState(null); // State to store report data

  // Function to handle file addition
  const handleFileAdd = (file) => {
    if (file.type !== "application/pdf") {
      console.error("Only PDF files are allowed.");
      return;
    }

    // Update todayFiles state with the new file name
    setTodayFiles([...todayFiles, { name: file.name }]);
    // Call backend to generate report data
    // Mock implementation, replace with actual backend call
    generateReport(file);
  };

  // Function to generate report data
  const generateReport = (file) => {
    // Mock implementation, replace with actual backend call
    // Here you would call your backend to generate the report data
    // Simulating a delay to mimic backend call
    setTimeout(() => {
      setReportData({
        fileName: file.name,
        // Sample report data, replace with actual data returned from backend
        sections: [
          { title: "Section 1", content: "Content for section 1" },
          { title: "Section 2", content: "Content for section 2" },
          { title: "Section 3", content: "Content for section 3" },
        ],
      });
    }, 2000); // Simulated delay of 2 seconds
  };

  return (
    <div id="Extracto">
      <div className="container">
        <div className="sidebar">
          <SideBar todayFiles={todayFiles} />
        </div>

        <div className="dragdrop">
          <DragDrop onFileAdd={handleFileAdd} />
        </div>

        <div className="content">
          {/* Render Report component if reportData is available, else render instructions */}
          {reportData ? (
            <Report reportData={reportData} />
          ) : (
            <div className="how">
              <p className="ins">How to Use Extrato :</p>
              <div>
                <p>1. Choose a file or drag it into the drop zone.</p>
                <p>2. Wait for Extrato to quickly analyze the file.</p>
                <p>3. Ask any questions you have about the file.</p>
                <p>4. Generate a summary for your file.</p>
              </div>
            </div>
          )}

          <div className="upgrade">
            <p className="up">Upgrade to Plus</p>
            <div>
              <p>1. Choose a file or drag it into the drop zone.</p>
              <p>2. Wait for Extrato to quickly analyze the file.</p>
            </div>
          </div>
        </div>

        <div className="side-chat">
          {/* Render SideChat component */}
          <SideChat />
        </div>
      </div>
    </div>
  );
}

export default Extracto;
