// Extracto.jsx
import React, { useState } from "react";
import SideBar from "../components/SideBar";
import DragDrop from "../components/DragDrop";
import SideChat from "../components/SideChat";
import "../pages-css/Extracto.css";

function Extracto() {
  const [todayFiles, setTodayFiles] = useState([]);
  const [fileAdded, setFileAdded] = useState(false);
  const [reportUploaded, setReportUploaded] = useState(false);

  // Function to handle file addition
  // const handleFileAdd = (file) => {
  //   if (file.type !== "application/pdf") {
  //     console.error("Only PDF files are allowed.");
  //     return;
  //   }

  //   // Update todayFiles state with the new file name
  //   setTodayFiles([...todayFiles, { name: file.name }]);
  //   setReportUploaded(true);
  // };
  // NEEDS HEAVY ATTENTION HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const handleFileAdd = () => {
    // if (file.type !== "application/pdf") {
    //   console.error("Only PDF files are allowed.");
    //   return;
    // }

    // // Update todayFiles state with the new file name
    // setTodayFiles([...todayFiles, { name: file.name }]);
    setReportUploaded(true);
  };

  return (
    <div id="Extracto">
      <div className="containerE">
        <div className="sidebar">
          {/* Pass todayFiles and setTodayFiles to SideBar */}
          <SideBar todayFiles={todayFiles} setTodayFiles={setTodayFiles} />
        </div>

        <div className="dragdrop">
          {/* Pass the handleFileAdd function to DragDrop component */}
          <DragDrop onFileAdd={handleFileAdd} />
        </div>
        {reportUploaded ? (
          <SideChat></SideChat>
        ) : (
          <div className="content">
            <div className="how">
              <p className="ins">How to Use Extrato :</p>
              <div>
                <p>1. Choose a file or drag it into the drop zone.</p>
                <p>2. Wait for Extrato to quickly analyze the file.</p>
                <p>3. Ask any questions you have about the file.</p>
                <p>4. Generate a summary for your file.</p>
              </div>
            </div>
            <div className="upgrade">
              <p className="up">Upgrade to Plus</p>
              <div>
                <p>1. Choose a file or drag it into the drop zone.</p>
                <p>2. Wait for Extrato to quickly analyze the file.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Extracto;
