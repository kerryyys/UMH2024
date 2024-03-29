import React from 'react';
import SideBar from '../components/SideBar';
import DragDrop from '../components/DragDrop';
import "../pages-css/Extracto.css";

function Extracto() {
  return (
    <div className="container">
      <div className='sidebar'>
        <SideBar />
      </div>

      <div className='dragdrop'> <DragDrop /></div>
      <div className="content">
        <div className="how">
          <p>How to Use Extrato :</p>
          <div>
            <p>1. Choose a file or drag it into the drop zone.</p>
            <p>2. Wait for Extrato to quickly analyze the file.</p>
            <p>3. Ask any questions you have about the file.</p>
            <p>4. Generate a summary for your file.</p>
          </div>
        </div>
        <div className="upgrade">
          <p>Upgrade to Plus</p>
          <div>
            <p>1. Choose a file or drag it into the drop zone.</p>
            <p>2. Wait for Extrato to quickly analyze the file.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extracto;